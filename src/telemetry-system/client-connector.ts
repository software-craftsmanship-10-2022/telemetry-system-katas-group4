export default interface ClientConnector {
	diagnosticMessage() : string;
	getOnlineStatus() : boolean;
	connect(telemetryServerConnectionString: string) : void;
	disconnect() : void;
	send(message: string) : void;
	receive() : string;
}
  