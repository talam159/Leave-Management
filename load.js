function calculateTotalDays() {
    const leaveFromDate = new Date(document.getElementById("leaveFromDate").value);
    const leaveToDate = new Date(document.getElementById("leaveToDate").value);
    
    if (leaveFromDate > leaveToDate) {
      document.getElementById("totalDays").value = "";
      alert("Leave To Date cannot be earlier than Leave From Date.");
    } else {
      const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
      const totalDays = Math.round((leaveToDate - leaveFromDate) / oneDay) + 1;
      document.getElementById("totalDays").value = totalDays;
    }
  }

  window.onload = function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("date").value = today;

    function calculateRemainingLeave() {
          // Get the input and span elements
          const enjoyedLeaveInput = document.getElementById('enjoyed-leave');
          const remainingLeaveSpan = document.getElementById('remaining-leave');
          const totalLeaveSpan = document.getElementById('total-leave');

          // Get the values of enjoyed leave and total leave
          const enjoyedLeave = parseInt(enjoyedLeaveInput.value);
          const totalLeave = parseInt(totalLeaveSpan.textContent);

          // Calculate the remaining leave
          const remainingLeave = totalLeave - enjoyedLeave;

          // Update the remaining leave span with the calculated value
          remainingLeaveSpan.textContent = remainingLeave;
      }
  };