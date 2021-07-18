import environment from '../environment';
const baseUrl = environment.baseUrl;

export const fetchSensorMetrics = async (clientId) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(`${baseUrl}/api/sensor/${clientId}/metrics`, {
      headers,
    });
    const metrics = await response.json();
    return metrics;
  } catch (e) {
    console.log(`Error: ${e}`);
    return e;
  }
};
