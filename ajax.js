/* JS */

function returnShowIpButtonText(code) {
    switch (code) {
        case "en":
            return "Show Full IP Address";
            break;
        case "ko":
            return "전체 IP 주소 보기";
            break;
        case "es":
            return "Mostrar dirección IP completa";
            break;
        default:
            return "Click to reveal";
            break;
    }
}

function returnHideIpButtonText(code) {
    switch (code) {
        case "en":
            return "Hide IP Address";
            break;
        case "ko":
            return "IP 주소 숨기기";
            break;
        case "es":
            return "Ocultar dirección IP";
            break;
        default:
            return "Click to hide";
            break;
    }
}

var curtext = "hide"
function IPclick() {
    if (curtext =="hide") {
        $("#ip").text(fullip);
        curtext = "show";
        var lang = document.getElementById("select_lang").value;
        $("#ip_show").text(returnHideIpButtonText(lang))
    }
    else if (curtext == "show") {
        $("#ip").text(hiddenip);
        curtext = "hide";
        var lang = document.getElementById("select_lang").value;
        $("#ip_show").text(returnShowIpButtonText(lang))
    }
    
}


var fullip;
var hiddenip;
function loadCountry() {
    $.ajax({
        "url": "https://api.ip.pe.kr/json/",
        "method": "GET"
    }).done(function (data) {
        demoip = data.ip;
        var l = '*';
        for (var i = 10; i <= demoip.length; i++) {
            var l = l + '*';
        }
        var a = document.getElementById('ip');
        var b = demoip.charAt(0);
        var c = demoip.charAt(2);
        var d = demoip.charAt(4);
        var e = demoip.charAt(6);
        var f = demoip.charAt(7);
        var g = b + '*' + c + '*' + d + '*' + e + f + l;
        a.textContent = g;
        hiddenip = g;

        $("#code").text(data.country_code);
        var lang = document.getElementById("select_lang").value;
        $("#country").text(data.country_name[lang])
        $("#ip_show").text(returnShowIpButtonText(lang))
        fullip = data.ip;
    })
}

loadCountry();