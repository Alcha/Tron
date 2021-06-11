import { CommandOptions, Message } from 'eris'

export abstract class BaseCommand {
  label: string
  opts?: CommandOptions

  constructor(label: string, opts?: CommandOptions) {
    this.label = label
    this.opts = opts
  }

  abstract execute(msg: Message, args: string[]): void
}
