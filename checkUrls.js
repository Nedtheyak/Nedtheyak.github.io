var newUrl = "";
var loadPage = true;

function redirectUsing(given) {
    switch (given) {
        case "s":
            newUrl = "http://kydn.me/slight";
            break;
        case "pm":
            newUrl = "http://prsa.me";
            break;
        case "m":
            newUrl = "http://magmablock.x10host.com";
            break;
        case "h":
        case "home":
            newUrl = "http://kydn.me"
            break;
        default:
            newUrl = "";
            break;
    }

    return newUrl;
}
