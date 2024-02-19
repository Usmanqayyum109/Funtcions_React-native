// Function to handle formatting order date
  const HandleOrderDate = date => {
    // Get the current date
    let todayDate = new Date();

    // Extract year, month, and day from the current date
    const currentYear = todayDate.getFullYear();
    const currentMonth = todayDate.getMonth() + 1; // Note: Month is zero-based
    const currentDay = todayDate.getDate();

    // Format today's date as a string
    todayDate = `${currentDay.toString().padStart(2, 0)}-${currentMonth
      .toString()
      .padStart(2, 0)}-${currentYear}`;

    // Check if the provided date is equal to today's date
    const isTodayDateEqualToDate = todayDate === date;
    console.log(todayDate, date);

    // Return 'Today' if the dates are equal, otherwise return the provided date
    return isTodayDateEqualToDate ? 'Today' : date;
  };
