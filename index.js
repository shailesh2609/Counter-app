const countValue = document.querySelector("#counter");
// const pos = document.querySelector("#posButton");
// const neg = document.querySelector("#negButton");

// M1 : Using onclick attribute of button
const decrement = ()=> {
    // get the value from UI
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value - 1;     //string - number = number  (Numeric subtraction)
    //set the value onto UI
    countValue.innerText = value;
}


const increment = ()=> {
    // get the value from UI
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value + 1;     //string + number = string (Concatenation)
    //set the value onto UI
    countValue.innerText = value;
}



// M2:  Using Event Listeners 
//      neg.addEventListener('click', function() {
//          // get the value from UI
//          let value = parseInt(countValue.innerText);
//          //Update the value
//          value = value - 1;
//          //set the value onto UI
//          countValue.innerText = value;
//      })
     
//      pos.addEventListener('click', function() {
//          // get the value from UI
//          let value = parseInt(countValue.innerText);
//          //Update the value
//          value = value + 1;
//          //set the value onto UI
//          countValue.innerText = value;
//      })

