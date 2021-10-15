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

WA.room.onEnterZone(zoneInfo, () => {
   currentPopup =  WA.ui.openPopup("infoPopup","Willkommen bei \n DB WorkAdventure! \n Erst nach deiner persönlichen Freischaltung kannst du den OpenSpace Bereich sowie andere Umgebungen betreten. \n Alles dazu findest du im Digitalportal!",[
        {
            label: "Schließen",
            callback: (popup => {
                isCoWebSiteOpened = false;
                closePopUp();
            })
        },
        {
            label: "Digitalportal",
            callback: (popup => {
                WA.nav.openTab(urlInfo);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone(zoneInfo, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})
