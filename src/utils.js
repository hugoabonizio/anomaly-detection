'use strict'
module.exports = class Utils {
  static mean(series) {
    const sum = series.reduce((sum, value) => sum + value, 0)
    return sum / series.length
  }

  static std_dev(series) {
    const mean = this.mean(series)
    const sqr_sum = series
                      .map(i => Math.pow(i - mean, 2))
                      .reduce((sum, i) => sum + i, 0)
    return Math.sqrt(sqr_sum / series.length)
  }
}