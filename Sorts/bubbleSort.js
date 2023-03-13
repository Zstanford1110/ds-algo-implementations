// Implementation of Bubble Sort in JavaScript for education purposes

//  Complexity
//  Time: O(n^2)
//  Space: O(1)

function bubbleSort(arr) {


    // Outer loop keeps track of the values that are placed in sorted position
    for (let i = arr.length - 1; i > 0; i--) {
        // Added swapped boolean for optimization
        let swapped = false;
        // Inner loop performs comparisons between neighbors and swaps accordingly in a single pass
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                swapped = true; // Set swapped to true if a swap occurred at any point in this pass
            }
        }
        // If a swap did not occur in last pass, we can assume we have a sorted array and exit
        if (!swapped) break;
    }

    return arr;
}


// Swap helper function to modify the array in-place
function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}