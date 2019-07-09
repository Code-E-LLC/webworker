postMessage("WORKER: I'm working before postMessage('ali').");

onmessage = function(oEvent) {
  postMessage("WORKER: Hi " + JSON.stringify(oEvent.data));
};
