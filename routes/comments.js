const express = require('express')
const router = express.Router()
const db = require('../db/pool_config')

// GET all 
router.get('/', async(req, res, next) => {
    try {
        let {rows} = await db.query('SELECT * FROM comments')
        res.status(200).json(rows)
    } catch (error) {
        console.log('Internal server error')
        res.status(500).json(error)
    }
})

// GET one based on user id 
router.get('/:id', async(req, res, next) => {
    try {
        const {id} = req.params
        let {rows} = await db.query('SELECT * FROM comments WHERE comment_id = $1', [id])
        res.status(200).json(rows)
    } catch (error) {
        console.log('Internal server error')
        res.status(500).json(error)
    }
})

// POST one 
router.post('', async(req, res, next) => {
    try {
        const {comment_body, trainer_id} = req.body
        // data validation
        if (typeof comment_body !== 'string' || typeof trainer_id !== 'number') {
            res.status(404).send('Bad request')
        } else {
            let {rows} = await db.query('INSERT INTO comments(comment_body, trainer_id) VALUES ($1, $2) RETURNING *', [comment_body, trainer_id])
            res.status(201).json(rows)
        }
    } catch (error) {
        console.log('Internal Server Error')
        res.status(500).json(error)
    }
})

// UPDATE one
router.patch('/:id', async(req, res, next) => {
    try {
        const {id} = req.params
        const {comment_body, trainer_id} = req.body
        if (typeof comment_body !== 'string' || typeof trainer_id !== 'number') {
            res.status(404).send('Bad request')
        } else {
            let {rows} = await db.query('UPDATE comments SET comment_body = $1, trainer_id = $2 WHERE comment_id = $3 RETURNING *', [comment_body, trainer_id, id])
            res.status(200).json(rows)
        }
    } catch (error) {
        console.log('Internal Server Error')
        res.status(500).json(error)
    }
})

// DELETE one 
router.delete('/:id', async(req, res, next) => {
    try {
        const {id} = req.params
        let {rows} = await db.query('DELETE FROM comments WHERE comment_id = $1 RETURNING *', [id])
        res.status(200).json(rows)
    } catch (error) {
        console.log('Internal Server Error')
        res.status(500).json(error)
    }
})

module.exports = router;