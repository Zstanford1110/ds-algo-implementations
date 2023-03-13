// Implementation of Merge Sort in JavaScript for education purposes

// Complexity
// Time: O(n log n)
// Space: O(n) => creating n smaller array halves 



function mergeSort(arr) {

    // Base case
    if (arr.length <= 1) {
        return arr;
    }

    // Recursive Case (Input is changed by halving the array and mergeSorting them both separately to later be merged back together)
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));     // Left half will split down to base case arrays, sort and merge all the way back up before the right half is constructed in our initial call
    let right = mergeSort(arr.slice(mid));

    // Merge base case arrays, return them back up, resulting arrays will then merge until we achieve a final return array in the original call of mergeSort
    return merge(left, right);
}




// Helper function that takes two sorted arrays of elements and returns a single sorted array of their combined elements
function merge(arr1, arr2) {
    let merged = [];

    // Start at the beginning of each array with separate pointers
    let i = j = 0;
    while (i < arr1.length || j < arr2.length) {  // Loop until we have exhausted all values in both arrays
        if (!(i < arr1.length)) {                 // If we have compared all values in one array, push the rest of the values from the remaining array
            merged.push(arr2[j]);
            j++;
        } else if (!(j < arr2.length)) {
            merged.push(arr1[i]);
            i++;
        } else {                                    // If both arrays have values to compare, perform the following:
            if (arr1[i] <= arr2[j]) {               // Compare the values, push the smaller value into the sorted array, move to the next value in the array the small value came from, repeat until one or both arrays are exhausted
                merged.push(arr1[i]);
                i++;
            } else {
                merged.push(arr2[j]);
                j++;
            }
        }
    }
    return merged;
}