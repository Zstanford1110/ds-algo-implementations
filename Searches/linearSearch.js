// Quick and simple implementation of Linear Search in JavaScript for educational purposes


// Time Complexity: O(n)
// Space Complexity: O(1)

function linearSearch(arr, val) {
    // Empty Array case, value not found
    if (arr.length < 1) return -1;

    // Non-empty array case, search for value
    for (let i = 0; i < arr.length; i++) {
        // Compare current element to value
        // If found at any point, return the index.
        if (arr[i] === val) return i;
    }
    // If we have not returned yet, we did not find the value
    return -1;
}