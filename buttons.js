// Get the button element 
var button = document.querySelector('button'); 
 
// Add a click event listener to the button 
button.addEventListener('click', function() { 
  var result = confirm('Are you sure you want to buy this item?'); 
 
  if (result) { 
    // User clicked "OK" in the confirmation dialog 
    alert('Purchase confirmed!'); 
    // Additional code for the purchase process... 
  } else { 
    // User clicked "Cancel" in the confirmation dialog 
    alert('Purchase canceled!'); 
    // Additional code for handling cancellation... 
  } 
}); 
   
    function confirmPurchase() { 
      var result = confirm('Are you sure you want to buy this item?'); 
 
      if (result) { 
        // User clicked "OK" in the confirmation dialog 
        alert('Purchase confirmed!'); 
        // Additional code for the purchase process... 
      } else { 
        // User clicked "Cancel" in the confirmation dialog 
        alert('Purchase canceled!'); 
        // Additional code for handling cancellation... 
      } 
    };