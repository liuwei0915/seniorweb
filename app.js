var menulist = document.getElementById("menulist");
menulist.style.maxHeight = "0px";
function menutoggle() {
    if (menulist.style.maxHeight == "0px") {
        menulist.style.maxHeight = "130px";
    }
    else {
        menulist.style.maxHeight = "0px";
    }
}