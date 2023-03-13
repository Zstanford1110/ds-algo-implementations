// Implementation of Quick Sort and its helper function in JavaScript for education purposes

// Complexity
// Time: O(n log n) (NOTE: With this implementation, the worst case is O(n^2). If a sorted array is provided as input we need to perform O(n) decompositions and O(n) comparisons)
// Space: O(log n) => Each recursive call a new stack frame of constant size is allocated (not counting input)


// Primary function to trigger Quick sort, expects a single arr as input with the left and right values representing the start and end of the array we are sorting
function quickSort(arr, left = 0, right = arr.length - 1) {
    // Important! We are modifying the input array in place, every recursive call will take the entire array, so we use left and right to specify smaller and smaller sub arrays

    // Base Case: If the left (start) and right (end) values are equal then we have an array with 1 element
    if(left < right) {
        let pivotIndex = pivot(arr, left, right); // Find our pivot index on the full array (or subarray) we are evaluating
        quickSort(arr, left, pivotIndex - 1);     // Call Quick sort on the left subarray (left side of Pivot every time)
        quickSort(arr, pivotIndex + 1, right);    // Call Quick sort on the right subarray (right side of Pivot every time)
        // No need to save the returns of the recursive calls, it's all one array modified in-place, we rely on the awaited return value to hold execution so we may sort the left subarray completely then the right subarray completely
    }

    // Return the in-place modified array each time until we return it fully sorted in the initial call 
    return arr;
   
}


function pivot(arr, start = 0, end = arr.length - 1) {
    // Set pivotIndex to be the start index every time we want to pivot
    let pivotIndex = start;
    // Save the pivot value to compare against other elements in the array to its right
    const pivotValue = arr[pivotIndex];

    // Start at the element next to the pivot, go until the end
    for(let i = start + 1; i <= end; i++) {
        // If pivot value is greater than the current element i, increase pivot index and swap the element at pivot index with that current element
        // We want to bunch all of the values less than pivot right next to it, then jump over them at the end
        if(pivotValue >= arr[i]) {
            pivotIndex++; 
            swap(arr, pivotIndex, i);
        }
    }

    // At the end, jump past the elements that are less than our pivot to the pivot index
    swap(arr, start, pivotIndex);
    
    // Return the index the selected pivot value belongs in the final version of the array
    return pivotIndex;

}

// Swap helper function to modify an array in-place
function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}