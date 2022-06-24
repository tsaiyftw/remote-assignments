function twoSum(nums, target) {
    let dic = {};
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        let compensation = target - n;
        if (compensation in dic) {
            return [dic[compensation], i];
        }
        else {
            dic[n] = i;
        }
    }
}
console.log(twoSum([2, 7, 11, 15], 9))

/*
For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0]+nums[1] is 9
*/