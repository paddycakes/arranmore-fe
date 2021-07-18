import { fetchSensorMetrics } from './services/api';

console.log('Hello Arranmore Island!!!');

const clientId = '123';
const metrics = fetchSensorMetrics(clientId);

console.log(`Sensor metrics: ${JSON.stringify(metrics)}`);
