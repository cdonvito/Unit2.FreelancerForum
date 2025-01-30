//starting freelancer array with at least 2 objects [{name: 'Sam', occupation: 'Programmer', price: 50}]

const freelancers = [
  { name: "Eva", occupation: "Mentor", price: 80 },
  { name: "Chuck", occupation: "Tax Consultant", price: 50 },
];


//array of names

const nameList = [
  "Craig",
  "Charles",
  "Emma",
  "Fiona",
  "George",
  "Hannah",
  "Issac",
  "Jack",
  "Katie",
  "Mia",
  "Olivia",
  "Nathan",
  "Atlas",
  "Paul",
  "Quinn",
  "Ryan",
  "Sophia",
  "Thomas",
  "Victor",
  "Madie",
];

//array of occupations

const jobList = [
  "Engineer",
  "Architect",
  "Scientist",
  "Doctor",
  "Artist",
  "Chef",
  "Musician",
  "Lawyer",
  "Journalist",
  "Plumber",
  "Accountant",
  "Pilot",
  "Mechanic",
  "Dog Trainer",
  "Graphic Designer",
  "Actor",
  "Psychologist",
  "Photographer",
  "Librarian",
  "Project Manager",
];

/**
 * create init function
 *
 *      1. select freelancer_container from DOM
 *      2. create DOM elements
 *          - table
 *          - thead
 *              - tr (header row)
 *          - tbody
 *      3. Add text to the header row where the text matches the object key of a freelancer
 *      4. Append header row to the thead
 *      5. Append thead and tbody to table
 *      6. Append table to freelancer_container
 *      7. Call the function created below to render the freelancer array
 *      8. Call the function created below to render the average price
 *
 */

function init() {
  const root = document.querySelector(".freelancer_container");

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const header_row = document.createElement("tr");

  for (let key in freelancers[0]) {
    const th = document.createElement("th");
    th.textContent = key;

    header_row.append(th);
  }

  thead.append(header_row);
  table.append(thead);
  table.append(tbody);

  if (!root) {
    console.error("Element with class .freelancer_container not found.");
    return;
  }

  root.append(table);
  
  renderFreelancer();
}

/**
 * Create function to render the freelancer array to the DOM
 *
 *      1. select tbody from DOM
 *      2. map over freelancer array
 *          2-1. create elements
 *              - tr
 *              - td (name)
 *              - td (occupation)
 *              - td (starting price)
 *          2-2. Add text to each td representing the value of the freelancer object
 *          2-3. Append tds to tr
 *          2-4. return tr
 *      3. replace children of tbody with the elements created in the map
 */

function renderFreelancer() {
  const freelancerTable = document.createElement("tbody");

  const freelancerElements = freelancers.map((freelancer) => {
    const row = document.createElement("tr");

    const freelancer_name = document.createElement("td");
    freelancer_name.textContent = freelancer.name;

    const freelancer_occupation = document.createElement("td");
    freelancer_occupation.textContent = freelancer.occupation;

    const freelancer_price = document.createElement("td");
    freelancer_price.textContent = freelancer.price;

    row.append(freelancer_name, freelancer_occupation, freelancer_price);

    return row;
  });

  freelancerTable.replaceChildren(...freelancerElements);
}

/**
 * Create a function to render the average freelancer price to the DOM
 *
 *      1. get average_price span and p tag from DOM
 *      2. call sum function with the freelancer array
 *      3. call avg function passing the calculated sum and the freelancer array
 *      4. update textContent of the span with the avg
 *          - if textContent doesn't work use innerHTML
 *      5. replace children of p tag with the updated span
 */

/**
 * Create function to sum all prices in our freelancer array
 */
function sum(freelancers) {
  //total price
  let sum = 0;
  for (i=0; i<freelancers.length; i++) {
    let currentPrice = freelancers[i].price;
    sum += currentPrice;
    console.log(i);
  }
  
  console.log(sum);
  return sum;
}

/**
 *
 * Function to get average of given price with array
 *
 * @param {Number} totalPrice
 * @param {Array} arr
 * @returns Number
 */
function avg(totalPrice, arr) {
  return totalPrice / arr.length;
}

/**
 * Create a function to add a new freelancer to the freelancer array
 *
 *      1. create variable for the new freelancer object
 *      2. set the name value of our new freelancer to a random name selected from our names array
 *      3. set the occupation value of our new freelancer to a random occupation selected from our occupations array
 *      4. generate random price for new freelancer
 *
 * new_freelancer --> {name: 'Alex', occupation: 'writer', price: 75 }
 *
 *      5. add new freelancer to the freelancers array
 *      6. Call the function created above to render the freelancer array
 *      7. Call the function created above to render the average price
 *
 */

const addFreelancer = () => {
  const new_name = nameList[Math.floor(Math.random() * nameList.length)];
  const new_occupation = jobList[Math.floor(Math.random() * jobList.length)];;
  const new_price = Math.floor(Math.random() * (140 - 20) + 20);
  
  console.log(new_name);
  console.log(new_occupation);
  console.log(new_price);
}



//setInterval calling the function that adds a new freelancer every second aka 1000 miliseconds

//call init function

init();
addFreelancer();
sum(freelancers);
