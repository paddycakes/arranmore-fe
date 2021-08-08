import { fetchSensorMetrics } from './services/api';

const btnLogin = document.querySelector('.login__btn');
const deviceIdInput = document.querySelector('.login__input--deviceid');

const account = {
  owner: 'SeamusBonner',
  pw: 'arranmoreIoT',
};

btnLogin.addEventListener('click', async function (e) {
  //prevent form submitting
  e.preventDefault();

  const deviceId = deviceIdInput.value;
  const apiKey = getApiKey();

  if (deviceId !== '') {
    console.log(deviceId);
    console.log(apiKey);

    const metrics = await fetchSensorMetrics(deviceId, apiKey);
    console.log(`Sensor metrics: ${JSON.stringify(metrics)}`);
  } else {
    document.querySelector('.login__input--deviceid').value = 'Incorrect ID';
  }
});

const getApiKey = () => {
  const userCreds = `${account.owner}:${account.pw}`;
  return btoa(userCreds);
};
