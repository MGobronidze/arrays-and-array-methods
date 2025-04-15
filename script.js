// ფილმების მასივი
let movies = [];

// 1. ფილმის დამატება
function addMovie(title, director, year, genre) {
  const movie = {
    title,
    director,
    year,
    genre,
  };
  movies.push(movie);
  console.log(`ფილმი "${title}" წარმატებით დაემატა.`);
}

// 2. ყველა ფილმის ჩვენება
function showAllMovies() {
  if (movies.length === 0) {
    console.log("ბიბლიოთეკა ცარიელია.");
    return;
  }
  console.log("ფილმების სია:");
  movies.forEach((movie, index) => {
    console.log(
      `${index + 1}. ${movie.title} - ${movie.director} (${movie.year}) [${movie.genre}]`
    );
  });
}

// 3. ფილმის ძიება სათაურით
function findMovieByTitle(title) {
  const found = movies.find((movie) => movie.title.toLowerCase() === title.toLowerCase());
  if (found) {
    console.log(`ნაპოვნია: ${found.title} - ${found.director} (${found.year}) [${found.genre}]`);
  } else {
    console.log("ფილმი ვერ მოიძებნა.");
  }
}

// 4. ფილმების გაფილტვრა ჟანრის მიხედვით
function filterByGenre(genre) {
  const filtered = movies.filter((movie) => movie.genre.toLowerCase() === genre.toLowerCase());
  if (filtered.length === 0) {
    console.log("ასეთი ჟანრის ფილმები არ მოიძებნა.");
  } else {
    console.log(`ფილმები ჟანრით "${genre}":`);
    filtered.forEach((movie) => console.log(`${movie.title} (${movie.year})`));
  }
}

// 5. ფილმების დალაგება წლით (ზრდადობით)
function sortByYear() {
  const sorted = [...movies].sort((a, b) => a.year - b.year);
  console.log("დალაგებული ფილმები წლით:");
  sorted.forEach((movie) => console.log(`${movie.title} - ${movie.year}`));
}

// 6. ფილმის წაშლა სათაურით
function deleteMovie(title) {
  const index = movies.findIndex((movie) => movie.title.toLowerCase() === title.toLowerCase());
  if (index !== -1) {
    movies.splice(index, 1);
    console.log(`ფილმი "${title}" წაიშალა.`);
  } else {
    console.log("ასეთი ფილმი ვერ მოიძებნა.");
  }
}

// სატესტო მონაცემების დამატება
addMovie("Inception", "Christopher Nolan", 2010, "Sci-Fi");
addMovie("Interstellar", "Christopher Nolan", 2014, "Sci-Fi");
addMovie("Parasite", "Bong Joon-ho", 2019, "Thriller");
addMovie("The Godfather", "Francis Ford Coppola", 1972, "Crime");

// ფუნქციების დემონსტრაცია
console.log("\n--- ყველა ფილმი ---");
showAllMovies();

console.log("\n--- ძიება: Interstellar ---");
findMovieByTitle("Interstellar");

console.log("\n--- ფილმები ჟანრით: Sci-Fi ---");
filterByGenre("Sci-Fi");

console.log("\n--- ფილმების დალაგება წლით ---");
sortByYear();

console.log("\n--- წაშლა: Parasite ---");
deleteMovie("Parasite");

console.log("\n--- განახლებული სია ---");
showAllMovies();
