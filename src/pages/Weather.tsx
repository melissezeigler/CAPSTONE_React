function Weather() {
  const getData = async () => {
    var inputCity: HTMLElement|null = document.getElementById("inputCity"); 
    var cityUrl = `https://goweather.herokuapp.com/weather/${inputCity}`
    let weatherFetchData = await fetch(cityUrl)
    let jsonweatherFetchData = await weatherFetchData.json()    
    return jsonweatherFetchData
  }
  const DOM_Elements = {
    weather_info: '.weather-info',
  }
  const load_data = async () => { 
      const weatherData = await getData();
      const html = `<a href ="#" class="list-group-item">
      <pre style="color:black; font-family:helvetica">
          Temperature: ${weatherData.temperature}\n
          Wind: ${weatherData.wind}\n
          Cloud Conditions: ${weatherData.description}\n
          Tomorrow's Forecast: Temperature will be ${weatherData.forecast[0].temperature} and the wind will be ${weatherData.forecast[0].wind}
      </pre>    
      </a>`;
      document.querySelector(DOM_Elements.weather_info).insertAdjacentHTML('beforeend', html);
  }
  const clear_data = () => {
      document.querySelector(DOM_Elements.weather_info).innerHTML = '';
  }

  return (
    <div className="border to-blue-700">
      <p>This is the weather forecast section. You can enter the name of a city near where you will be hiking to check the local Weather. 
      Be aware, the API does not have every city available so it may be necessary to try a different nearby city. 
      Also, the API seems to go down at night, so if your data cannot be retreived, try again in a few hours.</p>     
      <input className='p-3 bg-blue-100' type="text" placeholder="Input city" id="inputCity"/>
      <button className="p-3 bg-slate-300 m-3 hover:bg-slate-800 hover:text-white" 
      onClick={() => load_data()}>View Weather Details</button>
      <button className="p-3 bg-slate-300 m-3 hover:bg-slate-800 hover:text-white"
      onClick={() => clear_data()}>Clear</button>
      <section className="list-group weather-info"></section>
  </div>
  )
}
export default Weather

