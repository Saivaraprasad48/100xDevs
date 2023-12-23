## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function counter(seconds) {
console.log(seconds);
if (seconds > 0) {
setTimeout(function() {
counter(seconds - 1);
}, 1000);
}
}

counter(10);

(Hint: setTimeout)
