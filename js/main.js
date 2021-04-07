const APIKey = '0c965803d973ae525d2e24f0281c34a9';
const Lselector = document.querySelector('.locationSelection')

const ActualLabel = document.querySelector('.ActualTempLabel')
const FeelsLikeLabel = document.querySelector('.FeelsLikeLabel')

const WeatherImage = document.querySelector('.weatherImage')
const WeatherMain = document.querySelector('.weather_main')
const WeatherDisc = document.querySelector('.weather_disc')

function Weather(){

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${Lselector.value}&units=metric&appid=`+APIKey;

    fetch(url).then(function(response) {
        return response.json();
    }).then(function(obj){
        console.log(obj);
        const Icon = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;

        WeatherDisc.textContent = obj.weather[0].description
        ActualLabel.textContent = "Temperature: "+Math.floor(obj.main.temp)+'°';
        FeelsLikeLabel.textContent = "Feels Like: "+Math.floor(obj.main.feels_like)+'°';
        WeatherImage.src = Icon

    }).catch(function(error){
        console.error(error);
    })
}

Lselector.addEventListener('change', function(e){
    Weather();
});

Weather();

    