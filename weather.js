class Weather {
    constructor(city) {
        this.apiKey = 'ba94f6e071581e275e67f24cf43f98ea';
        this.city = city;

    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&lang=de&units=metric`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;

    }
}
