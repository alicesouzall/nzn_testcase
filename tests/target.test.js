import Target from "../src/Target"

const target = new Target()

describe('Target Tests', () => {
    it('Should return index after sorting array in ascending order', () => {
        const nums = [-3, 1, 0, 9, 5, 12]
        expect(target.findTargetInArray(nums, 9)).toEqual(4)
    })

    it('Should return -1 if number do not exists', () => {
        const nums = [4, 7, 0, 1, 3]
        expect(target.findTargetInArray(nums, 9)).toEqual(-1)
    })

    it('Should return -1 if array is empty', () => {
        const nums = []
        expect(target.findTargetInArray(nums, 3)).toEqual(-1)
    })
})
