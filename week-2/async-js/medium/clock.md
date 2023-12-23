Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

- HH:MM::SS (Eg. 13:45:23)

- HH:MM::SS AM/PM (Eg 01:45:23 PM)

function updateClock() {
const now = new Date();

// Format for 24-hour clock (HH:MM:SS)
const hours24 = ('0' + now.getHours()).slice(-2);
const minutes = ('0' + now.getMinutes()).slice(-2);
const seconds = ('0' + now.getSeconds()).slice(-2);
const time24 = hours24 + ':' + minutes + ':' + seconds;

// Format for 12-hour clock (HH:MM:SS AM/PM)
const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
const hours12 = ('0' + ((now.getHours() % 12) || 12)).slice(-2);
const time12 = hours12 + ':' + minutes + ':' + seconds + ' ' + ampm;

// Log the time in both formats to the console
console.log('24-hour format:', time24);
console.log('12-hour format:', time12);
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
