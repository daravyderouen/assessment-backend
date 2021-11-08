//this document speaks to the backend

const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

//let image = document.querySelector("#cookie)



  app.get("/api/fortunes", (req, res) => {
    const fortunes = ["A faithful friend is a strong defense.",
             "A lifetime friend shall soon be made.",
             "A smile is your personal welcome mat.",
             "Courtesy is contagious.",
             "Do not let ambitions overshadow small success.",
             "Don’t just spend time. Invest it."
    ];
  
    // choose random compliment
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];
  
    res.status(200).send(randomFortune);
    
  });



  const {getGoals, deleteGoal, createGoal, updateGoal} = require('./controller.js')//step 9 //step 15 delete movie is added inside of the brackets //step 24 adds createMovies to const //step 31 is adding in update movie to const

  app.get(`/api/goals`, getGoals)//step 10
  //step 11 is writing delete and in the controller file
  app.delete(`/api/goals/:id`, deleteGoal) //step 16
  
  //step 17 go back in controller js 
  //step 24 adds createMovie inside const
  app.post(`/api/goals`, createGoal)//step 25 
  
  //step 26 go back into controller.js
  
  app.put(`/api/goals/:id`, updateGoal)

app.listen(4000, () => console.log("Server running on 4000"));
