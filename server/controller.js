const goals = require('./db.json')//step 8
let globalId = 7 //step 23

//we want to export this else where so..
module.exports = { //step 9
    getGoals: (req, res) => res.status(200).send(goals),
    deleteGoal: (req, res) => { //step 11
        let index = goals.findIndex(elem => elem.id === +req.params.id) //step 12
        goals.splice(index, 1)//step 13
        res.status(200).send(goals) //step 14, now go back to index.js 
    },
    createGoal: (req, res) => { //step 17 also add in that comma before the function
        let{title, rating, imageURL} = req.body //step 18
        let newGoal = { //step 19
            id: globalId,
            title,
            rating,
            imageURL
        }
        goals.push(newGoal) //step 20
        res.status(200).send(goals) //step 21
        globalId++ //step 22 we because want to go up in increments 
        //step 23 is at the top
        //step 24 we're going back to index.js
    },//step 26 is add that comma
    updateGoal: (req, res) => { //step 27
        let { id } = req.params //step 28
        let { type } = req.body   //step 29
        let index = goals.findIndex(elem => +elem.id === +id) //we have the "+" in there to turn strings into numbers

        if (goals[index].rating === 5 && type === 'plus') {// step 30
            res.status(400).send('Priority cannot go above 5')
        } else if (goals[index].rating === 0 && type === 'minus'){
            res.status(400).send('Priority cannot go below 0')
        } else if (type === 'plus') {
            goals[index].rating++
            res.status(200).send(goals)
        } else if (type === 'minus') {
            goals[index].rating--
            res.status(200).send(goals)
        } else {
            res.sendStatus(400)
        }//after all of this go back to index.js to do step 31
    }
}


