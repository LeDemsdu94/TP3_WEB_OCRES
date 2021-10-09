
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);
      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    // Création de l'objet apiWeather
    const apiWeather2 = new API_WEATHER();
    apiWeather2
    .fetchForecastFor3days()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      // On récupère l'information principal
      const main = data.list[0].weather[0].main;
      const description = data.list[0].weather[0].description;
      const temp = data.list[0].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

      // Modifier le DOM
      document.getElementById('tomorrow-forecast-main').innerHTML = main;
      document.getElementById('tomorrow-forecast-more-info').innerHTML = description;
      document.getElementById('tomorrow-weather-container').innerHTML = icon;
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp}°C`;
      
    })

    // Création de l'objet apiWeather pour après demain
    const apiWeather3 = new API_WEATHER();
    apiWeather3
    .fetchForecastFor3days()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      // On récupère l'information principal
      const main = data.list[1].weather[0].main;
      const description = data.list[1].weather[0].description;
      const temp = data.list[1].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      // Modifier le DOM
      document.getElementById('2days-forecast-main').innerHTML = main;
      document.getElementById('2days-forecast-more-info').innerHTML = description;
      document.getElementById('2days-weather-container').innerHTML = icon;
      document.getElementById('2days-forecast-temp').innerHTML = `${temp}°C`;
      
    })

    // Création de l'objet apiWeather pour encore après demain
    const apiWeather4 = new API_WEATHER();
    apiWeather4
    .fetchForecastFor3days()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      // On récupère l'information principal
      const main = data.list[2].weather[0].main;
      const description = data.list[2].weather[0].description;
      const temp = data.list[2].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      // Modifier le DOM
      document.getElementById('3days-forecast-main').innerHTML = main;
      document.getElementById('3days-forecast-more-info').innerHTML = description;
      document.getElementById('3days-weather-container').innerHTML = icon;
      document.getElementById('3days-forecast-temp').innerHTML = `${temp}°C`;
      
    })


    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

// Fonction appelée lors du click du bouton
function actualise() {
  var city;
  city = document.getElementById("city-input").value;
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  const apiWeather2 = new API_WEATHER(city);
  const apiWeather3 = new API_WEATHER(city);
  const apiWeather4 = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })

// Création de l'objet apiWeather
    apiWeather2
    .fetchForecastFor3days()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      // On récupère l'information principal
      const main = data.list[0].weather[0].main;
      const description = data.list[0].weather[0].description;
      const temp = data.list[0].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

      // Modifier le DOM
      document.getElementById('tomorrow-forecast-main').innerHTML = main;
      document.getElementById('tomorrow-forecast-more-info').innerHTML = description;
      document.getElementById('tomorrow-weather-container').innerHTML = icon;
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp}°C`;
      
    })

    // Création de l'objet apiWeather pour après demain
    apiWeather3
    .fetchForecastFor3days()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      // On récupère l'information principal
      const main = data.list[1].weather[0].main;
      const description = data.list[1].weather[0].description;
      const temp = data.list[1].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      // Modifier le DOM
      document.getElementById('2days-forecast-main').innerHTML = main;
      document.getElementById('2days-forecast-more-info').innerHTML = description;
      document.getElementById('2days-weather-container').innerHTML = icon;
      document.getElementById('2days-forecast-temp').innerHTML = `${temp}°C`;
      
    })

    // Création de l'objet apiWeather pour encore après demain
    apiWeather4
    .fetchForecastFor3days()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      // On récupère l'information principal
      const main = data.list[2].weather[0].main;
      const description = data.list[2].weather[0].description;
      const temp = data.list[2].temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      // Modifier le DOM
      document.getElementById('3days-forecast-main').innerHTML = main;
      document.getElementById('3days-forecast-more-info').innerHTML = description;
      document.getElementById('3days-weather-container').innerHTML = icon;
      document.getElementById('3days-forecast-temp').innerHTML = `${temp}°C`;
      
    })

    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
  }
