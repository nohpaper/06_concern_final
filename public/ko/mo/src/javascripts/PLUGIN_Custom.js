"use strict";
$(function () {
    var locationUrl = window.location.href;
    $(".donate_utm_link").each(function () {

        var $donationBtn = $(this).attr("href");
        var _defaultUtm = $donationBtn.match(/\?/);
        var _utmSource = URLParser(locationUrl).getParam('utm_source'),
            _utmMedium = URLParser(locationUrl).getParam('utm_medium'),
            _utmTerm = URLParser(locationUrl).getParam('utm_term'),
            _utmContent = URLParser(locationUrl).getParam('utm_content'),
            _utmCampaign = URLParser(locationUrl).getParam('utm_campaign'),
            _gaCode = URLParser(locationUrl).getParam('_gl');

        if (!_utmSource) _utmSource = "";
        if (!_utmMedium) _utmMedium = "";
        if (!_utmTerm) _utmTerm = "";
        if (!_utmContent) _utmContent = "";
        if (!_utmCampaign) _utmCampaign = "";
        if (!_gaCode) _gaCode = "";

        var utmArr = ["utm_source=" + _utmSource, "&utm_medium=" + _utmMedium, "&utm_term=" + _utmTerm, "&utm_content=" + _utmContent, "&utm_campaign=" + _utmCampaign, "&_gl=" + _gaCode ];
        var DONUS_utmURL = "";
        if (_defaultUtm) {
            if(!_gaCode){ //_gaCode 없을 경우 경우
                DONUS_utmURL = $donationBtn + "&" + utmArr[0] + utmArr[1] + utmArr[2] + utmArr[3] + utmArr[4];
            }else { //_gaCode 있을 경우
                DONUS_utmURL = $donationBtn + "&" + utmArr[0] + utmArr[1] + utmArr[2] + utmArr[3] + utmArr[4] + utmArr[5];
            }
        }else {
            DONUS_utmURL = $donationBtn + "?" + utmArr[0] + utmArr[1] + utmArr[2] + utmArr[3] + utmArr[4];
        }


        $(this).attr("href", DONUS_utmURL);
        if ($(this).attr("target")) {
            // $(this).attr("target", "_self");
            $(this).attr("target", "_blank");
        }
    })
});
function URLParser(u) { var path = "", query = "", hash = "", params; if (u.indexOf("#") > 0) { hash = u.substr(u.indexOf("#") + 1); u = u.substr(0, u.indexOf("#")); } if (u.indexOf("?") > 0) { path = u.substr(0, u.indexOf("?")); query = u.substr(u.indexOf("?") + 1); params = query.split('&'); } else path = u; return { getHost: function () { var hostexp = /\/\/([\w.-]*)/; var match = hostexp.exec(path); if (match != null && match.length > 1) return match[1]; return ""; }, getPath: function () { var pathexp = /\/\/[\w.-]*(?:\/([^?]*))/; var match = pathexp.exec(path); if (match != null && match.length > 1) return match[1]; return ""; }, getHash: function () { return hash; }, getParams: function () { return params }, getQuery: function () { return query; }, setHash: function (value) { if (query.length > 0) query = "?" + query; if (value.length > 0) query = query + "#" + value; return path + query; }, setParam: function (name, value) { if (!params) { params = new Array(); } params.push(name + '=' + value); for (var i = 0; i < params.length; i++) { if (query.length > 0) query += "&"; query += params[i]; } if (query.length > 0) query = "?" + query; if (hash.length > 0) query = query + "#" + hash; return path + query; }, getParam: function (name) { if (params) { for (var i = 0; i < params.length; i++) { var pair = params[i].split('='); if (decodeURIComponent(pair[0]) == name) return decodeURIComponent(pair[1]); } }/* console.log('Query variable %s not found', name);*/ }, hasParam: function (name) { if (params) { for (var i = 0; i < params.length; i++) { var pair = params[i].split('='); if (decodeURIComponent(pair[0]) == name) return true; } }/* console.log('Query variable %s not found', name);*/ }, removeParam: function (name) { query = ""; if (params) { var newparams = new Array(); for (var i = 0; i < params.length; i++) { var pair = params[i].split('='); if (decodeURIComponent(pair[0]) != name) newparams.push(params[i]); } params = newparams; for (var i = 0; i < params.length; i++) { if (query.length > 0) query += "&"; query += params[i]; } } if (query.length > 0) query = "?" + query; if (hash.length > 0) query = query + "#" + hash; return path + query; }, } };
