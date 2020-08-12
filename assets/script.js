// JavaScript for Weather Dashboard
const APIKey = "4b4c26b849b9223e0d5cd0ffabdd0bff";
const currentDate = moment().format("MM/DD/YYYY");

const forecastURL = "api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIKey;

let cityName = $("#city-search");

function displayWeather(city) {
  $('#todaycitydateicon').text(city + " " + currentDate + " ");
  $.ajax({
    'url': "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey,
    'method': 'GET',
    'success': response => {
      $('#todaycitydateicon').append(response.weather.icon),
      //$('#todaytemp').text(response.main.temp), need to translate to farengheight.
      $('#todayhumid').text(response.main.humidity),
      $('#todaywind').text(response.wind.speed),
    }
    $.ajax({
      'url': "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + response.coord.lat + "&lon=" + response.coord.lon,
      'method': 'GET',
    }).then(uvresponse => {
      if (uvresponse.value > 11) {

      } else if (uvresponse.value >7) {

      } else if (uvresponse.value >5) {

      } else if (uvresponse.value > 2) {

      } else {

      }
      $('#todayuv').text(uvresponse.value)
    })
  })
}

function displayForecast(city) {
  $('#day1date').text(moment().format('MM/DD/YYYY'));
  $('#day2date').text(moment().add(+1, 'days').format('MM/DD/YYYY'));
  $('#day3date').text(moment().add(+2, 'days').format('MM/DD/YYYY'));
  $('#day4date').text(moment().add(+3, 'days').format('MM/DD/YYYY'));
  $('#day5date').text(moment().add(+4, 'days').format('MM/DD/YYYY'));
  $.ajax({
    'url': "api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIKey,
    'method': 'GET',
    'success': response => {
      $('#day1icon').append(),
      $('#day1temp').text(),
      $('#day1humid').text(),
    }
  })
}

//set click event on search submit button
$("#submit").on("click", function(){

});

//set click event on history buttons