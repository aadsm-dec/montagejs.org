montageDefine("068ef8c","ui/main.reel/main.html",{text:'<!DOCTYPE html>\n\n<html>\n    <head>\n        <meta http-equiv=content-type content="text/html; charset=utf-8">\n\n        <link rel=stylesheet type="text/css" href=main.css>\n        <link href="http://fonts.googleapis.com/css?family=Nunito:400,700" rel=stylesheet type="text/css">\n        <script type="text/montage-serialization">{"owner":{"properties":{"element":{"#":"main"}}},"facadeflow":{"prototype":"ui/facadeflow.reel","properties":{"element":{"#":"facade-flow"}},"bindings":{"property":{"<-":"@label.path"},"latestBoxofficeMovies":{"<-":"@owner.appData.latestBoxofficeMovies"},"upcomingMovies":{"<-":"@owner.appData.upcomingMovies"},"topDvdRentals":{"<-":"@owner.appData.topDvdRentals"},"inTheaters":{"<-":"@owner.appData.inTheaters"},"categoryId":{"<-":"@owner.categoryId"}}},"latest":{"prototype":"montage/ui/toggle-button.reel","properties":{"element":{"#":"latest"},"identifier":"categoryButton","pressedClass":"selected","category":"latestBoxofficeMovies"},"listeners":[{"type":"action","listener":{"@":"owner"}}]},"theaters":{"prototype":"montage/ui/toggle-button.reel","properties":{"element":{"#":"theaters"},"identifier":"categoryButton","pressedClass":"selected","category":"inTheaters"},"listeners":[{"type":"action","listener":{"@":"owner"}}]},"dvd":{"prototype":"montage/ui/toggle-button.reel","properties":{"element":{"#":"dvd"},"identifier":"categoryButton","pressedClass":"selected","category":"topDvdRentals"},"listeners":[{"type":"action","listener":{"@":"owner"}}]},"upcoming":{"prototype":"montage/ui/toggle-button.reel","properties":{"element":{"#":"upcoming"},"identifier":"categoryButton","pressedClass":"selected","category":"upcomingMovies"},"listeners":[{"type":"action","listener":{"@":"owner"}}]},"popup":{"prototype":"ui/moviepopup.reel","properties":{"element":{"#":"popup"}}}}</script>\n\n    </head>\n\n    <body>\n        <div data-montage-id=main class=main>\n            <div data-montage-id=facade class=facade>\n                <header class=header>\n                    <img class=logo src="assets/image/logo.png" alt=logo>\n                    <div class="filter montage-ButtonGroup">\n                        <button data-montage-id=latest>Box Office</button>\n                        <button data-montage-id=theaters>In Theaters</button>\n                        <button data-montage-id=upcoming>Upcoming</button>\n                        <button data-montage-id=dvd>DVD Rentals</button>\n                    </div>\n                </header>\n                <div data-montage-id=facade-flow class=facade-flow></div>\n                <div data-montage-id=popup class=popup></div>\n            </div>\n        </div>\n    </body>\n\n</html>'})