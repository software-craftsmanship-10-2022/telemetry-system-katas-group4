import ClientConnector from "./client-connector";

export default class TelemetryDiagnosticControls {
	private diagnosticChannelConnectionString: string;

	private clientConnector: ClientConnector;
	private diagnosticInfo: string;

	constructor(clientConnector: ClientConnector) {
		this.diagnosticChannelConnectionString = '*111#';
		this.clientConnector = clientConnector;
		this.diagnosticInfo = '';
	}

	public readDiagnosticInfo() {
		return this.diagnosticInfo;
	}

	public writeDiagnosticInfo(newValue: string) {
		this.diagnosticInfo = newValue;
	}

	public checkTransmission() {
		this.diagnosticInfo = '';

		this.clientConnector.disconnect();

		let retryLeft = 3;
		while (this.clientConnector.getOnlineStatus() === false && retryLeft > 0) {
			this.clientConnector.connect(this.diagnosticChannelConnectionString);
			retryLeft -= 1;
		}

		if (this.clientConnector.getOnlineStatus() === false) {
			throw new Error('Unable to connect');
		}

		this.clientConnector.send(this.clientConnector.diagnosticMessage());
		this.diagnosticInfo = this.clientConnector.receive();
	}
}
