//Requiring express and creating a router
const express = require('express')
const router = express.Router()


//Import User & Show model from database
const { User, Show } = require('../models/index.js')

//Gets all the users within the database
router.get('/', async function (req, res) {
        const allUsers = await User.findAll()
       res.send(allUsers)

});

router.get('/:userId', async function (req, res) {

    const findUser = await User.findByPk(req.params.userId);
    if(findUser){
        res.send(findUser)
    }
    else{
        res.status(404).send({error: "Not Found"})
    }
 
})

router.get('/:userId/shows', async function (req, res) {
    const user = await User.findByPk(req.params.userId);
    if(user){
        const shows = await user.getShows()
        res.send(shows)
    }
    else{
        res.join([])
    }

})

router.put('/:userId/shows/:showId', async function (req, res) {

const user = await User.findByPk(req.params.userId)
const show = await Show.findByPk(req.params.showId)

// add this show to list of shows user has watched

await user.addShow(show)
const shows = await user.getShows()
res.send(shows)
})

module.exports = router 