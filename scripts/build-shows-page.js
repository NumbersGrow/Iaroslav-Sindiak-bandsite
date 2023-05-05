// save api key as a variable after /register
const key = "5521499d-cfcd-4d46-a655-ade2fb067982";
// create element for all shows posting
const showsBox = document.querySelector(".main-content__concerts-box");
// append array of shows to dom element
function displayShows() {
    axios
        .get(`https://project-1-api.herokuapp.com/showdates?api_key=${key}`)
        .then((response) => {
            showsBox.innerText = "";
            for (let i = 0; i < response.data.length; i++) {
                // create <div> for show card
                const showCard = document.createElement("div");
                showCard.classList.add("main-content__concert-card"); 
                // make selected (clicked) row with a show change background color while selected
                showCard.tabIndex = 0;
                // create <p> date subtitle
                const showSubtitleDate = document.createElement("p");
                showSubtitleDate.classList.add("main-content__subtitle");
                showSubtitleDate.innerText = "Date";
                // create <p> date
                const showDate = document.createElement("p");
                showDate.classList.add("main-content__date");
                //transfer data from long number format to data format
                const datePosted = response.data[i].date;
                const formattedDate = new Date(datePosted).toDateString();
                showDate.innerText = formattedDate;
                // venue subtitle
                const showSubtitleVenue = document.createElement("p");
                showSubtitleVenue.classList.add("main-content__subtitle");
                showSubtitleVenue.innerText = "Venue";
                // create <p> place
                const showVenue = document.createElement("p");
                showVenue.classList.add("main-content__venue");
                showVenue.innerText = response.data[i].place;
                // location subtitle
                const showSubtitleLocation = document.createElement("p");
                showSubtitleLocation.classList.add("main-content__subtitle");
                showSubtitleLocation.innerText = "Location";
                // create <p>  location
                const showLocation = document.createElement("p");
                showLocation.classList.add("main-content__location");
                showLocation.innerText = response.data[i].location;
                //button
                const showButton = document.createElement("button");
                showButton.innerText = "buy tickets";
                showButton.classList.add("main-content__button");
                  
                // append nodes to dom, first append all created elements to the <div> show card
                showCard.appendChild(showSubtitleDate);
                showCard.appendChild(showDate);
                showCard.appendChild(showSubtitleVenue);
                showCard.appendChild(showVenue);
                showCard.appendChild(showSubtitleLocation);
                showCard.appendChild(showLocation);
                showCard.appendChild(showButton);
                // append created <div> to section
                    showsBox.appendChild(showCard);
            }
        })
        .catch((error) => {
            console.log(error);
        });       
}

  
  // call appendShows function
  displayShows();