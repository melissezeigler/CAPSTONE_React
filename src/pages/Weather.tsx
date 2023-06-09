function Weather() {
  const getData = async () => {
    var inputCity: HTMLElement|null = document.getElementById("inputCity"); //take info from user text box
    var cityUrl = `https://goweather.herokuapp.com/weather/${inputCity}` //put input text into the API URL
    let weatherFetchData = await fetch(cityUrl) //fetch the data from the API and save it to variable
    let jsonweatherFetchData = await weatherFetchData.json() //jsonify the API data    
    return jsonweatherFetchData 
  }
  const DOM_Elements = {
    weather_info: '.weather-info', 
  }
  const load_data = async () => { 
      const weatherData = await getData();
      const html = `<a href ="#" class="list-group-item">
      <pre style="color:midnightblue; font-family:helvetica; font-style:italic;">
          Temperature: ${weatherData.temperature}\n
          Wind: ${weatherData.wind}\n
          Cloud Conditions: ${weatherData.description}\n
          Tomorrow's Forecast: Temperature will be ${weatherData.forecast[0].temperature} and\n 
          the wind will be ${weatherData.forecast[0].wind}
      </pre>    
      </a>`;
      document.querySelector(DOM_Elements.weather_info).insertAdjacentHTML('beforeend', html);
  }
  const clear_data = () => {
      document.querySelector(DOM_Elements.weather_info).innerHTML = '';
  }

  return (
    <form className="w-full max-w-md">
      <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h5 className="mb-2 text-bold text-blue-800 text-2xl font-medium leading-tight">
      Weather
        </h5>
        <p className="mb-4 text-base text-blue-600">This is the weather forecast section. You can enter the name of a city near where you will be hiking 
        to check the local weather. Be aware, the API does not have every city available so it may be necessary to try a different nearby city. 
        Also, the API seems to go down at night, so if your data cannot be retreived, try again in a few hours.
        </p>
        <input className='appearance-none bg-transparent border-none w-full text-blue-700 mr-3 py-1 px-2 leading-tight focus:outline-none' 
        type="text" placeholder="Input city" id="inputCity"/>
        <button type="button" className="text-blue-800 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] 
        hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]"
        onClick={() => load_data()}>View Weather Details
        </button>
        <button className="text-blue-800 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] 
        hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]"
        onClick={() => clear_data()}>Clear
        </button>
        <div className="flex flex-grow pt-3">
          <section className="list-group weather-info"></section>
        </div>
      </div>
    </form>    
  )  
}

export default Weather

