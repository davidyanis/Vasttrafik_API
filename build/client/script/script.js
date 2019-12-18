"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("Script");
function switchInputText() {
    let inputFrom = document.getElementById("inputFrom").value;
    let inputTo = document.getElementById("inputTo").value;
    if (inputFrom == "" || inputTo == "") {
        alert("fyll in alla fält");
    }
    else {
        document.getElementById("inputFrom").value = inputTo;
        document.getElementById("inputTo").value = inputFrom;
    }
}
window.onload = function () {
    document.getElementById('switchInputText').addEventListener('click', switchInputText, true);
    getDate();
};
// Test
document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener("submit", function (event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            const response = yield fetch('/api/getTrips', {
                method: 'POST',
                body: JSON.stringify({}),
                headers: {
                    'Content-Type': 'application/json'
                } // body data type must match "Content-Type" header
            });
            const json = yield response.json();
        });
    });
});
function getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    var hour = today.getHours();
    var minute = today.getMinutes();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minute < 10) {
        minute = '0' + minute;
    }
    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);
    document.getElementById("dateForTrip").value = today;
    var time = hour + ":" + minute;
    console.log(time);
    document.getElementById("timeForTrip").value = time;
}
