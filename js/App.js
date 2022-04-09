const fetchData = () => fetch('/data/data.json')
    .then(res => res.json())
    .catch(e => console.log('error', e))


class Movie {
    constructor(data) {
        this._data = data
    }

    get id() {
        return this._data.id
    }

    get title() {
        return this._data.title
    }

    get img() {
        return this._data.img
    }

    get rating() {
        return this._data.rating
    }
}


class App {
    async init() {
        const data = await fetchData()
        const movies = new Movie(data)
        console.log(data);
    }
}

const app = new App()
app.init()
