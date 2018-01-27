function userlogin() {
    var frameSrc = GetUrlRootPath() + "/Account/Login.html?surl=" + encodeURIComponent(window.document.location.href);
    window.open(frameSrc, "_self");
}
function userreg() {
    var frameSrc = "http://sso.cnsoc.org/Reg/UserReg.html";
    window.open(frameSrc, "_self");
}

function userlogout() {
    var frameSrc = GetUrlRootPath() + "/Account/Logout.html?surl=" + encodeURIComponent(window.document.location.href);
    window.open(frameSrc, "_self");
}