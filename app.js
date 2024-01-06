const express = require('express')
const app = express()
const port = 30002


app.listen(port, () => {
    console.log(`nodemailerProject is listening at http://localhost:${port}`)
})


const nodemailer = require('nodemailer');

app.post('/form', (req, res) => {
    let data = req.body

    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'promisetshegofatsom@gmail.com',
            pass: 'zlfd xvcs sagv vxai'
        }
    });


    let mailDetails = {
        from: 'promisetshegofatsom@gmail.com',
        to: 'tshegofatsopromise362@gmail.com',
        subject: `Registration for a learner from ${data.name}`,
        html: `
                <h3>Registration Information</h3>
         <ul>
                <li> Full Names: ${data.fullNames}</li>
                <li> Surname: ${data.surname}</li>
                <li> Email: ${data.email}</li>

    
        </ul>
    
    
    `
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log('Error Occurs');
            console.log(err);
        } else {
            console.log('Email sent successfully');
        }
    });



})





