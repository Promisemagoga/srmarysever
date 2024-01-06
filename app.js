const express = require('express')
const app = express()
const port = 30002


app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
})


const nodemailer = require('nodemailer');

app.post('/api/forma', (req,res) =>{
	let data = req.body
	let mailTransporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'promisetshegofatsom@gmail.com',
			pass: 'zlfd xvcs sagv vxai'
		}
	});



let mailDetails = {
	from: data.email,
	to: 'tshegofatsopromise362@gmail.com',
	subject: `Registration for a learner from ${data.name}`,
	text: "testing nodemailer if it's working",
    html: `
    <h3>Registration Information</h3>
    <ul>
    <li> Full Names: ${data.name}</li>
    <li> Full Surname: ${data.surname}</li>
    <li> Email: ${data.email}</li>

    
    </ul>
    `

	
};

mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log('Error Occurs');
      console.log(err);
      res.status(500).send('Error Occurs'); // Send an error response
    } else {
      console.log('Email sent successfully');
      res.status(200).send('Email sent successfully'); // Send a success response
    }
    mailTransporter.close(); // Close the transporter
  });

})





