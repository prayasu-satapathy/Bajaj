const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())

// "data": [“M”,”1”,”334”,”4”,”B”]

app.post("/bfhl", (req, res) => {
  const data = req.body.data;
  console.log(data)

  
    const alphabets = data.filter(item => typeof item === 'string' && item.length === 1);
    // const numbers = data.filter(item => typeof item === 'number' && item.length === 1);

    const numbers = data.filter(item => !isNaN(item));

    console.log(data);

    const highest_alphabet = alphabets.length > 0
    ? alphabets.reduce((a, b) => (a > b ? a : b)) : null;

res.json({
    is_success: true,
    user_id: "prayasu_sidha_satapathy_18_03_2003",
    email: "satapathyprayasu@gmail.com",
    roll_number: "RA2011027020047",
    numbers,
    alphabets,
    highest_alphabet,
  })
})

app.get("/bfhl", (req, res) => {
  res.json({ operation_code: 1 })
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000")
})
  


