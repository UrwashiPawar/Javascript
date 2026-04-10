const dat = document.getElementById("date");
const mon = document.getElementById("month");
const yer = document.getElementById("year");
const d = document.getElementById("day");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month =["jan","feb","mar","April","may","june","july","aug","sep","oct","nov","dec",]



setInterval(() => {
    const date = new Date();
    dat.textContent = date.getDate()+":";
    mon.textContent= month[date.getMonth()]+":";
    yer.textContent= date.getFullYear()+"/";
    d.textContent=days[date.getDay()]
  

},1000);

  






function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;

    // Add leading zero
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    document.getElementById("ampm").innerText = ampm;
}

// Run every second
setInterval(updateClock, 1000);

// Run immediately
updateClock();

