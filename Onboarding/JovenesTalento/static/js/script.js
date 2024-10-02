const monthYear = document.getElementById('monthYear');
const daysContainer = document.getElementById('days');
const eventForm = document.getElementById('eventForm');
const eventInput = document.getElementById('eventInput');
const addEventButton = document.getElementById('addEvent');
const cancelEventButton = document.getElementById('cancelEvent');

let currentDate = new Date();
let today = new Date();

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    monthYear.textContent = `${currentDate.toLocaleString('es-ES', { month: 'long' })} ${year}`;
    daysContainer.innerHTML = '';

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        daysContainer.innerHTML += '<div class="day"></div>';
    }

    for (let date = 1; date <= lastDate; date++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.textContent = date;
        dayElement.onclick = () => showEventForm(date);

        if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
            dayElement.classList.add('today');
        }

        daysContainer.appendChild(dayElement);
    }
}

function showEventForm(date) {
    eventForm.style.display = 'block';
    eventInput.dataset.date = date;
}

addEventButton.onclick = () => {
    const date = eventInput.dataset.date;
    const eventDescription = eventInput.value;
    
    if (eventDescription) {
        const dayElements = document.querySelectorAll('.day');
        const dateIndex = date - 1 + new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        
        const eventElement = document.createElement('div');
        eventElement.className = 'event';
        eventElement.textContent = eventDescription;

        dayElements[dateIndex].appendChild(eventElement);
        eventInput.value = '';
        eventForm.style.display = 'none';
    }
};

cancelEventButton.onclick = () => {
    eventInput.value = '';
    eventForm.style.display = 'none';
};

document.getElementById('prev').onclick = () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
};

document.getElementById('next').onclick = () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
};

renderCalendar();
