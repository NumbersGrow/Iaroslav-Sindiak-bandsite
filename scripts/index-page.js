// save api key as a variable after /register
const key = "5521499d-cfcd-4d46-a655-ade2fb067982";
// create element for all comments posting
const dynamicBox = document.querySelector(".comment-box__dynamic"); //new placeholder for comments
const formBox = document.querySelector(".comment-box__form"); //placeholder for comment Form
//create form dynamically
const form = document.createElement("form");
form.classList.add("comment-box__form-custom");
// create <div> for the avatar for better structure
const avatarDynamicBox = document.createElement("div");
avatarDynamicBox.classList.add("comment-box__avatar-box");
//create avatar
const formAvatar = document.createElement("img");
formAvatar.classList.add("comment-box__avatar");
formAvatar.src = "assets/images/Mohan-muruge.jpg";
formAvatar.alt = "avatar";
//create <div> for alligning input boxes
const formDiv = document.createElement("div");
formDiv.classList.add("comment-box__wrapper");
//create labels
const labelName = document.createElement("label");
const labelComment = document.createElement("label");
labelName.classList.add("comment-box__label");
labelComment.classList.add("comment-box__label");
labelName.for = "";
labelComment.for = "";
labelName.innerText = "name";
labelComment.innerText = "comment";
//create an input for Username
const inputName = document.createElement("input");
inputName.classList.add("comment-box__input-name");
inputName.type = "text";
inputName.name = "name";
inputName.placeholder = "Enter your name";
//create a text area for Comment
const inputComment = document.createElement("textarea");
inputComment.classList.add("comment-box__input-comment");
inputComment.name = "comment";
inputComment.placeholder = "Add a new comment";
//create a button
const formButton = document.createElement("button");
formButton.classList.add("comment-box__button");
formButton.type = "submit";
formButton.innerText = "comment";

//Append all elements to the page
formBox.appendChild(form);
form.appendChild(avatarDynamicBox);
avatarDynamicBox.appendChild(formAvatar);
form.appendChild(formDiv);
formDiv.appendChild(labelName);
formDiv.appendChild(inputName);
formDiv.appendChild(labelComment);
formDiv.appendChild(inputComment);
formDiv.appendChild(formButton);

function getComments() {
    axios
      .get(`https://project-1-api.herokuapp.com/comments?api_key=${key}`)
      .then((response) => {
        console.log(`get response: ${response.data}`);
  
        dynamicBox.innerText = "";
  
        //sort by timestamp/date the response.data
        const sortedByDate = response.data.sort((a, b) => b.timestamp - a.timestamp)

        for (let i = 0; i < sortedByDate.length; i++) {
            const commentBoxCard = document.createElement("div");
            commentBoxCard.classList.add("comment-box__card-default"); 
            // create <div> for the left part of the default card (avatar)
            const avatarBox = document.createElement("div");
            avatarBox.classList.add("comment-box__avatar-box");
            //create <div> wrapper for the right part of the default card (name/date/comment)
            const contentBox = document.createElement("div");
            contentBox.classList.add("comment-box__wrapper-default");
            // create <div> avatar
            const avatarDefault = document.createElement("div");
            avatarDefault.classList.add("comment-box__avatar-default");
            // create <div> for name and date
            const commentTopBox = document.createElement("div");
            commentTopBox.classList.add("comment-box__top-box");
            // create <h3> for name
            const defaultName = document.createElement("h3");
            defaultName.classList.add("comment-box__name-default");
            defaultName.innerText = sortedByDate[i].name;
            // create <p> for date
            const defaultDate = document.createElement("p");
            defaultDate.classList.add("comment-box__date-default");
            const datePosted = sortedByDate[i].timestamp;
            const formattedDate = new Date(datePosted).toLocaleDateString();
            defaultDate.innerText = formattedDate;
            // create <p> for comment
            const defaultComment = document.createElement("p");
            defaultComment.classList.add("comment-box__comment-default");
            defaultComment.innerText = sortedByDate[i].comment;

            // append nodes to DOM

            commentBoxCard.appendChild(avatarBox);
            avatarBox.appendChild(avatarDefault);
            commentBoxCard.appendChild(contentBox);
            contentBox.appendChild(commentTopBox);
            commentTopBox.appendChild(defaultName);
            commentTopBox.appendChild(defaultDate);
            contentBox.appendChild(defaultComment);
            // append created <div> card to the card container
                dynamicBox.appendChild(commentBoxCard);
        }
      })
      .catch((error) => {
        console.log(error);
      });
}
  
getComments();

// posting new comment
formBox.addEventListener("submit", (event) => {
    event.preventDefault();
    // posting comment to API
    const dynamicNameVal = event.target.name.value; // Name input matches form input value of the name attribute
    const dynamicComVal = event.target.comment.value;
    // check the both input fields have a value
    if (dynamicNameVal !== "" && dynamicComVal !== "") {
    axios
      .post(`https://project-1-api.herokuapp.com/comments?api_key=${key}`, {
        name: dynamicNameVal,
        comment: dynamicComVal,
      })
      .then((response) => {
        console.log(response);
      })
      .then(() => {
        getComments();
        event.target.reset();
  })
    .catch((error) => {
        console.error(error);
    });
  } else {
    alert("please enter some text");
}
});

