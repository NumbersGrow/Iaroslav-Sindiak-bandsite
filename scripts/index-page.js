const commentsArr = [ //array with default comments
    {
    name: "Connor Walton",
    comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    id: "b79f9700-1148-4ed8-ba65-38c3e2ab28c2",
    likes: 0,
    timestamp: 1613538000000
    },
    {
    name: "Emilie Beach",
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    id: "1d65acf3-8b27-4342-bea7-fc53cf552f31",
    likes: 0,
    timestamp: 1610168400000
    },
    {
    name: "Miles Acosta",
    comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    id: "2cc81763-74a6-4ee1-9a5a-d8906981ece1",
    likes: 0,
    timestamp: 1608440400000
    }
    ]

const formBox = document.querySelector(".comment-box__title");
//create form dynamically
const form = document.createElement("form");
form.classList.add("comment-box__form");
// create <div> for the avatar for better structure
const avatarDynamicBox = document.createElement("div");
avatarDynamicBox.classList.add("comment-box__avatar-box");
//create avatar
const formAvatar = document.createElement("img");
formAvatar.classList.add("comment-box__avatar");
formAvatar.setAttribute("src", "assets/images/Mohan-muruge.jpg");
formAvatar.setAttribute("alt", "avatar");
//create <div> for alligning input boxes
const formDiv = document.createElement("div");
formDiv.classList.add("comment-box__wrapper");
//create labels
const labelName = document.createElement("label");
const labelComment = document.createElement("label");
labelName.classList.add("comment-box__label");
labelComment.classList.add("comment-box__label");
labelName.setAttribute("for", "");
labelComment.setAttribute("for", "");
labelName.innerText = "name";
labelComment.innerText = "comment";
//create an input for Username
const inputName = document.createElement("input");
inputName.classList.add("comment-box__input-name");
inputName.setAttribute("type", "text");
inputName.setAttribute("name", "username");
inputName.setAttribute("placeholder", "Enter your name");
//create a text area for Comment
const inputComment = document.createElement("textarea");
inputComment.classList.add("comment-box__input-comment");
inputComment.setAttribute("name", "comment");
inputComment.setAttribute("placeholder", "Add a new comment");
//create a button
const formButton = document.createElement("button");
formButton.classList.add("comment-box__button");
formButton.setAttribute("type", "submit")
formButton.innerText = "comment";

//Append all elements to the page
formBox.appendChild(form);
form.appendChild(avatarDynamicBox);
avatarDynamicBox.appendChild(formAvatar);
// form.appendChild(formAvatar);
form.appendChild(formDiv);
formDiv.appendChild(labelName);
formDiv.appendChild(inputName);
formDiv.appendChild(labelComment);
formDiv.appendChild(inputComment);
formDiv.appendChild(formButton);

//create default comment boxes
const commentBox = document.querySelector(".comment-box__default");

// append array of shows to dom element
function appendComments(comments, boxElem) { // 
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

// append nodes to dom, first append all created elements to the <li>

commentBoxCard.appendChild(avatarBox);
avatarBox.appendChild(avatarDefault);
commentBoxCard.appendChild(contentBox);
contentBox.appendChild(commentTopBox);
commentTopBox.appendChild(defaultName);
commentTopBox.appendChild(defaultDate);
contentBox.appendChild(defaultComment);
// append created <li> to <ul>
    boxElem.appendChild(commentBoxCard);
});
};

// call appendComments function
appendComments(commentsArr, commentBox);

//code for posting comments
const itemForm = document.querySelector('.comment-box__form');
const noteList = document.querySelector('.comment-box__list');
    
const notes = [];
    
itemForm.addEventListener('submit', function (event) {
event.preventDefault();
const noteNameVal = event.target.username.value; // itemInput matches form input value of the name attr
const noteContentVal = event.target.comment.value;
// check the both input fields have a value
if (noteNameVal !== '' && noteContentVal !== '') {
notes.push({
    title: noteNameVal,
    content: noteContentVal,
});
    renderNotes();
    event.target.reset();
    } else {
        alert('please enter some text');
    }
});
    
function renderNotes() {
    noteList.innerHTML = '';
    notes.forEach(function (note) {
    const noteLi = document.createElement('li');
    const noteTitle = document.createElement('h3');
    noteTitle.innerText = note.title;
    const noteContent = document.createElement('p');
    noteContent.innerText = note.content;
    
        noteLi.appendChild(noteTitle);
        noteLi.appendChild(noteContent);
        noteList.appendChild(noteLi);
    });
}
renderNotes();
