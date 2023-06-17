let employees = [
  {id:1, name:"john", age:"18", profession:"developer"},
  {id:2, name:"jack", age:"20", profession:"developer"},
  {id:3, name:"karen", age:"19", profession:"admin"}
];

const cardContainer = document.querySelector('#card-container');
const professionSelect = document.querySelector('#profession-select');
const filterButton = document.querySelector('#filter-button');
const addEmployeeForm = document.querySelector('#add-employee-form');

function createEmployeeCard(employee) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <p>Name: ${employee.name}</p> 
    <p>Age: ${employee.age}</p>
    <p>Profession: ${employee.profession}</p>
  `;
  return card;
}

function displayEmployees(employeesToDisplay) {
  cardContainer.innerHTML = '';
  employeesToDisplay.forEach(employee => {
    const card = createEmployeeCard(employee);
    cardContainer.appendChild(card);
  });
}

displayEmployees(employees);

filterButton.addEventListener('click', () => {
  const selectedProfession = professionSelect.value;
  if (!selectedProfession) {
    alert('Please select a profession before clicking the filter button.');
    return;
  }
  const filteredEmployees = employees.filter(employee => employee.profession === selectedProfession);
  displayEmployees(filteredEmployees);
});

addEmployeeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.querySelector('#name-input');
  const ageInput = document.querySelector('#age-input');
  const professionInput = document.querySelector('#profession-input');

  const newEmployee = {
    id: employees.length + 1,
    name: nameInput.value,
    age: ageInput.value,
    profession: professionInput.value
  };
  
  employees.push(newEmployee);
  
  nameInput.value = '';
  ageInput.value = '';
  professionInput.value = '';

  displayEmployees(employees);
});