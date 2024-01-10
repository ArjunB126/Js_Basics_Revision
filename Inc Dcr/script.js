
const countValue = document.querySelector('#counter');


const increment = () =>{

    // Getting Vaalue From Ui

    let value =  parseInt(countValue.innerText); 

    // Updating The Value
    value = value + 1;

    // Set the Value On UI
    countValue.innerText = value;

};

const decrement  = () =>{

    // Getting Vaalue From Ui

    let value =  parseInt(countValue.innerText); 

    // Updating The Value
    value = value -  1;
    
    // Set the Value On UI
    countValue.innerText = value;

};