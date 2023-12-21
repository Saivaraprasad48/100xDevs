function dateMethods() {
  // Getting the current date
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  // Creating a new date
  const newDate = new Date(2023, 8, 15);
  console.log("New Date:", newDate);

  // Methods:

  // 1. getDate() - Get the day of the month (1-31) for the specified date.
  console.log("Day of the month:", currentDate.getDate());

  // 2. getMonth() - Get the month (0-11) for the specified date.
  console.log("Month:", currentDate.getMonth());

  // 3. getFullYear() - Get the year (four digits) for the specified date.
  console.log("Year:", currentDate.getFullYear());

  // 4. getHours() - Get the hour (0-23) for the specified date.
  console.log("Hours:", currentDate.getHours());

  // 5. getMinutes() - Get the minutes (0-59) for the specified date.
  console.log("Minutes:", currentDate.getMinutes());

  // 6. getSeconds() - Get the seconds (0-59) for the specified date.
  console.log("Seconds:", currentDate.getSeconds());

  // 7. getDay() - Get the day of the week (0-6) for the specified date.
  console.log("Day of the week:", currentDate.getDay());

  // 8. toDateString() - Get a human-readable string representing the date portion.
  console.log("Date string:", currentDate.toDateString());

  // 9. toTimeString() - Get a human-readable string representing the time portion.
  console.log("Time string:", currentDate.toTimeString());

  // 10. toISOString() - Get a string in ISO format (YYYY-MM-DDTHH:mm:ss.sssZ).
  console.log("ISO String:", currentDate.toISOString());
}

// Example Usage for Date Methods
dateMethods();
