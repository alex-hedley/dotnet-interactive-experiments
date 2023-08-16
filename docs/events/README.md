# Events

Existing Event Types in experiment

- [client.subscribeToKernelEvents](https://github.com/alex-hedley/dotnet-interactive-experiments/blob/f8272854799378c2ed0572430974c034f9522e9d/dotnet-interactive-html/site/index.html#L30)

- ReturnValueProduced
- DisplayedValueProduced
- DisplayedValueUpdated

---

- [dotnet interactive](https://github.com/dotnet/interactive)

  - [KernelEventEnvelope.cs](https://github.com/dotnet/interactive/blob/main/src/Microsoft.DotNet.Interactive/Connection/KernelEventEnvelope.cs)

- **CodeSubmissionReceived**
- CommandFailed
- **CommandSucceeded**
- CommandCancelled
- **CompleteCodeSubmissionReceived**
- CompletionsProduced
- DiagnosticLogEntryProduced
- DiagnosticsProduced
- **DisplayedValueProduced**
- DisplayedValueUpdated
- ErrorProduced
- IncompleteCodeSubmissionReceived
- HoverTextProduced
- InputProduced
- KernelInfoProduced
- KernelReady
- PackageAdded
- ReturnValueProduced
- SignatureHelpProduced
- StandardErrorValueProduced
- StandardOutputValueProduced
- WorkingDirectoryChanged
- KernelExtensionLoaded
- ValueInfosProduced
- ValueProduced

## Events from test

- [DisplayedValueProduced](event-a.json)
- [CodeSubmissionReceived](event-b.json)
- [CompleteCodeSubmissionReceived](event-c.json)
- [CodeSubmissionReceived](event-d.json)
- [CompleteCodeSubmissionReceived](event-e.json)
- [CodeSubmissionReceived](event-f.json)
- [CompleteCodeSubmissionReceived](event-g.json)
- [StandardOutputValueProduced](event-h.json)
- [CommandSucceeded](event-i.json)
