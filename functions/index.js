const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp(); // Initialize the Firebase Admin SDK


//This line exports the Cloud Firestore trigger function named sendEmailOnDocumentCreate. 
//This is the function that will be executed when a new document is created in the specified Firestore collection.
exports.sendEmailOnDocumentCreate = functions.firestore
  .document('forms/{formId}') // Replace 'forms' with your collection name
  .onCreate(async (snapshot, context) => {
    const formData = snapshot.data(); // Retrieve the form data from the created document

    // Send the email
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: ' ',
        pass: ' '
      }
    });

    const mailOptions = {
      from: formData.email,
      to: 'donraburu675@gmail.com',
      subject: formData.subject,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Subject: ${formData.subject}
        Message: ${formData.message}
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  });

