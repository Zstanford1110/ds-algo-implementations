// Implementation of Binary Search in JavaScript for educational purposes

// Time Complexity: O(log n)
// Space Complexity: O(1)

function binarySearch(arr, val) {
    // Initialize left and right bounds of the search (start at full size of array)
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        // Find the middle index position between our two bounds
        let mid = Math.floor((left + right) / 2);

        // Compare the middle element to our value:
        // If found, return the middle as our index
        if (arr[mid] === val) {
            return mid;
            // If the element is greater than the value, shift bound to the left of middle
        } else if (arr[mid] > val) {
            right = mid - 1;
            // If the element is less than the value, shift bound to the right of middle
        } else if (arr[mid] < val) {
            left = mid + 1;
        }
    }

    // If no return has occurred yet, we did not find the value
    return -1;
}

// 1, 2, 4, 7, 10, 20, 22, 25     => Find 10