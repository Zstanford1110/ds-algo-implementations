// Implementation of Radix Sort (for base 10 numbers) in JavaScript for educational purposes

// Complexity
// Time: O(nk) => n is the number of integers to sort, k is the length of the largest integer based on digits
// Space: O(n + k) => Radix Sort uses auxiliary arrays of sizes n and k, where n is the number of elements in the input array and k is the largest element(most digits) of the input array


// Radix Sort
function radixSort(nums) {
    // Determine the number of passes based on the number of digits in largest number
    const maxDigits = getMostDigits(nums);

    for(let i = 0; i <= maxDigits; i++) {
        // Create our digit buckets for this pass on the number list
        let buckets = Array.from({ length: 10 }, () => []);
        // Loop over every number in the list, focus on the ith digit, load into correct bucket based on digit value
        for(let j = 0; j < nums.length; j++) {
            buckets[getDigit(nums[j], i)].push(nums[j]);
        }

        // Reorder our original number array using the digit buckets (start with index 0 in digit bucket 0 up until the last index of 9th digit bucket)
        // Assign a new array to nums that consists of all of the subarrays of buckets concatenated together
        nums = [].concat(...buckets);
    }

    // Return the array in sorted order
    return nums;

}


// Radix Helper Function, takes in a number and returns the nth digit from the right as a number
function getDigit(num, place) {
    return Math.floor((Math.abs(num) / Math.pow(10, place - 1)) % 10);
}

// Radix Helper Function, determine the number of digits in a number to determine how many passes to make on our list of numbers
function getDigitCount(num) {
    return Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1;
}

// Radix Helper Function, determines the number of digits in the largest number in the given number list, this tells Radix sort how many times to rearrange the numbers
function getMostDigits(arr) {
    let maxDigits = 0;
    arr.forEach((num) => {
        maxDigits = Math.max(maxDigits, getDigitCount(num));
    })

    return maxDigits;
}