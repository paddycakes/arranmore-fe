import environment from '../environment';
const baseUrl = environment.baseUrl;

export const fetchSensorMetrics = async (deviceId, apiKey) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(`${baseUrl}/api/sensor/${deviceId}/metrics`, {
      headers,
    });
    const metrics = await response.json();
    return metrics;
  } catch (e) {
    console.log(`Error: ${e}`);
    return e;
  }
};
