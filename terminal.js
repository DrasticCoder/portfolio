let showDate = document.getElementById('show_date');

let d = new Date();

const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]

showDate.innerHTML = `on ${d.getHours()}:${d.getMinutes()}_${days[d.getDay()]} ${months[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`