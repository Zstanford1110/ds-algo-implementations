// Implementation of Insertion Sort in JavaScript for education purposes

// Complexity
// Time: 
// Space: O(1)


function insertionSort(arr) {

    // Outter loop tracks the current unsorted value we are inserting into our sorted portion
    for (let i = 1; i < arr.length; i++) {
        let target = arr[i];

        // Inner loop compares the unsorted value to the sorted portion, starting from right to left
        for (let j = i - 1; j >= 0; j--) {
            if (target < arr[j]) {
                // If the element in the sorted portion is greater than our target element, move the greater element up one index and move the target down one index (swap)
                arr[j + 1] = arr[j];
                arr[j] = target;
            } else {
                // If at any point we encounter a value in the sorted portion that is less than our target we can stop, we have found the correct spot. Our setting of the target to arr[j] previously guarantees it has reached the right spot.
                break;
            }
        }
    }

    return arr;
}
