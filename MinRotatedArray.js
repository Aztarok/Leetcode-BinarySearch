var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            left = mid + 1;         
        }
    }

    return nums[left];
};

let nums = [3, 4, 5, 1, 2];

console.log(findMin(nums));
