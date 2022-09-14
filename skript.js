var currentPopup = undefined;
var isCoWebSiteOpened =  false;
var urlInfo = "https://dbserviceportal.service-now.com/serviceportal?id=sc_cat_item&category_sys_id=undefined&sys_id=18d4a8d0dbbaf4109e93eacbd39619ae";

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

var zoneInfo = "info";
var zoneSAB = "sab";
var zoneSBahn_IT = "sbahn_it";
var zoneFoEnt = "fo_ent";

WA.room.onEnterZone(zoneInfo, () => {
   currentPopup =  WA.ui.openPopup("infoPopup","Willkommen bei \n DB WorkAdventure! \n Erst nach deiner persönlichen Freischaltung kannst du den OpenSpace Bereich sowie andere Umgebungen betreten. \n Alles dazu findest du im Digitalportal!",[
        {
            label: "Schließen",
            callback: (popup => {
                isCoWebSiteOpened = false;
                popup.close();
            })
        },
        {
            label: "Digitalportal",
            callback: (popup => {
                WA.nav.openTab(urlInfo);
                isCoWebSiteOpened = true;
                popup.close();
            })
        }]);
})

WA.room.onLeaveZone(zoneInfo, () =>{
    popup.close();

    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})

WA.room.onEnterZone(zoneSAB, () => {
   currentPopup =  WA.ui.openPopup("onlySAB","Zutritt nur für die Einheit SAB!",[
        {
            label: "Schließen",
            callback: (popup => {
                isCoWebSiteOpened = false;
                popup.close();
            })
        }]);
})

WA.room.onEnterZone(zoneSBahn_IT, () => {
   currentPopup =  WA.ui.openPopup("onlySBahn_IT","Zutritt nur für die Einheit \n S-Bahn IT Applications!",[
        {
            label: "Schließen",
            callback: (popup => {
                isCoWebSiteOpened = false;
                popup.close();
            })
        }]);
})

WA.room.onEnterZone(zoneFoEnt, () => {
   currentPopup =  WA.ui.openPopup("onlyFo_Ent","Zutritt nur für Forscher und Entdecker!",[
        {
            label: "Schließen",
            callback: (popup => {
                isCoWebSiteOpened = false;
                popup.close();
            })
        }]);
})