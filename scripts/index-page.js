const commentsArr = [ //array with default comments
    {
    name: "Connor Walton",
    comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    id: "b79f9700-1148-4ed8-ba65-38c3e2ab28c2",
    likes: 0,
    timestamp: "02/17/2021"
    },
    {
    name: "Emilie Beach",
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    id: "1d65acf3-8b27-4342-bea7-fc53cf552f31",
    likes: 0,
    timestamp: "01/09/2021"
    },
    {
    name: "Miles Acosta",
    comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    id: "2cc81763-74a6-4ee1-9a5a-d8906981ece1",
    likes: 0,
    timestamp: "12/20/2020"
    }
    ]

const formBox = document.querySelector(".comment-box__title"); //last element before we start DOM manipulation
//create form dynamically
const form = document.createElement("form");
form.classList.add("comment-box__form");
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
inputName.name = "username";
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

//code for posting comments
const customForm = document.querySelector(".comment-box__form"); //same as a form we used initially
const dynamicBox = document.querySelector(".comment-box__dynamic"); //new placeholder for comments
// dynamicBox.classList.add("comment-box__dynamic");
    
const notes = []; //create a new array for dynamic comments (CAN USE = commentsArr)
    
customForm.addEventListener("submit", function (event) {
event.preventDefault();
const dynamicNameVal = event.target.username.value; // itemInput matches form input value of the name attr
const dynamicComVal = event.target.comment.value;
// check the both input fields have a value
if (dynamicNameVal !== "" && dynamicComVal !== "") {
notes.unshift({
    title: dynamicNameVal,
    content: dynamicComVal,
});
    renderNotes();
    event.target.reset();
    } else {
        alert("please enter some text");
    }
});
    //create a function to post one comment at once
function renderNotes() {
    dynamicBox.innerHTML = ""; //make sure there is no html repeated elements before posting new comments
    notes.forEach(function (note) {
    //card for dynamic comments
    const commentBoxCardDynamic = document.createElement("div");
    commentBoxCardDynamic.classList.add("comment-box__card-default"); 
    // create <div> for the left part of the dynamic card (avatar)
    const avatarBoxDynamic = document.createElement("div");
    avatarBoxDynamic.classList.add("comment-box__avatar-box");
    //create <div> wrapper for the right part of the dynamic card (name/date/comment)
    const contentBoxDynamic = document.createElement("div");
    contentBoxDynamic.classList.add("comment-box__wrapper-default");
    // create <div> avatar
    const avatarDynamic = document.createElement("div");
    avatarDynamic.classList.add("comment-box__avatar-default");
    // create <div> for name and date
    const commentTopBoxDynamic = document.createElement("div");
    commentTopBoxDynamic.classList.add("comment-box__top-box");
    //post your Name
    const dynamicName = document.createElement("h3")
    dynamicName.classList.add("comment-box__name-default");
    dynamicName.innerText = note.title;
    //post your Date
    const dynamicDate = document.createElement("p");
    dynamicDate.classList.add("comment-box__date-default");
    dynamicDate.innerText = "today";
    //post your Comment
    const dynamicComment = document.createElement("p");
    dynamicComment.classList.add("comment-box__comment-default");
    dynamicComment.innerText = note.content;
    
    //append all elements to the card
    commentBoxCardDynamic.appendChild(avatarBoxDynamic);
    avatarBoxDynamic.appendChild(avatarDynamic);
    commentBoxCardDynamic.appendChild(contentBoxDynamic);
    contentBoxDynamic.appendChild(commentTopBoxDynamic);
    commentTopBoxDynamic.appendChild(dynamicName);
    commentTopBoxDynamic.appendChild(dynamicDate);
    contentBoxDynamic.appendChild(dynamicComment);
        dynamicBox.appendChild(commentBoxCardDynamic);
    });
}
renderNotes();

//create default comment boxes
const commentBox = document.querySelector(".comment-box__default"); //placeholder for default comment section 

// append array of shows to dom element
function appendComments(comments, boxElem) { 
comments.forEach(function (comment) {
// create <div> card for default comments
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
defaultName.innerText = comment.name;
// create <p> for date
const defaultDate = document.createElement("p");
defaultDate.classList.add("comment-box__date-default");
defaultDate.innerText = comment.timestamp;
// create <p> for comment
const defaultComment = document.createElement("p");
defaultComment.classList.add("comment-box__comment-default");
defaultComment.innerText = comment.comment;

// append nodes to DOM

commentBoxCard.appendChild(avatarBox);
avatarBox.appendChild(avatarDefault);
commentBoxCard.appendChild(contentBox);
contentBox.appendChild(commentTopBox);
commentTopBox.appendChild(defaultName);
commentTopBox.appendChild(defaultDate);
contentBox.appendChild(defaultComment);
// append created <div> card to the card container
    boxElem.appendChild(commentBoxCard);
});
};

// call appendComments function
appendComments(commentsArr, commentBox);

