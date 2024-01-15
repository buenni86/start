var n=!1,a="https://dbserviceportal.service-now.com/serviceportal?id=sc_cat_item&category_sys_id=undefined&sys_id=18d4a8d0dbbaf4109e93eacbd39619ae",o="info",l="sbahn_it",i="fo_ent";WA.room.onEnterZone(o,()=>{WA.ui.openPopup("infoPopup",`Willkommen bei 
 DB WorkAdventure! 
 Erst nach deiner pers\xF6nlichen Freischaltung kannst du den OpenSpace Bereich sowie andere Umgebungen betreten. 
 Alles dazu findest du im Digitalportal!`,[{label:"Schlie\xDFen",callback:e=>{n=!1,e.close()}},{label:"Digitalportal",callback:e=>{WA.nav.openTab(a),n=!0,e.close()}}])});WA.room.onLeaveZone(o,()=>{popup.close(),n&&(WA.nav.closeCoWebSite(),n=!1)});WA.room.onEnterZone(i,()=>{WA.ui.openPopup("onlyFoEnt","Zutritt nur f\xFCr Forscher und Entdecker!",[{label:"Schlie\xDFen",callback:e=>{n=!1,e.close()}}])});WA.room.onEnterZone(l,()=>{WA.ui.openPopup("onlySBahn_IT",`Zutritt nur f\xFCr die Einheit 
 S-Bahn IT Applications!`,[{label:"Schlie\xDFen",callback:e=>{n=!1,e.close()}}])});
