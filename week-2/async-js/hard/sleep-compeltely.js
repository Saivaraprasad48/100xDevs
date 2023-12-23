/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  return new Promise((resolve) => {
    const startTime = Date.now();

    while (true) {
      const currentTime = Date.now();
      if (currentTime - startTime >= milliseconds) {
        resolve(`Slept for ${milliseconds} milliseconds`);
        console.log(`Slept for ${milliseconds} milliseconds`);
        break;
      }
      // Perform some CPU-intensive operation to keep the thread busy
      // Example: A dummy loop that consumes CPU cycles
      let a = 0;
      for (let i = 0; i < 100; i++) {
        a += 1;
        console.log(a);
      }
    }
  });
}

sleep(10000);

module.exports = sleep;
