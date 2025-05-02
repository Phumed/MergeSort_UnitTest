"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function merge(collection_1, collection_2, collection_3) {
    // Reverse collection_2 to make it ascending
    const collection_2_reversed = [];
    for (let i = collection_2.length - 1; i >= 0; i--) {
        collection_2_reversed.push(collection_2[i]);
    }
    // Merge all three sorted arrays into one sorted array
    return mergeSortedArrays(collection_1, collection_2_reversed, collection_3);
}
function mergeSortedArrays(a, b, c) {
    const result = [];
    let i = 0, j = 0, k = 0;
    while (i < a.length || j < b.length || k < c.length) {
        const valA = i < a.length ? a[i] : Infinity;
        const valB = j < b.length ? b[j] : Infinity;
        const valC = k < c.length ? c[k] : Infinity;
        const min = Math.min(valA, valB, valC);
        if (min === valA) {
            result.push(valA);
            i++;
        }
        else if (min === valB) {
            result.push(valB);
            j++;
        }
        else {
            result.push(valC);
            k++;
        }
    }
    return result;
}
