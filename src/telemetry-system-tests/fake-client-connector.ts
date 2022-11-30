import ClientConnector from "../telemetry-system/client-connector";
import { DIAGNOSTIC_MESSAGE } from "./constants";

export default class FakeClientConnector implements ClientConnector {
    private status: boolean;
    
    constructor() {
        this.status=true;
    }

    diagnosticMessage(): string {
        return DIAGNOSTIC_MESSAGE;
    }
    getOnlineStatus(): boolean {
        return this.status;
    }

    connect(connectionString: string): void {
        console.log(connectionString);
    }

    disconnect(): void {  
    }
    
    disableConnection(): void { 
        this.status = false; 
    }

    send(message: string): void {
        console.log(message);
    }
    
    receive(): string {
        return DIAGNOSTIC_MESSAGE;
    }

}
