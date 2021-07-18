import { fetchSensorMetrics } from './services/api';

console.log('Hello Arranmore Island!!!');

getSensorMetrics();

async function getSensorMetrics() {
  const clientId = '123';
  const metrics = await fetchSensorMetrics(clientId);
  console.log(`Sensor metrics: ${JSON.stringify(metrics)}`);
}
