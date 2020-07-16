import _ from "lodash";
module.exports = true;
import test from "./test.js";

function component() {
    const element = document.createElement("div");

    // Lodash, now imported by this script
    element.innerHTML = _.join(["Hello", "webpack", "eee"], " ");

    return element;
}

document.body.appendChild(component());
