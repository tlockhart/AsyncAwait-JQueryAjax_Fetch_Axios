//JQUERY AJAX: http://api.jquery.com/jQuery.ajax/

// information to reach API
const apiKey = '79a2fe0054b34bf6b0523e031c66f776';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
// Code goes here
const shortenUrl = async () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try {
    await $.ajax({
    method: "POST",
    url: url,
    data: data,
    headers: {
          'Content-type': 'application/json',
          'apikey': apiKey,
        }
    })
    .done((jsonResponse) => {
      renderResponse(jsonResponse)
    });
  }//try
  catch(error) {
    console.log(error);
  }//catch
};

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
};

shortenButton.addEventListener('click', displayShortUrl);

//Boiler Plate
// const getData = async () => {
//     try {
//       const response = await fetch('https://api-to-call.com/endpoint', {
//         method: 'POST',
//         body: JSON.stringify({id: 200})
//       });
//       if(response.ok) {
//         const jsonResponse = await response.json();
//         return jsonResponse;
//       }
//       throw new Error('Request failed!');
//     }
//     catch(error) {
//       console.log(error)
//     }
//   }