import { assert, expect } from 'chai';
import 'mocha';
import TelemetryDiagnosticControls from '../telemetry-system/telemetry-diagnostic-controls';
import TelemetryDiagnosticInfo from '../telemetry-system/telemetry-diagnostic-info';
import { DIAGNOSTIC_MESSAGE } from './constants';
import FakeClientConnector from './fake-client-connector';

describe('Telemetry System', () => {

	
	describe('TelemetryDiagnosticControls', () => {
		let telemetryDiagnostic: TelemetryDiagnosticControls;
		let telemetryInfo: TelemetryDiagnosticInfo;
		let telemetryConnector: FakeClientConnector;
		beforeEach(() => {
			telemetryInfo = new TelemetryDiagnosticInfo('CNX');
			telemetryConnector = new FakeClientConnector();
			telemetryDiagnostic = new TelemetryDiagnosticControls(telemetryConnector, telemetryInfo);
		});

		it('CheckTransmission should send a diagnostic message and receive a status message response', () => {
			telemetryDiagnostic.checkTransmission();
			expect(telemetryInfo.readDiagnosticInfo()).equals(DIAGNOSTIC_MESSAGE);
		});

		it('WriteDiagnosticInfo should store a diagnostic message in TelemetryDiagnosticControls', () => {
			telemetryInfo.writeDiagnosticInfo(DIAGNOSTIC_MESSAGE)
			expect(telemetryInfo.readDiagnosticInfo()).equals(DIAGNOSTIC_MESSAGE);
		});

		it('CheckTransmission should return error message when connection fails', () => {
			telemetryConnector.disableConnection();
			assert.throws(function () { telemetryDiagnostic.checkTransmission() }, Error, "Unable to connect");
		});
	});

});
