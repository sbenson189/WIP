// curl -i https://hack-or-snooze.herokuapp.com/stories
pageContentTable = document.querySelector("#pageContentTable")
favoriteStar = document.querySelector("favoriteStar")

// Jobs Link Click Event
jobsLink = document.querySelector("#jobs")
jobsClick = jobsLink.addEventListener("click", async (event) => {
    event.preventDefault()
    alert(`"I don't have a job for you, so here's a joke instead: ${await JokeFunction()}"`)
})

// Retrieves a random joke from the Geek-Jokes API for use in the jobsClick function alert.
JokeFunction = async () => { 
    response = await axios.get("https://geek-jokes.sameerkumar.website/api?format=json")
    return response.data.joke
}

populateStories = async () =>{
   response = await axios.get("https://hack-or-snooze.herokuapp.com/stories")
   results = Array.from (response.data.stories)
   count = 1
   for (let index = 0; index < results.length; index++) {
       storyTR = document.createElement("TR")
       stories = storyTR.innerText = `${count}. ${response.data.stories[index].title} ${response.data.stories[index].author}  `
       pageContentTable.append(storyTR)
       count++
        
       a = document.createElement('a')
       linkText = document.createTextNode(`${response.data.stories[index].url}`)
       a.appendChild(linkText)
       a.title = "storyLink"
       a.href = `${response.data.stories[index].url}`
       pageContentTable.append(a)
       storyTR.innerText = stories
       a.classList.add("storyLink")
   }
}
populateStories()


signUpModal.addEventListener("submit", (event) => {
    
    signUpName = document.querySelector("#signUpName").value
    signUpUsername = document.querySelector("#signUpUsername").value
    signUpPassword = document.querySelector("#signUpPassword").value
    
    // sendPost = axios.post("https://hack-or-snooze.herokuapp.com/users",
    // body = {
    //     "user": {
    //         "name": `${signUpName}`,
    //         "username": `${signUpUsername}`,
    //         "password": `${signUpPassword}`
    //       }
    // })

signup(`${signUpName}`,`${signUpUsername}`,`${signUpPassword}`)

})
signUp = (name, username, password) => {
    sendPost = axios.post("https://hack-or-snooze-v3.herokuapp.com/users",
    body = {
        "user": {
            "name": name,
            "username": username,
            "password": password
          }
    })
    console.log(sendPost)
}





// -- Log In & Sign Up Modals --
modalContainer = document.querySelector("#modalContainer")
headerLogInButton = document.querySelector("#headerLogInButton")
// Log In Selectors
logInModal = document.querySelector("#logIn-modal")
logInButton = document.querySelector(".modalLogIn")
// Sign Up Selectors
signUpModal = document.querySelector("#signUpModal")
modalSignUp = document.querySelector(".modalSignUp")
signUpButton = document.querySelector(".modalSignUp")
headerSignUpButton = document.querySelector("#headerSignUpButton")
// Close Modal Button Selectors
loginCloseBtn = document.querySelector("#loginCloseBtn")
signUpCloseBtn = document.querySelector("#signUpCloseBtn")

// Nav Bar Event listener to display the Log In modal
headerLogInButton.addEventListener("click", (event) => {
    if (event.target === headerLogInButton) {
        event.preventDefault()
        logInModal.style.display = "block"
        signUpModal.style.display = "none"
    }
    closeButtonFunction()
})

// Nav Bar Event listener to display the Sign In modal
headerSignUpButton.addEventListener("click", (event) => {
    if (event.target === headerSignUpButton) {
        event.preventDefault()
        signUpModal.style.display = "block"
        logInModal.style.display = "none"   
    }
    closeButtonFunction()
})

// Modal Close - Closes repsective modals when close button is clicked
function closeButtonFunction () {
    loginCloseBtn.onclick = () => {    
    logInModal.style.display = "none" 
    signUpModal.style.display = "none"
    
}
    signUpCloseBtn.onclick = () => {    
    signUpModal.style.display = "none"
    logInModal.style.display = "none"
}
}


// user collection: https://hack-or-snooze-v3.herokuapp.com/users
// singular user: https://hack-or-snooze-v3.herokuapp.com/users/{username}

// story collection: https://hack-or-snooze-v3.herokuapp.com/stories
// singular story user: https://hack-or-snooze-v3.herokuapp.com/users/stories/{storyId}

// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ…3NzB9.aP3zgUEvJhnkeqYTwOuqQbOK2ybveWo688s8eob4dME"