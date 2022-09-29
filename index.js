<!--./index.js-->


var classA = true;
var classB = true;
var classC = true;
var classD = true;
var special = false;

// Function to get checkbox values
function validate() {
    if (document.getElementById('a-cars').checked) {
        classA = true;
    } else {
        classA = false;
    }
    if (document.getElementById('b-cars').checked) {
        classB = true;
    } else {
        classB = false;
    }
    if (document.getElementById('c-cars').checked) {
        classC = true;
    } else {
        classC = false;
    } 
    if (document.getElementById('d-cars').checked) {
        classD = true;
    } else {
        classD = false;
    } 
    if (document.getElementById('special-cars').checked) {
        special = true;
    } else {
        special = false;
    } 
};
console.log(special);

// Function to retrieve the car json file

async function getCars() {
    let url = './cars.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

// Function to create an array of cars. -> Filters still don't work properly

async function renderCars() {

    let cars = await getCars();
    let filteredCars = [];
    let numCars = 0;
    let html = '';
    validate();

    //Logic goes through every car in the JSON and checks it against the selected checkboxes from the HTML
    cars.forEach(car => { 
        if ((((classA === true && car.class === ("A"))) && ((special === false && car.specialVehicle === ("N")))) ||
        (((classA === true && car.class === ("A"))) && ((special === true))) ||
        (((classB === true && car.class === ("B"))) && ((special === false && car.specialVehicle === ("N")))) ||
        (((classB === true && car.class === ("B"))) && ((special === true))) ||
        (((classC === true && car.class === ("C"))) && ((special === false && car.specialVehicle === ("N")))) ||
        (((classC === true && car.class === ("C"))) && ((special === true))) ||
        (((classD === true && car.class === ("D"))) && ((special === false && car.specialVehicle === ("N")))) ||
        (((classD === true && car.class === ("D"))) && ((special === true))))
        {
            var tempCar = (car.index); // Adds any cars that meet the above criteria to a list
            filteredCars.push((tempCar));
            console.log(car.specialVehicle);
        };
    numCars = filteredCars.length; // Counts how many cars have met the criteria

    });


// Choosing a random number car from the array
chosenCar = ((Math.floor(Math.random() * (numCars+1))));


//Assigning the elements to the HTML page
document.getElementById("nameHTML").innerHTML = (cars[chosenCar].name);
document.getElementById("summaryHTML").innerHTML = (cars[chosenCar].summary);
document.getElementById("baseHPHTML").innerHTML = (cars[chosenCar].baseHP);
document.getElementById("accelerationHTML").innerHTML = (cars[chosenCar].acceleration);
document.getElementById("topSpeedHTML").innerHTML = (cars[chosenCar].topSpeed);
document.getElementById("corneringHTML").innerHTML = (cars[chosenCar].cornering);
document.getElementById("strengthHTML").innerHTML = (cars[chosenCar].strength);
document.getElementById("carImageHTML").src = ("./wreckfest_cars/"+cars[chosenCar].carImage);


}

//renderCars();

// async function getCars() {
//     let url = './cars.json';
//     try {
//         let res = await fetch(url);
//         return await res.json();
//     } catch (error) {
//         console.log(error);
//     }
// }

// async function renderCars() {
//     let cars = await getCars();
//     let html = '';
//     let filteredCars = '';
//     cars.forEach(car => {
//         let htmlSegment = `<div class="user">
//                             <h2>${car.Index} ${car.Name}</h2>
//                         </div>`;

//         html += htmlSegment;
//     });

//     let container = document.querySelector('.container');
//     container.innerHTML = html;
// }

// renderCars();