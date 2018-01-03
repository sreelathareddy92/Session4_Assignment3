/**
 * The SchoolNameSpace is base namespace which is showing school properties 
 * @interface School
 * @param {string} name [description]
 * @param {string} type  [description]
 * @param {number} year  [description]
 **/

export namespace SchoolNameSpace {
    export interface School {
    name: string;
    type: string;
    year: number;
    }
    }