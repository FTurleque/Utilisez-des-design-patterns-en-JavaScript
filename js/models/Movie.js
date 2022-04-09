// Le Parent
class Movie {
    constructor(data) {
        this._title = data.title
        this._duration = data.duration
    }
 
    get title() {
        return this._title
    }
 
    get duration() {
        return this._duration
    }
 }
 
  
 const dataExample = {
    title: "Titre de film",
    duration: "1h20"
 }
 
 // Le "New Object"
 const MovieExample = new Movie(dataExample)