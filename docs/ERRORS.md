# Errors

- [Project Setup Issue](https://github.com/colombod/dotnet-interactive-experiments/issues/3)

Hi,

Which version of **dotnet-interactive** do you need to install?

> See [What is .NET Interactive?](https://github.com/dotnet/interactive/blob/main/docs/FAQ.md#what-is-net-interactive) for install steps.
> `dotnet tool install --global Microsoft.dotnet-interactive --version 1.0.416502`

I then tried `dotnet interactive http --http-port 9000` and got the following message:

```bash
Required command was not provided.
Unrecognized command or argument 'http'.
Unrecognized command or argument '--http-port'.
Unrecognized command or argument '9000'.

Description:
  Interactive programming for .NET.

Usage:
  dotnet-interactive [command] [options]

Options:
  --log-path <log-path>  Enable file logging to the specified directory
  --verbose              Enable verbose logging to the console
  --version              Show version information
  -?, -h, --help         Show help and usage information

Commands:
  jupyter <connection-file>  Starts dotnet-interactive as a Jupyter kernel
  stdio                      Starts dotnet-interactive with kernel functionality exposed
                             over standard I/O
  notebook-parser            Starts a process to parse and serialize notebooks.
```
