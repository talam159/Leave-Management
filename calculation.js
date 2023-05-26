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
    remainingLeave = Math.max(remainingLeave, 0);
    

    // Update the remaining leave span with the calculated value
    remainingLeaveSpan.textContent = remainingLeave;
}

function calculateRemainingSickLeave() {
    // Get the input and span elements
    const enjoyedLeaveInput = document.getElementById('enjoyed-sick-leave');
    const remainingLeaveSpan = document.getElementById('remaining-sick-leave');
    const totalLeaveSpan = document.getElementById('total-sick-leave');

    // Get the values of enjoyed leave and total leave
    const enjoyedLeave = parseInt(enjoyedLeaveInput.value);
    const totalLeave = parseInt(totalLeaveSpan.textContent);

    // Calculate the remaining leave
    const remainingLeave = totalLeave - enjoyedLeave;
    

    // Update the remaining leave span with the calculated value
    remainingLeaveSpan.textContent = remainingLeave;
}