//keypress ng textfield

var firstname = document.getElementById("txtfirstname");

firstname.addEventListener("keyup", event => {
    //condition
    if(event.keyCode === 13) {
        $('#onsave').click(); //jquery way
    }
})

//localstorage. 

$('#onsave').click(() => {
    var simpleArray = {
        'data1' : firstname.value
    }
    validate(simpleArray);
})

const validate = (array) => {
    if(!array.data1) { //true
        alert("Empty field");
        return false;
    } else{
        savelocalstorage(array);
    }
}

const savelocalstorage = (cokearray) => {
    alert("Successfully Save!");
    localStorage.setItem("mystorage", JSON.stringify(cokearray));
}

$('#onget').click(() => {
    var detection = localStorage.getItem("mystorage");
    if(detection == null) {
        alert("There is no storage named mystorage");
        return false;
    } 
    else{
        console.log(detection);
    }
})

$('#onremove').click(() => {
    alert("Successfully Clear");
    localStorage.clear();
})

$('#onremoveitem').click(() => {
   var myinput = document.getElementById("txtstorage").value;
   
   if(localStorage.getItem(myinput) == null) {
       alert("not exist");
       return false;
   }
   else {
       localStorage.removeItem(myinput);
       alert("Successfully Removed!");
   }
})