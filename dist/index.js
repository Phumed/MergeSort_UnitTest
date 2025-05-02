"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("./merge");
const result = (0, merge_1.merge)([1, 3], [5, 4], [2, 6]);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]
