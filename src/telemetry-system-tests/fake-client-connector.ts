import ClientConnector from "../telemetry-system/client-connector";
import { DIAGNOSTIC_MESSAGE } from "./constants";

export default class FakeClientConnector implements ClientConnector {
    diagnosticMessage(): string {
        return DIAGNOSTIC_MESSAGE;
    }
    getOnlineStatus(): boolean {
        return true;
    }
    connect(connectionString: string): void {
        console.log(connectionString);
    }

    disconnect(): void {  
    }
    
    send(message: string): void {
        console.log(message);
    }
    
    receive(): string {
        return DIAGNOSTIC_MESSAGE;
    }

}
