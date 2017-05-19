// https://www.rithmschool.com/courses/react-fundamentals/webpack

// import {{this function}} from "thisFile"
import {sayHi} from './helpers/functions.js';

import AnyName from './helpers/default';

import App from './person.jsx'

// AnyName is the same Person class, but we can name it anything
// we like since it is a default export.
const p = new AnyName("Merv", "Test");

console.log(p.fullName());

// sayHi can now be invoked.
sayHi();

