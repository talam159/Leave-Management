// const puppeteer = require('puppeteer');

// async function generatePDF() {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.setContent(`
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <title>Leave Application Form</title>
//       <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.7/dist/tailwind.min.css" rel="stylesheet">
//       <style>
//         /* Additional CSS styles specific to your PDF layout can be added here */
//       </style>
//     </head>
//     <body>
//       <!-- Your HTML content goes here -->
//       <!-- ... -->
//     </body>
//     </html>
//   `);

//   await page.pdf({ path: 'output.pdf', format: 'A4' });

//   await browser.close();
// }

// generatePDF();
