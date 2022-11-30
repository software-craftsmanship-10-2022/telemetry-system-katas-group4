import ClientConnector from "./client-connector";
import ClientInfo from "./client-info";

export default class TelemetryDiagnosticControls {
	private clientConnector: ClientConnector;
	private clientInfo: ClientInfo;

	constructor(clientConnector: ClientConnector, clientInfo: ClientInfo) {
		this.clientConnector = clientConnector;
		this.clientInfo = clientInfo;
	}

	public checkTransmission() {
		this.clientInfo.writeDiagnosticInfo('');

		this.clientConnector.disconnect();

		let retryLeft = 3;
		while (this.clientConnector.getOnlineStatus() === false && retryLeft > 0) {
			this.clientConnector.connect(this.clientInfo.getConnection());
			retryLeft -= 1;
		}

		if (this.clientConnector.getOnlineStatus() === false) {
			throw new Error('Unable to connect');
		}

		this.clientConnector.send(this.clientConnector.diagnosticMessage());
		this.clientInfo.writeDiagnosticInfo(this.clientConnector.receive());
	}
}
