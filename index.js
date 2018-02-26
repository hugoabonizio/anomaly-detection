const Series = require('./src/series')

module.exports = class AnomalyDetection {
  constructor(series) {
    if (!(series instanceof Series)) {
      series = new Series(series)
    }
    this.series = series
    this.mean = this.series.mean()
    this.std_dev = this.series.std_dev()
  }

  check(point, confidence) {
    confidence = confidence || 3
    return Math.abs(this.zscore(point)) < (confidence * this.std_dev)
  }

  zscore(point) {
    return (point - this.mean) / this.std_dev
  }
}