var Search = document.getElementById('search');
Search.addEventListener('click', () => {
  var city = document.getElementById('city').value;
  document.getElementById('city').value = '';
  display(city);
});

function display(input) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&APPID=99ed927c771aef6ae2a667f51d8acbf9`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById('current-city').innerText = data.name;
      document.getElementById('current-temp').innerText = data.main.temp;
      document.getElementById('condition').innerText = data.weather[0].main;
    });
}
