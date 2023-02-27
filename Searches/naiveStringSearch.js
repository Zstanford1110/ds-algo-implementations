// A brute-force solution to counting the number of times a sub-string appears in a longer string for educational purposes

// Time Complexity: O(n^2)
// Space Complexity: O(1)


function naiveStringSearch(long, short) {
    if (short.length > long.length) return 0;

    let count = 0;
    // Loop over the longer (outter) string
    for (let i = 0; i < long.length; i++) {
        // Loop over the short (inner) string 
        for (let j = 0; j < short.length; j++) {
            // Add indices i and j (i was where we started our comparison, we can go up to short.length characters from that start) to look-ahead to compare chars in the short string to corresponding values in the long string. Break if any mismatches occur
            if (short[j] !== long[i + j]) break;
            // If we make it to the end of the for loop (length of short string), we made a match and will add it to count
            if (j === short.length - 1) count++;
        }
    }

    return count;
}