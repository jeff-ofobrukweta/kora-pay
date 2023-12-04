const recentBooks = [
    {
      name: "The Effective Engineer",
      status: "Available",
      author: "Edmond Lau",
      year: 2009,
      type: "Motivational",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "./images/bookcovers/effective-engineer.png",
    },
    {
      name: "Built To Last",
      status: "Borrowed Out",
      author: "Jim Collins, Jerry I. Porras",
      year: 2001,
      type: "Business, Entrepreneurship",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "./images/bookcovers/built-to-last.png",
    },
    {
      name: "The Lean Startup",
      status: "Available",
      author: "Eric Reis",
      year: 2005,
      type: "Motivational",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "../../../assets/images/bookcovers/the-lean-startup.png",
    },
    {
      name: "Effective Python",
      status: "Available",
      author: "Diomidis Spinellis",
      type: "Motivational",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "../../../assets/images/bookcovers/effective-python.png",
    },
    {
      name: "Big Magic",
      status: "Available",
      author: "Elizabeth Gilbert",
      year: 2014,
      type: "Motivational",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "../../../assets/images/bookcovers/big-magic.png",
    },
  ];
  const allBooks = [
    {
      key: 1,
      name: "The Effective Engineer",
      status: "Available",
      author: "Edmond Lau",
      year: 2009,
      type: "Motivational",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "../../../assets/images/bookcovers/effective-engineer.png",
    },
    {
      key: 2,
      name: "Built To Last",
      status: "Borrowed Out",
      author: "Jim Collins, Jerry I. Porras",
      year: 2001,
      type: "Business, Entrepreneurship",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "../../../assets/images/bookcovers/built-to-last.png",
    },
    {
      key: 3,
      name: "The Lean Startup",
      status: "Available",
      author: "Eric Reis",
      year: 2005,
      type: "Motivational",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "../../../assets/images/bookcovers/the-lean-startup.png",
    },
    {
      key: 4,
      name: "Effective Python",
      status: "Available",
      author: "Diomidis Spinellis",
      type: "Motivational",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "../../../assets/images/bookcovers/effective-python.png",
    },
    {
      key: 5,
      name: "Big Magic",
      status: "Available",
      author: "Elizabeth Gilbert",
      year: 2014,
      type: "Motivational",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "../../../assets/images/bookcovers/big-magic.png",
    },
    {
      key: 6,
      name: "Effective Python",
      status: "Available",
      author: "Diomidis Spinellis",
      type: "Motivational",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "../../../assets/images/bookcovers/effective-python.png",
    },
    {
      key: 7,
      name: "The Effective Engineer",
      status: "Available",
      author: "Edmond Lau",
      year: 2009,
      type: "Motivational",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "../../../assets/images/bookcovers/effective-engineer.png",
    },
    {
      key: 8,
      name: "Built To Last",
      status: "Borrowed Out",
      author: "Jim Collins, Jerry I. Porras",
      year: 2001,
      type: "Business, Entrepreneurship",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "../../../assets/images/bookcovers/built-to-last.png",
    },
    {
      key: 9,
      name: "The Lean Startup",
      status: "Available",
      author: "Eric Reis",
      year: 2005,
      type: "Motivational",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "../../../assets/images/bookcovers/the-lean-startup.png",
    },
    {
      key: 10,
      name: "Effective Python",
      status: "Available",
      author: "Diomidis Spinellis",
      type: "Motivational",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "../../../assets/images/bookcovers/effective-python.png",
    },
    {
      key: 11,
      name: "Big Magic",
      status: "Available",
      author: "Elizabeth Gilbert",
      year: 2014,
      type: "Motivational",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "../../../assets/images/bookcovers/big-magic.png",
    },
    {
      key: 12,
      name: "The Effective Engineer",
      status: "Available",
      author: "Edmond Lau",
      year: 2009,
      type: "Motivational",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "../../../assets/images/bookcovers/effective-engineer.png",
    },
    {
      key: 13,
      name: "The Lean Startup",
      status: "Available",
      author: "Eric Reis",
      year: 2005,
      type: "Motivational",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "../../../assets/images/bookcovers/the-lean-startup.png",
    },
  ];
  const carouselBooks = [
    {
      key: 10,
      name: "Big Magic",
      status: "Available",
      author: "Elizabeth Gilbert",
      year: 2014,
      type: "Motivational",
      labels: "Creative, Self-help",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "../../../assets/images/bookcovers/large/big-magic.png",
    },
    {
      key: 11,
      name: "Built To Last",
      status: "Borrowed Out",
      author: "Jim Collins, Jerry I. Porras",
      year: 2001,
      type: "Business, Entrepreneurship",
      labels: "Creative, Self-help",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "../../../assets/images/bookcovers/large/built-to-last.png",
    },
    {
      key: 12,
      name: "Effective Python",
      status: "Available",
      author: "Diomidis Spinellis",
      type: "Motivational",
      labels: "Creative, Self-help",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "../../../assets/images/bookcovers/large/effective-python.png",
    },
    {
      key: 13,
      name: "The Lean Startup",
      status: "Available",
      author: "Eric Reis",
      year: 2005,
      type: "Motivational",
      labels: "Creative, Self-help",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "../../../assets/images/bookcovers/large/the-lean-startup.png",
    },
    {
      key: 14,
      name: "Effective Python",
      status: "Available",
      author: "Diomidis Spinellis",
      type: "Motivational",
      labels: "Creative, Self-help",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "../../../assets/images/bookcovers/large/effective-python.png",
    },
    {
      key: 15,
      name: "Big Magic",
      status: "Available",
      author: "Elizabeth Gilbert",
      year: 2014,
      type: "Motivational",
      labels: "Creative, Self-help",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "../../../assets/images/bookcovers/large/big-magic.png",
    },
    {
      key: 16,
      name: "Built To Last",
      status: "Borrowed Out",
      author: "Jim Collins, Jerry I. Porras",
      year: 2001,
      type: "Business, Entrepreneurship",
      labels: "Creative, Self-help",
      ratings: "4.0",
      users: 31,
      likes: 29,
      cover: "../../../assets/images/bookcovers/large/built-to-last.png",
    },
  ];
  const autoCompleteResults = [
    { name: "Built to Last - Jim Collins, Jerry I. Porras…" },
    { name: "Four Steps To The Epiphany - James McEnroe" },
    { name: "The Lean Start Up - Eric Reiss" },
    { name: "No Excuses - Brian Tracy" },
  ];
  let filteredBooks = recentBooks;
  const closeSidebar = () => {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("active");
  };
  const openSidebar = () => {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.add("active");
  };
  const openMobileSearch = () => {
    let navbar = document.getElementById("navbar");
    navbar.classList.add("searching");
  };
  const closeMobileSearch = () => {
    let navbar = document.getElementById("navbar");
    navbar.classList.remove("searching");
  };
  const openBookDetails = (id) => {
    let carouselItem = document.getElementById(id);
    carouselItem.classList.add("active");
  };
  const closeBookDetails = (id) => {
    let carouselItem = document.getElementById(id);
    carouselItem.classList.remove("active");
  };
  const autoComplete = (inp, arr) => {
    let currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", (e) => {
      let val = e.target.value;
      closeAllLists();
      if (!val) {
        return false;
      }
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      let autocompleteContainer = document.createElement("div");
      autocompleteContainer.setAttribute("id", inp.id + "autocomplete-container");
      autocompleteContainer.classList.add("autocomplete-container");
  
      /* create a ul to hold the results */
      let autocompleteList = document.createElement("ul");
      autocompleteList.classList.add("autoCompleteList");
  
      /* add autoComplete list to autoComplete container*/
      autocompleteContainer.appendChild(autocompleteList);
      inp.parentNode.appendChild(autocompleteContainer);
  
      /*loop through results*/
      for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        /*check if the item starts with the same letters as the text field value:*/
        if (
          item.name.substr(0, val.length).toLocaleLowerCase() ==
          val.toLocaleLowerCase()
        ) {
          /*create a Li element for each matching element:*/
          let result = document.createElement("li");
          /*make the matching letters by adding a styled span:*/
          result.innerHTML =
            "<span>" + item.name.substr(0, val.length) + "</span>";
          result.innerHTML += item.name.substr(val.length);
          autocompleteList.appendChild(result);
        }
      }
    });
  };
  const closeAllLists = (elmnt) => {
    /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-container");
    for (let i = 0; i < x.length; i++) {
      if (
        elmnt != x[i] &&
        elmnt != document.getElementById("autocomplete-input")
      ) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  };
  const handleChange = (value) => {
    document.getElementById("book-sections").innerHTML = "";
    document.getElementById("carousel-section").style.display = "none";
    if (value === "") {
      document.getElementById("carousel-section").style.display = "block";
      loadBookSection("RECENTLY ADDED", recentBooks);
      loadBookSection("ALL BOOKS", allBooks);
    } else {
      loadBookSection("SEARCH RESULTS", filteredBooks);
    }
    filteredBooks = recentBooks.filter((book) => {
      return book.name.toLowerCase().includes(value.toLowerCase());
    });
  };
  const loadBookSection = (title, list) => {
    let book_sections = document.getElementById("book-sections");
    let section = document.createElement("section");
    let sectionTitle = document.createElement("p");
    sectionTitle.classList.add("section-header");
    sectionTitle.textContent = title;
    let book_list_container = document.createElement("div");
    book_list_container.classList.add("book-list");
    for (let i = 0; i < list.length; i++) {
      let book = list[i];
      //create book item element
      let book_item = document.createElement("div");
      book_item.classList.add("book-item"); //add book item class
      //create image element for cover
      let cover = document.createElement("img");
      cover.src = book.cover; //add cover src
      cover.alt = "book-cover"; //add cover alt
      cover.classList.add("book-cover"); //add cover class
  
      let book_details = document.createElement("div"); //create book details div
      book_details.classList.add("book-details"); //add class to book details
  
      let status = document.createElement("p");
      status.className = `status ${book.status
        .toLocaleLowerCase()
        .replace(/ /g, "")}`;
      status.textContent = book.status;
  
      let name = document.createElement("h3");
      name.classList.add("name");
      name.textContent = book.name;
  
      let author = document.createElement("p");
      author.classList.add("author");
      author.textContent = `${book.author} ${book.year ? `- ${book.year}` : ""}`;
  
      let type = document.createElement("p");
      type.classList.add("type");
      type.textContent = book.type;
  
      let ratings_socials = document.createElement("div");
      ratings_socials.classList.add("ratings_socials");
  
      let ratings = document.createElement("div");
      ratings.classList.add("ratings");
  
      let book_rate = document.createElement("p");
      book_rate.textContent = `Ratings: ${book.ratings}`;
  
      let rate_container = document.createElement("div");
      rate_container.classList.add("rate");
      //create a loop of 5 items for 5 stars
      for (let i = 1; i < 6; i++) {
        //create input
        let input = document.createElement("input");
        let label = document.createElement("label");
        if (i === 2) {
          input.checked = "true";
        }
        input.type = "radio";
        input.id = `star${i}`;
        input.value = i;
        label.htmlFor = `star${i}`;
        label.title = "text";
        label.textContent = `${i} stars`;
        rate_container.appendChild(input);
        rate_container.appendChild(label);
      }
  
      let socials = document.createElement("div");
      socials.classList.add("socials");
  
      let social_icons = document.createElement("div");
      social_icons.classList.add("social-icons");
  
      let user_icon = document.createElement("img");
      let likes_icon = document.createElement("img");
      user_icon.classList.add("users");
      user_icon.src = "../../../assets/images/icons/user-count.svg";
      user_icon.alt = "social-icon";
      likes_icon.classList.add("likes");
      likes_icon.src = "../../../assets/images/icons/heart.svg";
      likes_icon.alt = "social-icon";
  
      let numbers_container = document.createElement("div");
      let users_counts = document.createElement("span");
      let likes_count = document.createElement("span");
      users_counts.classList.add("num");
      users_counts.style.marginRight = "0.5rem";
      users_counts.textContent = book.users;
      likes_count.classList.add("num");
      likes_count.textContent = book.likes;
  
      book_details.appendChild(status);
      book_details.appendChild(name);
      book_details.appendChild(author);
      book_details.appendChild(type);
      book_details.appendChild(ratings_socials);
      ratings_socials.appendChild(ratings);
      ratings_socials.appendChild(socials);
      ratings.appendChild(book_rate);
      ratings.appendChild(rate_container);
      socials.appendChild(social_icons);
      socials.appendChild(numbers_container);
      social_icons.appendChild(user_icon);
      social_icons.appendChild(likes_icon);
      numbers_container.appendChild(users_counts);
      numbers_container.appendChild(likes_count);
  
      book_item.appendChild(cover); //add cover to book item
      book_item.appendChild(book_details); //add book details to book item
      //attach book item to container
      book_list_container.appendChild(book_item);
    }
    section.appendChild(sectionTitle);
    section.appendChild(book_list_container);
    book_sections.appendChild(section);
  };
  const loadCarouselItems = () => {
    let carousel = document.getElementById("carousel");
    for (let i = 0; i < carouselBooks.length; i++) {
      let carouselItem = carouselBooks[i];
      //create carousel cell
      let carousel_cell = document.createElement("div");
      carousel_cell.classList.add("carousel-cell");
      //create carousel item
      let carousel_item = document.createElement("div");
      carousel_item.classList.add("carousel-item");
      carousel_item.id = `carousel-item${carouselItem.key}`;
  
      //create overlay
      let overlay = document.createElement("div");
      overlay.classList.add("overlay");
  
      //create details toggle
      let details_toggle = document.createElement("img");
      details_toggle.classList.add("details-toggle");
      details_toggle.id = "details-toggle";
      details_toggle.onclick = () =>
        openBookDetails(`carousel-item${carouselItem.key}`);
      details_toggle.src = "../../../assets/images/icons/details-toggle.svg";
      details_toggle.alt = "details-toggle";
  
      //create close detail
      let close_details = document.createElement("img");
      close_details.classList.add("close-details");
      close_details.onclick = () =>
        closeBookDetails(`carousel-item${carouselItem.key}`);
      close_details.src = "../../../assets/images/icons/close-details.svg";
      close_details.alt = "close-details";
  
      //create details
      let details = document.createElement("div");
      details.classList.add("details"); //changed to book-details
      details.onclick = () =>
        closeBookDetails(`carousel-item${carouselItem.key}`);
      let status = document.createElement("p");
      status.className = `status ${carouselItem.status
        .toLocaleLowerCase()
        .replace(/ /g, "")}`;
      status.textContent = carouselItem.status;
  
      let name = document.createElement("h3");
      name.classList.add("name");
      name.textContent = carouselItem.name;
  
      let author = document.createElement("p");
      author.classList.add("author");
      author.textContent = `${carouselItem.author}`;
  
      let year = document.createElement("p");
      year.classList.add("year");
      if (carouselItem.year) year.textContent = `${carouselItem.year}`;
  
      let genre = document.createElement("div");
      genre.classList.add("type");
      genre.innerHTML = `<h3>Genre:</h3> <span>${carouselItem.type}</span>`;
  
      let label = document.createElement("div");
      label.classList.add("labels");
      label.innerHTML = `<h3>Labels:</h3> <span>${carouselItem.labels}</span>`;
  
      let book_rate = document.createElement("p");
      book_rate.classList.add("year");
      book_rate.innerHTML = `<h3>Ratings:</h3> <span>${carouselItem.ratings}<span>`;
  
      let ratings_socials = document.createElement("div");
      ratings_socials.classList.add("ratings_socials");
  
      let ratings = document.createElement("div");
      ratings.classList.add("ratings");
  
      let rate_container = document.createElement("div");
      rate_container.classList.add("rate");
      //create a loop of 5 and create 5 stars
      for (let i = 1; i < 6; i++) {
        //create input
        let input = document.createElement("input");
        let label = document.createElement("label");
        if (i === 2) {
          input.checked = "true";
        }
        input.type = "radio";
        input.id = `star${i}`;
        input.value = i;
        label.htmlFor = `star${i}`;
        label.title = "text";
        label.textContent = `${i} stars`;
        rate_container.appendChild(input);
        rate_container.appendChild(label);
      }
      let socials = document.createElement("div");
      socials.classList.add("socials");
      let social_icons = document.createElement("div");
      social_icons.classList.add("social-icons");
  
      let user_icon = document.createElement("img");
      let likes_icon = document.createElement("img");
      user_icon.classList.add("users");
      user_icon.src = "../../../assets/images/icons/users-count-light.svg";
      user_icon.alt = "social-icon";
      likes_icon.classList.add("likes");
      likes_icon.src = "../../../assets/images/icons/heart-light.svg";
      likes_icon.alt = "social-icon";
  
      let numbers_container = document.createElement("div");
      let users_counts = document.createElement("span");
      let likes_count = document.createElement("span");
      users_counts.className = "num first";
      users_counts.textContent = carouselItem.users;
      likes_count.classList.add("num");
      likes_count.textContent = carouselItem.likes;
  
      //create cover
      let cover = document.createElement("img");
      cover.src = carouselItem.cover;
      cover.alt = "cover";
  
      //append all created items to parents
      carousel_cell.appendChild(carousel_item);
      carousel_item.appendChild(overlay);
      carousel_item.appendChild(details_toggle);
      carousel_item.appendChild(close_details);
      carousel_item.appendChild(details);
      details.appendChild(status);
      details.appendChild(name);
      details.appendChild(author);
      details.appendChild(year);
      details.appendChild(genre);
      details.appendChild(label);
      details.appendChild(ratings_socials);
      ratings_socials.appendChild(ratings);
      ratings_socials.appendChild(socials);
      ratings.appendChild(book_rate);
      ratings.appendChild(rate_container);
      socials.appendChild(social_icons);
      social_icons.appendChild(user_icon);
      social_icons.appendChild(likes_icon);
      socials.appendChild(numbers_container);
      numbers_container.appendChild(users_counts);
      numbers_container.appendChild(likes_count);
      carousel_item.appendChild(cover);
      carousel.appendChild(carousel_cell);
    }
  };
  
  //functions that run on initializations (render :))
  loadCarouselItems();
  loadBookSection("RECENTLY ADDED", recentBooks);
  loadBookSection("ALL BOOKS", allBooks);
  autoComplete(
    document.getElementById("autocomplete-input"),
    autoCompleteResults
  );
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
  