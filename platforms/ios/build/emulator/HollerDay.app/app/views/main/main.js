var page;

var HolidayViewModel = require("../../shared/view-models/holiday-view-model");
var holiday = new HolidayViewModel();

exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = holiday;

    //var view = page.getViewById("main");

    holiday.set("isLoading", true);
    holiday.load().then(function() {
        holiday.set("isLoading", false);
        console.log("in main.js");
        /*view.animate({
            opacity: 1,
            duration: 1000
        });*/
    });
}