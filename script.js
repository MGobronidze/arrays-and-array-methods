// ფილმების მასივი
let movies = [];

// 1. ფილმის დამატება
function addMovie(title, director, year, genre) {
  const movie = {
    title,
    director,
    year: Number(year),
    genre,
  };
  movies.push(movie);
  renderMovies(movies);
}

// ფილმების სიის გამოჩენა
function renderMovies(list) {
  const movieList = document.getElementById("movieList");
  movieList.innerHTML = "";

  if (list.length === 0) {
    movieList.innerHTML = "<p>ბიბლიოთეკა ცარიელია.</p>";
    return;
  }

  list.forEach((movie, index) => {
    const movieItem = document.createElement("div");
    movieItem.className = "movie-item";
    movieItem.innerHTML = `
      ${index + 1}. <span>${movie.title}</span> - ${movie.director} (${movie.year}) [${movie.genre}]
      <button onclick="deleteMovie('${movie.title}')">წაშლა</button>
    `;
    movieList.appendChild(movieItem);
  });
}

// 2. ფილმის დამატების ღილაკზე დაჭერისას
function handleAddMovie() {
  const title = document.getElementById("title").value.trim();
  const director = document.getElementById("director").value.trim();
  const year = document.getElementById("year").value.trim();
  const genre = document.getElementById("genre").value.trim();

  if (title && director && year && genre) {
    addMovie(title, director, year, genre);

    // ვწმენდთ ველებს
    document.getElementById("title").value = "";
    document.getElementById("director").value = "";
    document.getElementById("year").value = "";
    document.getElementById("genre").value = "";
  } else {
    alert("გთხოვთ შეავსოთ ყველა ველი.");
  }
}

// 3. ფილმის ძიება სათაურით
function handleFindMovie() {
  const searchTitle = document.getElementById("searchTitle").value.trim();
  if (searchTitle) {
    const found = movies.filter((movie) => movie.title.toLowerCase().includes(searchTitle.toLowerCase()));
    renderMovies(found);
  }
}

// 4. ფილმების გაფილტვრა ჟანრის მიხედვით
function handleFilterByGenre() {
  const genre = document.getElementById("filterGenre").value.trim();
  if (genre) {
    const filtered = movies.filter((movie) => movie.genre.toLowerCase() === genre.toLowerCase());
    renderMovies(filtered);
  }
}

// 5. ფილმების დალაგება წლით
function sortByYear() {
  const sorted = [...movies].sort((a, b) => a.year - b.year);
  renderMovies(sorted);
}

// 6. ფილმის წაშლა
function deleteMovie(title) {
  const index = movies.findIndex((movie) => movie.title === title);
  if (index !== -1) {
    movies.splice(index, 1);
    renderMovies(movies);
  }
}

// საწყისი სატესტო მონაცემები
addMovie("Inception", "Christopher Nolan", 2010, "Sci-Fi");
addMovie("Interstellar", "Christopher Nolan", 2014, "Sci-Fi");
addMovie("Parasite", "Bong Joon-ho", 2019, "Thriller");
addMovie("The Godfather", "Francis Ford Coppola", 1972, "Crime");
