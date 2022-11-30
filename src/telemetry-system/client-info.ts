export default interface ClientInfo {
	readDiagnosticInfo() : string;
	writeDiagnosticInfo(newValue: string) : void;
	getConnection() : string;
}
  