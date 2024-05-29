// To Show that all files are connected and running properly:
console.log("Connected...Running...");

// Fuction to search Events and Concerts using the artist / band the User inputted: 
function searchEvents(){
    
    // Message signaling that the button has been clicked and the function should be running:
    console.log("Event Search Function should be running...");
    console.log("--------------------------------");

    // Declaration of Variables: 
    const artistDesired = document.querySelector('.artist');
    console.log("Artist Inputted: " + artistDesired.value); // Displays the Artist Inputted in the Console.

    const apikey = "SGWzk7825DDCSni6jJBxXC9T2nyEe0cK";

    // Calling the API: 
    fetch('https://app.ticketmaster.com/discovery/v2/events.json?keyword='+artistDesired+'&source=universe&countryCode=US&apikey='+apikey)
    .then(function(reponse){
            console.log(reponse);
    })
}

