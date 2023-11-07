const express = require("express");
const db = require("./db");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post("/register",  (req, res) => {
    
        const username = req.body["username"];
        const password = req.body["password"];
        const query = `INSERT INTO userreg (username,password) VALUES ('${username}','${password}');`
       db.query(
              query
          ).then(response=>{
            console.log(response);
          }).catch(err=>{
            console.log(err);
          })
});

app.post('/login',(req,res)=>{
  const username = req.body["username"];
  const password = req.body["password"];

  const query = `SELECT * FROM userreg WHERE username = '${username}' AND password = '${password}';`

  db.query(
    query
  ).then(response=>{
    if(response.length > 0){
      res.send(response);
    }
    else{
      res.send({message:"Wrong username/password combination"});
    }
   
  }).catch(err=>{
    res.send({err:err})
  })
})

app.listen(5000, () => {
  console.log("server running");
});
