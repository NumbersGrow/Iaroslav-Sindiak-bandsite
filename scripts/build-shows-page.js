const concertsArr = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    }
];

const showsList = document.querySelector(".main-content__concerts");

// append array of shows to dom element
function appendShows(concerts, listElem) {
concerts.forEach(function (show) {
// create <li>
const showLi = document.createElement("ul"); //it was li item
showLi.classList.add("main-content__concerts"); //it was main-content__list-item
// create <p> date subtitle
const showSubtitleDate = document.createElement("p");
showSubtitleDate.classList.add("main-content__subtitle");
showSubtitleDate.innerText = "Date";
// create <p> show.date
const showDate = document.createElement("p");
showDate.classList.add("main-content__date");
showDate.innerText = show.date;
// venue subtitle
const showSubtitleVenue = document.createElement("p");
showSubtitleVenue.classList.add("main-content__subtitle");
showSubtitleVenue.innerText = "Venue";
// create <p> show.venue
const showVenue = document.createElement("p");
showVenue.classList.add("main-content__venue");
showVenue.innerText = show.venue;
// location subtitle
const showSubtitleLocation = document.createElement("p");
showSubtitleLocation.classList.add("main-content__subtitle");
showSubtitleLocation.innerText = "Location";
// create <p>  show.location
const showLocation = document.createElement("p");
showLocation.classList.add("main-content__location");
showLocation.innerText = show.location;
//button
const showButton = document.createElement("button");
showButton.innerText = "buy tickets";
showButton.classList.add("main-content__button");
  
// append nodes to dom, first append all created elements to the <li>

showLi.appendChild(showSubtitleDate);
showLi.appendChild(showDate);
showLi.appendChild(showSubtitleVenue);
showLi.appendChild(showVenue);
showLi.appendChild(showSubtitleLocation);
showLi.appendChild(showLocation);
showLi.appendChild(showButton);
// append created <li> to <ul>
    listElem.appendChild(showLi);
    });
  }
  
  // call appendShows function
  appendShows(concertsArr, showsList);