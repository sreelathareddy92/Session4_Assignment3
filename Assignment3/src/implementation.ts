/**
 * The SchoolNameSpace is base namespace which is showing school behaviour 
 * @function govtSchoolDetail
 * @function privateSchoolDetail
 * @param {Object} mySchool
 * @param {Object} otherSchool
**/

// importing all namesppaces from interface.ts and function.ts files

import { SchoolNameSpace } from './interface'
import { govtSchoolDetail } from './function'
import { privateSchoolDetail } from './function'

let mySchool: SchoolNameSpace.School = { name: "St.Ann's", type: "Govt", year: 1990 }
let otherSchool: SchoolNameSpace.School = { name: "Narayana", type: "Techno", year: 2009 }
govtSchoolDetail(mySchool);
privateSchoolDetail(otherSchool);