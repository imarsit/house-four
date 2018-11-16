window.jQuery && !window.handleHeaderProduct && (window.handleHeaderProduct = function () {
    FOM(".log-dd-trigger").hover(function () {
        FOM(".u-box").show(), FOM(".log-dropdown").show()
    }, function () {
        FOM(".u-box").hide(), FOM(".log-dropdown").hide()
    });
}());