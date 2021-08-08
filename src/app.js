import { fetchSensorMetrics } from './services/api';

const btnLogin = document.querySelector('.login__btn');
const deviceIdInput = document.querySelector('.login__input--deviceid');

const account1 = {
  owner: 'SeamusBonner',
};

// const user = 'Seamus Bonner'; //sb
// const username = account1.owner
//   .toLowerCase()
//   .split(' ')
//   .map((name) => name[0])
//   .join('');

console.log(account1.owner);
const password = {
  id: 'arranmoreIoT',
};

//Base64 Handler
const userPass = `${account1.owner}:${password.id}`;
const apiKey = btoa(userPass);

btnLogin.addEventListener('click', async function (e) {
  //prevent form submitting
  e.preventDefault();

  const deviceId = deviceIdInput.value;
  console.log(deviceId);

  if (deviceId !== '') {
    console.log(apiKey);
    console.log(userPass);

    const metrics = await fetchSensorMetrics(deviceId, apiKey);
    console.log(`Sensor metrics: ${JSON.stringify(metrics)}`);
  } else {
    document.querySelector('.login__input--deviceid').value = 'Incorrect ID';
  }
});
console.log(apiKey);
console.log(userPass);
console.log(deviceId);
