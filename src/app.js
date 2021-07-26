import { fetchSensorMetrics } from './services/api';

const btnLogin = document.querySelector('.login__btn');
const inputLoginClientID = document.querySelector('.login__input--deviceid');

btnLogin.addEventListener('click', async function (e) {
  //prevent form submitting
  e.preventDefault();

  console.log('Here we are');

  const loginClientId = inputLoginClientID.value;

  if (loginClientId !== '') {
    const metrics = await fetchSensorMetrics(loginClientId);
    console.log(`Sensor metrics: ${JSON.stringify(metrics)}`);
  } else {
    alert('Please enter a value in the Device ID field ');
  }
});
