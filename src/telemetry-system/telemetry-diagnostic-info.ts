import ClientInfo from "./client-info";

export default class TelemetryDiagnosticInfo implements ClientInfo {
	private diagnosticChannelConnectionString: string;

	private diagnosticInfo: string;

	constructor(connectionString: string) {
		this.diagnosticChannelConnectionString = connectionString;
		this.diagnosticInfo = '';
	}

	public readDiagnosticInfo() {
		return this.diagnosticInfo;
	}

	public writeDiagnosticInfo(newValue: string) {
		this.diagnosticInfo = newValue;
	}

    public getConnection() :string {
		return this.diagnosticChannelConnectionString;
	}

}
