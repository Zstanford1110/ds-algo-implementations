// Implementation of Selection Sort in JavaScript for education purposes

// Complexity
// Time: O(n^2)
// Space: O(1)

function selectionSort(arr) {

    // Outer loop allows us to maintain which elements are in sorted position
    for (let i = 0; i < arr.length; i++) {
        // At the beginning of every pass, set minimum equal to the index of the next unsorted value
        let minimum = i;
        // Perform a pass to find the smallest value (and position) in the remaining unsorted values. Record for later.
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minimum] > arr[j]) {
                minimum = j;
            }
        }
        // Compare minimum index, if it is not what we started with then swap i and the element at the minimum index
        if (minimum !== i) {
            swap(arr, i, minimum);
        }
    }
    // Sorted array
    return arr;
}





// Swap helper function to modify the array in-place
function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}