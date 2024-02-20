class Target {
    findTargetInArray(nums, target) {
        nums.sort((a, b) => a - b)
        return nums.indexOf(target)
    }
}

export default Target
