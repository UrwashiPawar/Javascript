// https://www.googleapis.com/books/v1/volumes?q=5%20am%20club+intitle:keyes&key=AIzaSyDv8ylOZ_72jImC_DZeFFY_g_9HLSKqQbg

const ApiKey = "AIzaSyDv8ylOZ_72jImC_DZeFFY_g_9HLSKqQbg";

const searchText = document.getElementById("search-text");
const searchBtn = document.getElementById("search-btn");
const booksBox = document.getElementById("books-box");

function displayBooks(books) {
  
  books.map((book) => {
    console.log(book.volumeInfo.authors);
    const div = document.createElement("div");
    div.className = "col-6";
    div.innerHTML = `<div class="card border border-2 rounded rounded-3 border-primary" style="">
          <div class="card-body">
          <img src=${book.volumeInfo.imageLinks.thumbnail} style="height:200px" class="" alt="..." />
            <h5 class="card-title">${book.volumeInfo.title}</h5>
            <p class="card-text">${book.volumeInfo.description}</p>
            <a href="#" class="btn btn-primary">${book.volumeInfo.authors[0]}</a>
         </div>
    </div>`;
    console.log(div);
    booksBox.appendChild(div);
  });
}

function fetchbooks() {
  const search = searchText.value;
  const baseURL = `https://www.googleapis.com/books/v1/volumes?q=${search}+intitle:keyes&key=${ApiKey}`;
  fetch(baseURL)
    .then((res) => res.json())
    .then((data) => {
      displayBooks(data.items);
    });
}

searchBtn.addEventListener("click", fetchbooks);
