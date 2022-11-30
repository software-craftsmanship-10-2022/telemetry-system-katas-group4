import { expect } from 'chai';
import 'mocha';
import TelemetryDiagnosticControls from '../telemetry-system/telemetry-diagnostic-controls';
import { DIAGNOSTIC_MESSAGE } from './constants';
import FakeClientConnector from './fake-client-connector';

describe('Telemetry System', () => {

	
	describe('TelemetryDiagnosticControls', () => {
		let telemetryDiagnostic: TelemetryDiagnosticControls;

		beforeEach(() => {
			telemetryDiagnostic = new TelemetryDiagnosticControls(new FakeClientConnector());
		});

		it('CheckTransmission should send a diagnostic message and receive a status message response', () => {
			telemetryDiagnostic.checkTransmission();
			expect(telemetryDiagnostic.readDiagnosticInfo()).equals(DIAGNOSTIC_MESSAGE);
		});

		it('WriteDiagnosticInfo should store a diagnostic message in TelemetryDiagnosticControls', () => {
			telemetryDiagnostic.writeDiagnosticInfo(DIAGNOSTIC_MESSAGE)
			expect(telemetryDiagnostic.readDiagnosticInfo()).equals(DIAGNOSTIC_MESSAGE);
		});

	});

});
