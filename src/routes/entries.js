const router = require("express").Router()
const Entry = require('../models/Entry')
const mongoose = require('mongoose')



//get all the entries
router.get('/', async (req, res) => {

    try{
        const allEntries = await Entry.find()

        //reverse order to get lastest first
        allEntries.reverse()
        res.status(200).json(allEntries)

    }catch(e){
        res.status(500).json(e)

    }
  

})

//create Entry
router.post('/new', async (req, res) => {

    const newEntry = new Entry

    try {

        newEntry.title = req.body.title;
        newEntry.author = req.body.author;
        newEntry.content = req.body.content;

        await newEntry.save()
        res.status(201).json(newEntry)

    } catch (e) {

        console.log(e)
        res.status(500).json(e)
    }
})

//get entry by ID
router.get('/search/:id', async (req, res) => {

    try {
        //verify if is the ID is valid
        if (await mongoose.isValidObjectId(req.params.id)) {

            const entryToFind = await Entry.findById(req.params.id)

            if (!entryToFind) {
                res.status(404).json("ID not Found")
            }
            res.status(200).json(entryToFind)


        }else{

            res.status(400).json('invalid ID')

        }


    } catch (e) {
        res.status(500).json(e)
        console.log(e)
    }

})


module.exports = router