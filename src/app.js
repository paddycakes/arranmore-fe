import { fetchSensorMetrics } from './services/api';

const btnLogin = document.querySelector('.login__btn');
const deviceIdInput = document.querySelector('.login__input--deviceid');
var metrics;

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
    metrics = await fetchSensorMetrics(deviceId, apiKey);
    console.log(`Sensor metrics: ${JSON.stringify(metrics)}`);
  } else {
    document.querySelector('.login__input--deviceid').value = 'Incorrect ID';
  }
  console.log(metrics[0]);
});

const getApiKey = () => {
  const userCreds = `${account.owner}:${account.pw}`;
  return btoa(userCreds);
};

// setTimeout(btnGet, 5000);

//Table Creator
let btnGet = document.querySelector('.tabulate__btn');
let myTable = document.querySelector('#table');

let headers = ['Timestamp', 'Temperature', 'Humidity'];
btnGet.addEventListener('click', () => {
  console.log('Click');
  let table = document.createElement('table');
  let headerRow = document.createElement('tr');

  headers.forEach((headerText) => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
  });

  table.appendChild(headerRow);

  // metrics.forEach((met) => {
    const firstResult = metrics[0];

    let row = document.createElement('tr');

    Object.values(firstResult).forEach((text) => {
      let cell = document.createElement('td');
      let textNode = document.createTextNode(text);
      cell.appendChild(textNode);
      row.appendChild(cell);
    });
    table.appendChild(row);
  // });

  myTable.appendChild(table);
});
