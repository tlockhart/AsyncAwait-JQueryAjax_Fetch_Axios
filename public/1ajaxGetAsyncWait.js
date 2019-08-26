//JQUERY AJAX: http://api.jquery.com/jQuery.ajax/

// Information to reach API
const url = 'https://api.datamuse.com/words?';
//Find nounds that the describe the wordy entered
const queryParams = 'rel_jja=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
// Code goes here
const getSuggestions = async  () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  try{
    await $.get(endpoint, (response) => {
      console.log("1 Returned");
      renderResponse(response);
    });
  }
  catch(error) {
    console.log(error);
  }//catch
  console.log("2 Returned");
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  console.log("button clicked");
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);
//Boiler Plate:
// const getData = async () => {
//     try {
//       //save the response of the endpoint once that info has been sent back
//       const response = await fetch('https://api-to-call.com/endpoint');
//       if(response.ok) {
//         const jsonResponse = await response.json();
//         return jsonResponse;
//       }
//       throw new Error('Request failed!');
//     }
//     catch (error) {
//       console.log(error)
//     }
//   }