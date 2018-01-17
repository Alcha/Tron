const { Command } = require('discord.js-commando')
const ioTools = new (require('../../util/IOTools'))()

class Jay extends Command {
  constructor (client) {
    super(client, {
      name: 'jay',
      group: 'user',
      memberName: 'jay',
      throttling: { usages: 1, duration: 10 },
      description: 'Returns a jay-like image.',
      examples: ['+jay']
    })
  }

  async run (msg, args) {
    ioTools.getImage('Jay.png').then(img => {
      msg.channel.send('', { files: [img] })
    })
  }
}

module.exports = Jay
