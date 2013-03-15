#!/bin/bash
# exit on errors and echo commands as they are executed
set -e -x

# export ROOT_DIR=`dirname "${BASH_SOURCE[0]}"`
export ROOT_DIR=`pwd`
export TEMP_DIR=`mktemp -d -t montagejs_org_temp.XXXXXX`
export SOURCE_DIR="$ROOT_DIR/source"
export OUT_DIR="$ROOT_DIR/generated"
export DEPLOY_DIR="$ROOT_DIR/deploy"

rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR"

echo "Output directory is $OUT_DIR"
echo "Temp directory is $TEMP_DIR"
echo

### Generate ###

master_hash=`git rev-parse --short HEAD`
echo "Update to master $master_hash" >> "$TEMP_DIR/COMMIT_MESSAGE"
echo "" >> "$TEMP_DIR/COMMIT_MESSAGE"

#####################################################################
# Add sub-build scripts here
# These environment variables are available:
#
# $TEMP_DIR
#           Directory to place temporary build files
# $TEMP_DIR/COMMIT_MESSAGE
#           Append to this file to add to the commit message
# $OUT_DIR
#           Directory to put new output files. At the end of the build all
#           files in this directory are copied into the gh-pages branch

./build/build.sh

#####################################################################

# copy files recursivly, without overwriting existing files (as they have
# been generated by a previous step)
cp -rn "$SOURCE_DIR"/* "$OUT_DIR"

pushd "$OUT_DIR"
for p in `find . -name package.json`; do
    pushd `dirname $p`
    npm install
    popd
done
popd

if [ "$1" == "--no-build" ]
then
    echo "Not building"
    exit 0;
fi

## Build ###

# install devDependencies for all copies of Montage for Mop to work
pushd "$OUT_DIR"
for m in `find . -type d -name montage`; do
    pushd $m
    npm install
    popd
done
popd

"$OUT_DIR/node_modules/.bin/mop" "$OUT_DIR"

for a in `find $OUT_DIR/apps -mindepth 1 -maxdepth 1 -type d`; do
    "$OUT_DIR/node_modules/.bin/mop" "$a"
    # move to the montagejs.org build directory
    mv "$a/builds/"*@* "$OUT_DIR/builds/montagejs.org/apps/"`basename $a`
done

cp -r "$OUT_DIR/docs/kitchen-sink" "$OUT_DIR/builds/montagejs.org/docs/kitchen-sink"

### Deploy ###

rm -rf "$DEPLOY_DIR"
git clone --branch gh-pages git@github.com:montagejs/montagejs.org.git "$DEPLOY_DIR"
# clean out the deploy dir ready for the new content
rm -rf "$DEPLOY_DIR"/*

mv "$OUT_DIR/builds/montagejs.org@"*/* "$DEPLOY_DIR"

if [ "$1" == "--no-commit" ]
then
    echo "Not committing"
    exit 0;
fi

### Commit ###

pushd "$DEPLOY_DIR"

# remove tracked files that have been deleted
git add --update
# add new files
git add .

# Commit exits with non-zero status if there are no changes. "|| :" swallows
# this exit status so that the rest of the script continues.
git commit --file="$TEMP_DIR/COMMIT_MESSAGE" || :

popd

rm -rf $TEMP_DIR

echo "Done."
