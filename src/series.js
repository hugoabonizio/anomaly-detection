'use strict'
var Utils = require('./utils')

/** Class representing a series of values. */
module.exports = class Series {
  /**
    * Creates a series object.
    * @param {array} series - Array with values.
    */
  constructor(series) {
    this.series = series
  }

  /**
    * Compute the mean value of the series.
    */
  mean() {
    return Utils.mean(this.series)
  }

  /**
    * Compute the standard deviation value of the series.
    */
  std_dev() {
    return Utils.std_dev(this.series)
  }
}