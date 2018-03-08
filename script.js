var movies = [{
  id: 1,
  title: 'Lista Schindlera',
  director: 'Steven Spielberg',
  genre: 'Dramat wojenny',
  year: '1993',
  img: 'images/SchindlersList.jpg'

},
{
  id: 2,
  title: 'Pianista',
  director: 'Roman Polański',
  genre: 'Biograficzny, dramat wojenny',
  year: '2002',
  img: 'images/Pianist.jpg'
},

{
  id: 3,
  title: 'Bogowie',
  director: 'Łukasz Palkowski',
  genre: 'Biograficzny, dramat',
  year: '2014',
  img: 'images/Bogowie.jpg'
}




];

var MovieTitle = React.createClass({ // stworzenie klasy
  propTypes: {
    title: React.PropTypes.object.isRequired, // określenie typu danych
  },
  render: function() {
    return (
      React.createElement('h2', {}, this.props.title) // Określi, że to, co wyciągniemy z 'title' wyświetli się w postaci 'h2'
    );
  }
});

var MovieDirector = React.createClass({
  propTypes: {
    director: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('p', {}, this.props.director) // analogicznie director wyświetli się w postaci 'p'
    );
  }
});

var MovieGenre = React.createClass({
  propTypes: {
    genre: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('p', {}, this.props.genre) // analogicznie genre wyświetli się w postaci 'p'
    );
  }
});

var MovieYear = React.createClass({
  propTypes: {
    year: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('p', {}, this.props.year) // analogicznie year wyświetli się w postaci 'p'
    );
  }
});

var MovieImage= React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('img', {src: this.props.img}) // analogicznie image wyświetli się w postaci 'img'
    );
  }
});


var MovieList = React.createClass({                // robi klocek o nazwie 'MovieList' zawierający wszystkie informacje o filmie: title, director, genre, year, img i pakuje - pakuje to do 'li'
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
  render: function() {
    return(
      React.createElement('li', {src: this.props.movie.id},
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDirector, {director: this.props.movie.director}),
        React.createElement(MovieGenre, {genre: this.props.movie.genre}),
        React.createElement(MovieYear, {year: this.props.movie.year}),
        React.createElement(MovieImage, {img: this.props.movie.img})
      )
    );
  }
});



var moviesElements = movies.map(function(movie) { //mapuje elementy tabeli (sam początek skryptu) i ładuje je do wartości 'MoviesElements'. Wynik tego mapowania zwracany jest w sposób, jaki określa klasa stworzona powyżej (MovieList (jedenfilm)) - wiersz 89)
  return React.createElement(MovieList, {key: movie.id, movie: movie});
});

var moviesList = React.createClass({  //Zmapowana tablica z góry skryptu, zwrócona w postaci klasy MovieList i zwrócona (włożona) do elementu  'ul' (kilka filmów)
    render: function() {
        return (React.createElement('ul', {}, moviesElements));
    }
});


var element = React.createElement('div', {},  // Przygotowanie ostatecznego elementu, który wyświetli się w HTML dzięki ID: 'app' 
  React.createElement('h1', {}, 'Lista filmów:'), // Dorobienie nagłówka z tytułem
  React.createElement(moviesList, {}) // Dołożenie zmapowanych, zwróconych w postaci klasy MovieList (dla każdego z osobna), a następnie powsadzanych do 'ul' (już wtedy jako movieList) elementów z tablicy. 
);

ReactDOM.render(element, document.getElementById('app'));



// movieList - jeden film (w sensie pełnej informacji o nim: tytuł, reżyser itp...), ale po stworzeniu klas dla każdego elementu tablicy (MovieTitle, MovieDirector, MovieGenre, MovieYear, MovieImage) a następnie wrzuceniu ich do 'li'.
// moviesElements - dzięki mapowaniu tablicy z góry skryptu produkuje kilka 'movieListów' - jest grupa filmów (u nas 3)
// moviesList - grupa filmów (moviesElements) włożona do 'ul'
