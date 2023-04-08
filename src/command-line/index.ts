import { CommandRunner, CommandRunners } from "@xieyuheng/command-line"
import * as Commands from "./commands"

export function createCommandRunner(): CommandRunner {
  return new CommandRunners.CommonCommandRunner({
    defaultCommand: new Commands.DefaultCommand(),
    commands: [
      new Commands.CommonHelpCommand(),
      new Commands.ServeCommand(),
      new Commands.ConnectCommand(),
      new Commands.LoginCommand(),
      new Commands.LogoutCommand(),
      new Commands.WhoamiCommand(),
    ],
  })
}
