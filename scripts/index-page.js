// const commentsArr = [ 
//     {
//     name: "Connor Walton",
//     comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//     timestamp: "02/17/2021"
//     },
//     {
//     name: "Emilie Beach",
//     comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//     timestamp: "01/09/2021"
//     },
//     {
//     name: "Miles Acosta",
//     comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//     timestamp: "12/20/2020"
//     }
// ]

// save api key as a variable after /register
const key = "5521499d-cfcd-4d46-a655-ade2fb067982";
// create element for all comments posting
const dynamicBox = document.querySelector(".comment-box__dynamic"); //new placeholder for comments
const formBox = document.querySelector(".comment-box__form"); //placeholder for comment Form

function getComments() {
    axios
      .get(`https://project-1-api.herokuapp.com/comments?api_key=${key}`)
      .then((response) => {
        console.log(response.data);
  
        dynamicBox.innerText = "";
  
        //sort by timestamp/date the response.data
        const sortedByDate = response.data.sort((a, b) => b.timestamp - a.timestamp)
        console.log(sortedByDate);

        for (let i = 0; i < response.data.length; i++) {
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
            defaultName.innerText = response.data[i].name;
            // create <p> for date
            const defaultDate = document.createElement("p");
            defaultDate.classList.add("comment-box__date-default");
            const datePosted = response.data[i].timestamp;
            const formattedDate = new Date(datePosted).toLocaleDateString();
            defaultDate.innerText = formattedDate;
            // create <p> for comment
            const defaultComment = document.createElement("p");
            defaultComment.classList.add("comment-box__comment-default");
            defaultComment.innerText = response.data[i].comment;

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


function postNewComment(name, comment) {
    axios
      .post(`https://project-1-api.herokuapp.com/comments?api_key=${key}`, {
        name: name,
        comment: comment,
      })
      .then((response) => {
        dynamicBox.innerText = "";
        for (let i = 0; i < response.data.length; i++) {
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

    // post your Date NOT WORKING yet
    const dynamicDate = document.createElement("p");
    dynamicDate.classList.add("comment-box__date-default");
    // const bioDate = new Date(note.timestamp);
    // getDate = bioDate.toLocaleString("en-US");
 
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
    }
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
}
  
formBox.addEventListener("submit", (event) => {
    event.preventDefault(); // MAYBE DONT NEED
    axios
    .get(`https://project-1-api.herokuapp.com/comments?api_key=${key}`)
    .then((response) => {
      console.log(response.data);
      formBox.innerText = "";
    for (let i = 0; i < response.data.length; i++) {
        //create form dynamically
        formBox.classList.add("comment-box__form");
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
        formBox.appendChild(avatarDynamicBox);
        avatarDynamicBox.appendChild(formAvatar);
        formBox.appendChild(formDiv);
        formDiv.appendChild(labelName);
        formDiv.appendChild(inputName);
        formDiv.appendChild(labelComment);
        formDiv.appendChild(inputComment);
        formDiv.appendChild(formButton);
    }
    // posting comment to API
    postNewComment(event.target.name.value, event.target.comment.value);
})
});



//code for posting comments
// const customForm = document.querySelector(".comment-box__form"); //same as a form we used initially

    
// const notes = []; 
    
// customForm.addEventListener("submit", function (event) {
// event.preventDefault();
// const dynamicNameVal = event.target.username.value; // itemInput matches form input value of the name attr
// const dynamicComVal = event.target.comment.value;
// // check the both input fields have a value
// if (dynamicNameVal !== "" && dynamicComVal !== "") {
// notes.unshift({                                
//     title: dynamicNameVal,
//     content: dynamicComVal
// });
//     renderNotes();
//     event.target.reset();
//     } else {
//         alert("please enter some text");
//     }
// });


