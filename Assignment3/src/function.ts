import { SchoolNameSpace } from './interface'

/**
 * [govtSchoolDetail description]
 * @param {string} name [description]
 * @param {string} type  [description]
 * @param {number} year  [description]
 */

export function govtSchoolDetail(school: SchoolNameSpace.School) {
console.log(` The school details are : name ${school.name} ,
Type ${school.type} and established in ${school.year}`);
};

/**
 * [privateSchoolDetail description]
 * @param {string} name [description]
 * @param {string} type  [description]
 * @param {number} year  [description]
 */

export function privateSchoolDetail(school: SchoolNameSpace.School) {
    console.log(` The school details are : name ${school.name} ,
    Type ${school.type} and established in ${school.year}`);
};