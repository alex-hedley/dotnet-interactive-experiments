let domparser = new DOMParser();
interactive.init(window);
interactive.createDotnetInteractiveClient("http://localhost:9000/")
.then(client => {
    window.document.getElementById("submit_code").onclick = () => {
        let code = window.document.getElementById("code_src").value;
        client.submitCode(code);
    };

    client.subscribeToKernelEvents(eventEnvelope => {
        console.log(eventEnvelope);
        let div = document.createElement("div");
        div.innerText = JSON.stringify(eventEnvelope);
        document.getElementById("events").appendChild(div);
        
        var formatted = formatEvent(eventEnvelope);
        div = document.createElement("div");
        div.innerText = JSON.stringify(formatted);
        document.getElementById("formattedEvents").appendChild(div);

        switch (eventEnvelope.eventType) {
            case "ReturnValueProduced":
            case "DisplayedValueProduced":
            case "DisplayedValueUpdated":
            case "StandardOutputValueProduced":
                let formattedValues = eventEnvelope.event.formattedValues;
                // console.log(formattedValues);

                let html = formattedValues.find(fv => fv.mimeType === "text/html");
                // console.log(html);
                if (html) {
                    let div = document.createElement("div");
                    document.getElementById("output_render_target").appendChild(div);
                    let fragment = domparser.parseFromString(html.value, "text/html");

                    for (let element of fragment.getElementsByTagName("BODY")[0].childNodes) {
                        div.appendChild(element);
                        if (element.tagName === "SCRIPT") {
                            eval(element.innerText);
                        };
                    }
                    return;
                }

                let text = formattedValues.find(fv => fv.mimeType === "text/plain");
                console.log(text);
                if (text) {
                    let div = document.createElement("div");
                    div.innerText = text.value;
                    document.getElementById("output_render_target").appendChild(div);
                    return;
                }

                break;
        }
    });
});

/**
 * Format Event
 * @param {*} event 
 */
function formatEvent(json) {
    var info = ''
    switch (json.eventType) {
        // case 'ReturnValueProduced':
        case "DisplayedValueProduced":
        case "DisplayedValueUpdated":
            info = `${json.command.commandType} | (${json.command.command.targetKernelName}) ${json.command.command.code}`;
            break;
        case "StandardOutputValueProduced":
            info = `${json.command.commandType} | ${json.event.formattedValues[0].value}`;
            break;
        // case "CodeSubmissionReceived":
        // case "CommandFailed":
        // case "CommandSucceeded":
        // case "CommandCancelled":
        // case "CompleteCodeSubmissionReceived":
        // case "CompletionsProduced":
        // case "DiagnosticLogEntryProduced":
        // case "DiagnosticsProduced":
        // case "DisplayedValueProduced":
        // case "DisplayedValueUpdated":
        // case "ErrorProduced":
        // case "IncompleteCodeSubmissionReceived":
        // case "HoverTextProduced":
        // case "InputProduced":
        // case "KernelInfoProduced":
        // case "KernelReady":
        // case "PackageAdded":
        // case "ReturnValueProduced":
        // case "SignatureHelpProduced":
        // case "StandardErrorValueProduced":
        // case "StandardOutputValueProduced":
        // case "WorkingDirectoryChanged":
        // case "KernelExtensionLoaded":
        // case "ValueInfosProduced":
        // case "ValueProduced":
        //     break;
        default:
            info = "Unhandled event";
            break;
    }

    // // console.log(json);
    // // console.log(json.event);
    // console.log(json.event.code);
    // console.log(json.eventType);
    // // console.log(json.command);
    // console.log(json.command.commandType);
    // console.log(json.command.command.code);
    // // console.log(json.routingSlip);

    return `${json.eventType}: ${info}`;
}