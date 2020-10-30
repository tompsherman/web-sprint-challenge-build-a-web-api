const router = require('express').Router()

// const Action = require('./actionModel')
const Action = require('./actionModel.js')

const currentTime = new Date().toDateString()

// @desc		Test end is working
// @route		GET /test
router.get('/test', (req, res) => {
    res.status(202).json({message: 'the server is running at ' + currentTime})
})
// @desc		Get all actions
// @route		GET /
router.get('/', (req, res) => {
    Action.get()
    .then(actions => res.status(200).json(actions))
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
})
// @desc		Add a new action
// @route		POST /
router.post('/', (req, res) => {
    console.log(req.body.project_id)
    Action.insert(req.body)
    .then(action => res.status(202).json(action))
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
})
// @desc		Update a action by id
// @route		PUT /:id
router.put('/:id', (req, res) => {
    Action.update(req.params.id, req.body)
        .then(action => res.status(202).json(action))
        .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
})
// @desc		Remove a action by id
// @route		DELETE /:id
router.delete('/:id', (req, res) => {
    Action.remove(req.params.id)
    .then(()=>{res.status(200).json({message: "Shaniqua don't act here no moe"})})
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
})

module.exports = router