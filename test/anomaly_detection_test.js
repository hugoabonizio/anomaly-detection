const expect = require('chai').expect
const AnomalyDetection = require('../')
const Series = require('../src/series')

describe('Anomaly detection', function () {
  describe('analysis a homogeneous series', function () {
    it('mark as false strange values', function () {
      const series = [1, 2, 3, 2, 3, 1]
      const detector = new AnomalyDetection(series)
      expect(detector.check(2)).to.be.true
      expect(detector.check(4)).to.be.false
      expect(detector.check(4, 4)).to.be.true
      expect(detector.check(5, 5)).to.be.true
      expect(detector.check(9, 12)).to.be.true
    })
  })

  describe('analysis a more heterogeneous series', function () {
    it('mark as false strange values', function () {
      const series = [1, 2, 3, 2, 5, 4, 5, 10, 8, 5, 3, 2, 5, 7, 4, 6, 3, 4]
      const detector = new AnomalyDetection(series)
      expect(detector.check(10)).to.be.true
      expect(detector.check(2)).to.be.true
      expect(detector.check(1)).to.be.true
      expect(detector.check(9)).to.be.true
      expect(detector.check(10)).to.be.true
      expect(detector.check(13, 1)).to.be.false
    })
  })
})