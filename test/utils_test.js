const expect = require('chai').expect
const Utils = require('../src/utils')

describe('Utils', function () {
  describe('.mean', function () {
    it('computes mean values', function () {
      expect(Utils.mean([5])).to.be.equal(5)
      expect(Utils.mean([3, 1])).to.be.equal(2)
      expect(Utils.mean([0, 3])).to.be.equal(1.5)
      expect(Utils.mean([1, 3, 5, 2, -5])).to.be.equal(1.2)
      expect(Utils.mean([0, 0, 0, 0])).to.be.equal(0)
    })
  })

  describe('.std_dev', function () {
    it('computes standard deviation values', function () {
      expect(Utils.std_dev([5])).to.be.equal(0)
      expect(Utils.std_dev([2, 4, 6])).to.be.closeTo(1.632, 0.001)
      expect(Utils.std_dev([2, 4, 6])).to.be.closeTo(1.632, 0.001)
      expect(Utils.std_dev([1, 2, 3, 4])).to.be.closeTo(1.118033989, 0.001)
    })
  })
})