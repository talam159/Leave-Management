// function generatePDF() {
//     // Get form input values
//     // var date = document.getElementById('date').value;
//     var name = document.getElementById('fullName').value;
//     var designation = document.getElementById('designation').value;
//     var department = document.getElementById('department').value;
//     var concern = document.getElementById('concern').value;
//     var employeeId = document.getElementById('idNumber').value;
    
//     // Create a new jsPDF instance
//     var doc = new jsPDF();
    
//     // Set the content of the PDF
//     // doc.text('Date: ' + date, 10, 10);
//     doc.text('Name: ' + name, 10, 10);
//     doc.text('Designation: ' + designation, 10, 10);
//     doc.text('Department: ' + department, 10, 10);
//     doc.text('ceoncern: ' + concern, 10, 10);
    
    
//     // Save the PDF
//     doc.save('output.pdf');
//   }
function formatDate() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1; // Months are zero-based, so we add 1
    var year = today.getFullYear();
    
    // Pad the day and month with leading zeros if necessary
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    
    var formattedDate = day + '/' + month + '/' + year;
    document.getElementById('formatted-date').textContent = formattedDate;
    return formattedDate;
  }
function generatePDF() {
    // Get form input values
    var date= formatDate();
    var name = document.getElementById('fullName').value;
    var designation = document.getElementById('designation').value;
    var department = document.getElementById('department').value;
    var concern = document.getElementById('concern').value;
    var employeeId = document.getElementById('idNumber').value;
    var leaveType = document.querySelector('input[name="leaveType"]:checked').value;
    var reasonDropdown= document.getElementById('reason');
    var reason= reasonDropdown.value;
    var comments= document.getElementById('comments').value;
    var leaveFrom=document.getElementById('leaveFromDate').value;
    var leaveFromDate=convertDateFormat(leaveFrom);
    var leaveTo=document.getElementById('leaveToDate').value;
    var leaveToDate=convertDateFormat('leaveTo');


  
    // Create the HTML content for the PDF
    var content = '<h2 class="text-2xl font-bold text-center mt-6 mb-2">Relief Validation - Leave Request</h2>' +
    `<div class="mb-6 ml-9">
        <label class="block text-sm font-medium text-gray-700">Date</label>
        <p class="text-lg font-medium text-gray-800" >`+date+`</p>
    </div>`+

    `<div class="mb-2 ml-16">
        <label class="block text-sm font-medium text-gray-500">Name</label>
        <p class="text-lg font-medium text-gray-800" >`+name+`</p>
    </div>`+

    `<div class="mb-2 ml-16">
        <label class="block text-sm font-medium text-gray-500">Designation</label>
        <p class="text-lg font-medium text-gray-800" >`+designation+`</p>
    </div>`+

    `<div class="mb-2 ml-16">
        <label class="block text-sm font-medium text-gray-500">Department</label>
        <p class="text-lg font-medium text-gray-800" >`+department+`</p>
    </div>`+

    `<div class="mb-2 ml-16">
        <label class="block text-sm font-medium text-gray-500">ID No:</label>
        <p class="text-lg font-medium text-gray-800" >`+employeeId+`</p>
    </div>`+


    `<div class="mb-2 ml-16">
        <label class="block text-sm font-medium text-gray-500">Concern</label>
        <p class="text-lg font-medium text-gray-800" >`+concern+`</p>
    </div>`+

    `<div class="mb-2 ml-16">
        <label class="block text-sm font-medium text-gray-500">Leave Type</label>
        <p class="text-lg font-medium text-gray-800" >`+leaveType+` Leave</p>
    </div>`+
    `<div class="mb-2 ml-16">
        <label class="block text-sm font-medium text-gray-500">Reason</label>
        <p class="text-lg font-medium text-gray-800" >`+reason+`</p>
    </div>`+

    `<div class="mb-2 ml-16">
        <label class="block text-sm font-medium text-gray-500">Comments</label>
        <p class="text-lg font-medium text-gray-800" >`+comments+`</p>
    </div>`+

    `<div class="mb-2 ml-16">
        <label class="block text-sm font-medium text-gray-500">Leave From</label>
        <p class="text-lg font-medium text-gray-800" >`+leaveFromDate+`</p>
    </div>`+

    
    // '<p class="ml-10"><strong>Date:</strong> ' + date + '</p>' +
      '<p class="ml-14"><strong>Name:</strong> ' + name + '</p>' +
      '<p><strong>Designation:</strong> ' + designation + '</p>' +
      '<p><strong>Department:</strong> ' + department + '</p>';
  
    // Set the options for html2pdf
    var options = {
        filename: 'output.pdf',
        // image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
          text_rendering: 'display',
          pdfOutputIntent: false, // Ensure selectable and copyable text
        },
    };
  
    // Generate the PDF
    html2pdf().from(content).set(options).save();
  }
  