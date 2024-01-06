const express = require('express');
const bodyParser = require('body-parser')
const nodeMailer = require('nodemailer')
const cors = require('cors')

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.post('/api/forma', (req, res) => {
    let data = req.body
    let smptTransport = nodeMailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: 'promisetshegofatsom@gmail.com',
            pass: '0715018421'
        }
    })


    let mailOptions = {
        from: data.email,
        to: 'promisetshegofatsom@gmail.com',
        subject: `Registration for a learner from ${data.name}`,
        html: `
    <h3>Registration Information</h3>
    <ul>
    <li> Full Names: ${data.name}</li>
    <li> Full Surname: ${data.surname}</li>
    <li> Email: ${data.email}</li>

    
    </ul>
    
    
    `
    }

smptTransport.sendMail(mailOptions, (error, response) =>{
if(error){
    res.send(error)
} else{
    res.send('success')
}
})
smptTransport.close()
})

