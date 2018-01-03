"use strict";
/**
 * The SchoolNameSpace is base namespace which is showing school behaviour
 * @function govtSchoolDetail
 * @function privateSchoolDetail
 * @param {Object} mySchool
 * @param {Object} otherSchool
**/
exports.__esModule = true;
var function_1 = require("./function");
var function_2 = require("./function");
var mySchool = { name: "St.Ann's", type: "Govt", year: 1990 };
var otherSchool = { name: "Narayana", type: "Techno", year: 2009 };
function_1.govtSchoolDetail(mySchool);
function_2.privateSchoolDetail(otherSchool);
