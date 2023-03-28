# Get started with your own .NET Interactive app

## Pre-Reqs

Install **dotnet-interactive**

`dotnet tool install --global Microsoft.dotnet-interactive --version 1.0.416502`

---

## Setup

Install depedencies by running:

```bash
npm i
```

Start .NET Interactive as http server on port 9000 by running:

> Swapped `http` to `stdio` (See [Command StdIO()](https://github.com/dotnet/interactive/blob/30f5e3e1a21b952315f47a41c043aa875c24e4aa/src/dotnet-interactive/CommandLine/CommandLineParser.cs#L247))  
> ~~dotnet interactive http --http-port 9000~~

```bash
dotnet interactive stdio --http-port 9000
```

Start the app by running:

```bash
npm run start
```

When you submit the code in the UI the _dotnet-interactive_ terminal should then show some [events](../docs/events/README.md).

![Code Input](/docs/images/code-input.png "Code Input")

![Code Output](/docs/images/code-output.png "Code Output")

Example:

`Console.WriteLine("a");`
> Console.WriteLine("a");

## Updates

Added `StandardOutputValueProduced` to the switch statement.
