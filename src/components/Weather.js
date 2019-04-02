export class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }; //this.state ends

        // const = openWeatherPassword = `1234abcd`;
    const openWeatherKey = `e6bcda912d208337919146e129b426ad`;
    const weatherForm = document.querySelector(`#weatherForm`);
    const weatherInput = document.querySelector(`#weatherInput`);
    const weatherBtn = document.querySelector(`#weatherBtn`);
  //   bringWeather(ev)=> {
  //
  //   let getWeatherForCity = async ev => {
  //     ev.preventDefault();
  //     let citys = input.value.split(`-`);
  //   try {
  //   for (let i = 0; i < citys.length; i++) {
  //
  //     let delayFetch = (name, time) => {
  //       return new Promise((resolve, reject) => {
  //           setTimeout(() => {
  //             resolve(fetch(openWeatherUrl))
  //           }, time)
  //       })
  //     }
  //     let openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citys[i]}&APPID=${openWeatherKey}`;
  //     let url = await delayFetch(citys[i],1000);
  //     let weatherObject = await url.json();
  //     let container = document.querySelector(`#weatherContainer`);
  //     let section = document.createElement(`SECTION`);
  //     let tempHeading = document.createElement(`H3`);
  //     let tempDescription = document.createElement(`P`);
  //     let tempParagraph = document.createElement(`P`);
  //     let weatherIcon = document.createElement(`IMG`);
  //     let tempCelsius = Math.round((weatherObject.main.temp-273.15));
  //     let iconSRC = weatherObject.weather[0].icon;
  //     tempHeading.innerText = weatherObject.name;
  //       if (tempCelsius <= 0) {
  //         section.style.background = `white`;
  //       }
  //       else if (tempCelsius <= 10) {
  //         section.style.background = `grey`;
  //       }
  //       else if (tempCelsius <= 20) {
  //         section.style.background = `yellow`;
  //       }
  //       else if (tempCelsius <= 30) {
  //         section.style.background = `salmon`;
  //       }
  //       else if (tempCelsius <= 40) {
  //         section.style.background = `red`;
  //       }
  //       tempParagraph.innerText = `${tempCelsius} °C`;
  //       tempDescription.innerText = weatherObject.weather[0].description;
  //       weatherIcon.src = `http://openweathermap.org/img/w/${iconSRC}.png`;
  //       section.appendChild(tempHeading);
  //       section.appendChild(tempParagraph);
  //       section.appendChild(tempDescription);
  //       tempDescription.appendChild(weatherIcon);
  //       weatherContainer.appendChild(section);
  //       input.value = ``;
  //       section.addEventListener(`click`, function removeSection(ev) {
  //       weatherContainer.removeChild(ev.currentTarget);
  //       })
  //     }
  //   }
  //   catch (error) {
  //     console.warn(error);
  //   }
  // }
  //   // form.addEventListener(`submit`, getWeatherForCity);
  // } // this.bringWeather ends

  } // constructor ends
  render() {
    return(
      <React.Fragment>
      <div className="container">
        <h2 className="lead mx-2 p-2">Checking weather around the globe</h2>
      </div>
      <div id="jso_weather" className="jumbotron m-1 p-2">
        <img src="./images/beachhouse.jpg" width="100%" height="250rem" alt="nothing to see here" />
        <form type="submit">
          <input type="text" placeholder="city to check" />
          <h2 className="lead p-2 m-2 bg-dark text-light text-center">enter city for weather information<br />seperate multiples by "-" </h2>
          <button type="submit" id="weatherBtn">bring the weather</button>
        </form>
      </div>
      </React.Fragment>

    )
  } // render ends
}
