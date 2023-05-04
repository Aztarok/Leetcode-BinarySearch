let search = function (nums, target) {
	let start = 0;
	let end = nums.length;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (nums[mid] === target) {
			return mid;
		}
		if (target < nums[mid]) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return -1;
};

let nums = [1, 2, 5, 7];
let target = 2;

console.log(search(nums, target));
