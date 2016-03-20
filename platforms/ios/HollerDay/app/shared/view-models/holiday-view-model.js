var config = require("../../shared/config");
var fetchModule = require("fetch");
var Observable = require("data/observable").Observable;

function HolidayViewModel() {
    var viewModel = new Observable({
        hday: "Nothing Day!"
    });

    viewModel.load = function() {
        console.log("loading");
        return fetch("http://huaiyu.me/hollerday", {
            method: "GET"
        })
        .then(handleErrors)
        .then(function(response) {
            console.log("response: " + JSON.stringify(response));
            viewModel.hday = "Happy " + response._bodyText + "!";
            console.log(response._bodyText);
        });
    };

    return viewModel;
};

function handleErrors(response) {
    if (!response.ok) {
        console.log(JSON.stringify(response));
        throw Error(response.statusText);
    }
    return response;
}

module.exports = HolidayViewModel;