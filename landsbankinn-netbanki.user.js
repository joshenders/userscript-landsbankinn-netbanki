// ==UserScript==
// @name         Landsbankinn Netbanki Safari Autofill Fixer
// @description  Removes the hide/show elements from Netbanki login fields to allow Safari autofill
// @namespace    https://joshenders.com
// @version      v1.0.1
// @author       Josh Enders <josh.enders@gmail.com>
// @updateURL    https://raw.githubusercontent.com/joshenders/userscript-landsbankinn-netbanki/master/landsbankinn-netbanki.user.js
// @downloadURL  https://raw.githubusercontent.com/joshenders/userscript-landsbankinn-netbanki/master/landsbankinn-netbanki.user.js
// @grant        none
// @match        *://netbanki.landsbankinn.is/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    document.getElementsByClassName('eye eye-open js-toggle-username-hide')[0].remove();
    document.getElementsByClassName('eye eye-closed js-toggle-password-show')[0].remove();
})();
