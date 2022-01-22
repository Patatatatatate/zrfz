function modifCSSRule(sChemin, sPropriete, sVal) {
    var bFind = false;
    var aStyleSheets = document.styleSheets;
    var exp_reg = new RegExp(sChemin, "gi");
    // si la css est externe et d'un autre nom de domaine
    // cssRules: lève une DOMException: "The operation is insecure."
    // code: 18 
    // message: "The operation is insecure."
    // name: "SecurityError"
    //
    for (var i = 0; i < aStyleSheets.length; ++i) {
        try {
            var aCssRules = aStyleSheets[i].cssRules;
            for (var j = 0; j < aCssRules.length; ++j) {
                if (exp_reg.test(aCssRules[j].selectorText)) {
                    aCssRules[j].style[sPropriete] = sVal;
                    bFind = true;
                } //if
            } //for
        } catch (error) {
            //cssRules: lève une DOMException: "The operation is insecure."
            console.log(error);
            continue
        }
    }
    return bFind;
}