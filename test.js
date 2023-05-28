function convertDateFormat(dateString) {
  var parts = dateString.split("-");
  var year = parts[0];
  var month = parseInt(parts[1], 10);
  var day = parseInt(parts[2], 10);

  // Define an array of month names
  var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Create a Date object with the provided year, month (minus 1 since it's zero-based), and day
  var date = new Date(year, month - 1, day);

  // Get the month name from the monthNames array
  var monthName = monthNames[date.getMonth()];

  // Concatenate the day, month name, and year
  var formattedDate = day + " " + monthName + " " + year;
  return formattedDate;
}


    