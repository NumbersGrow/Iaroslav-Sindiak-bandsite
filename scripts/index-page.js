const commentsArr = [
    {
    "name": "Connor Walton",
    "comment": "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    "id": "b79f9700-1148-4ed8-ba65-38c3e2ab28c2",
    "likes": 0,
    "timestamp": 1613538000000
    },
    {
    "name": "Emilie Beach",
    "comment": "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    "id": "1d65acf3-8b27-4342-bea7-fc53cf552f31",
    "likes": 0,
    "timestamp": 1610168400000
    },
    {
    "name": "Miles Acosta",
    "comment": "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    "id": "2cc81763-74a6-4ee1-9a5a-d8906981ece1",
    "likes": 0,
    "timestamp": 1608440400000
    }
    ]

const formBox = document.querySelector(".comment-box__title");
//create form dynamically
const form = document.createElement("form");
form.classList.add("comment-box__form");
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
labelName.setAttribute("for", "");
labelComment.setAttribute("for", "");
labelName.innerText = "name";
labelComment.innerText = "comment";
//create an input for Username
const inputName = document.createElement("input");
inputName.setAttribute("type", "text");
inputName.setAttribute("name", "username");
inputName.setAttribute("placeholder", "Enter your name");
//create a text area for Comment
const inputComment = document.createElement("textarea");
inputComment.setAttribute("name", "comment");
inputComment.setAttribute("placeholder", "Add a new comment");
//create a button
const formButton = document.createElement("button");
formButton.classList.add("comment-box__button");
formButton.setAttribute("type", "submit")
formButton.innerText = "comment";

//Append all elements to the page
formBox.appendChild(form);
form.appendChild(formAvatar);
form.appendChild(formDiv);
formDiv.appendChild(labelName);
formDiv.appendChild(inputName);
formDiv.appendChild(labelComment);
formDiv.appendChild(inputComment);
formDiv.appendChild(formButton);


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

    // const itemForm = document.getElementById('itemForm');
    // const dynamicContent = document.getElementById('dynamicContent');
    
    // itemForm.addEventListener('submit', function (event) {
    //   event.preventDefault();
    //   const itemInputVal = event.target.itemInput.value; // itemInput matches form input value of the name attr
    //   const listElement = document.createElement('li');
    //   listElement.innerText = itemInputVal;
    //   dynamicContent.appendChild(listElement);
    // });

// const form = document.querySelector('form');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const theFormObject = event.target;

//     const email = theFormObject.username.value;
//     const password = theFormObject.password.value;
//     const frailty = theFormObject.nikoflaw.value;

//     console.log('email', email);
//     console.log('password', password);
//     console.log('frailty', frailty);
// });