const express = require("express");
const cors = require("cors");
const { connection } = require("./Config/db");
const { userRouter } = require("./Routes/user.routes");
require("dotenv").config()
const port =process.env.port
const { bookRouter } = require("./Routes/book.router");
// require('dotenv').config()
const app = express();
app.use(express.json());
app.use(cors());
// const nodeMailer = require('nodemailer')

// const html =`
//     <h1>Hi</h1>
//     <p>node mailer</p>
// `;
// const emails=[
//     'nikhilwalwatkar81@gmail.com','sammyak.deosale.1@gmail.com'
// ]
// async function main(){
//    const transporter = nodeMailer.createTransport({
//         host:'sammyakdeosaleverify@gmail.com',
//         port:465,
//         secure:true,
//         auth:{
//             user:'sammyakdeosaleverify@gmail.com',
//             pass:'sammyak123'
//         }
//     })
//    const info = await transporter.sendMail({
//         from:'sammyak <sammyakdeosaleverify@gmail.com>',
//         to:emails,
//         subject:'testing mail verification',
//         html:html
//     })

//     console.log("msg sent:"+info.messageId);
//     console.log(info.accepted)
//     console.log(info.rejected)

// }
// main()
// .catch((e)=>console.log(e))

app.use(express.json());
app.use("/books", bookRouter);
app.use("/users", userRouter);

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(port, async (req, res) => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (err) {
    console.log(err);
  }
  console.log(`Running on port ${port}`);
});
