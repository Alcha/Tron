const { Client } = require('discord.js')  // Used for JSDoc/intellisense purposes

const config = require('./config.json')
const moment = require('moment-timezone')
const Chance = require('chance')
const chance = new Chance()

const defaultFormat = 'MM.DD.Y @ HH:mm:ss'

module.exports = class Tools {
  getFormattedTime (format) {
    return moment.tz(config.defaultTimezone).format(format)
  }

  get formattedTime () {
    return moment.tz(config.defaultTimezone).format(defaultFormat)
  }

  get utcTime () {
    return moment.tz('UTC').format()
  }

  get formattedUTCTime () {
    return moment.tz('UTC').format(defaultFormat)
  }

  get safeFormattedTime () {
    return moment.tz(config.defaultTimezone).format('MM.DD.Y_HH:mm:ss')
  }

  upperFirstC (string) {
    let temp = string.toLowerCase()
    return temp.charAt(0).toUpperCase() + temp.slice(1)
  }

  /**
   * Returns a random integer between the min (inclusive) and max (exclusive).
   *
   * @param {*} min
   * @param {*} max
   */
  getRandom (min, max) {
    if (min < max) {
      return chance.integer({
        min: min,
        max: (max - 1)
      })
    } else {
      return 0
    }
  }

  /**
   *
   * @param {string} message
   * @param {Client} client
   */
  sendOwnerMessage (message, client) {
    client.users.get('219270060936527873').send(message)
  }
}
