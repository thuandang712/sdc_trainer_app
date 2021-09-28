const express = require('express')
const router = express.Router()
const db = require('../db/pool_config')

// GET ALL
router.get('/', async (req, res, next) => {
    try {
        const {rows} = await db.query('SELECT * FROM trainers')
        res.status(200).json(rows)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

// GET ONE ITEM
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const {rows} = await db.query('SELECT * FROM trainers WHERE trainer_id = $1', [id]);
        res.status(200).json(rows)
    } catch (error) {
        console.log('Server error', error)
        res.status(500).json(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const {picture, first_name, last_name, email, phone_number, bodybuilding, running, power_lifting, cycling, swimming} = req.body
        // add data validation
        const {rows} = await db.query('INSERT INTO trainers(picture, first_name, last_name, email, phone_number, bodybuilding, running, power_lifting, cycling, swimming) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *', [picture, first_name, last_name, email, phone_number, bodybuilding, running, power_lifting, cycling, swimming])
        res.status(201).json(rows)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const {id} = req.params
        const {rows} = await db.query('DELETE from trainers WHERE trainer_id = $1 RETURNING *', [id])
        res.status(200).json(rows)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

router.patch('/:id', async (req, res, next) => {
    try {
        const {first_name, last_name, email, phone_number, bodybuilding, running, power_lifting, cycling, swimming} = req.body
        const {id} = req.params
        // add data validation
        const {rows} = await db.query('UPDATE trainers SET first_name = $1, last_name = $2, email = $3, phone_number = $4, bodybuilding = $5, running = $6, power_lifting = $7, cycling = $8, swimming = $9 WHERE trainer_id = $10 RETURNING *', [first_name, last_name, email, phone_number, bodybuilding, running, power_lifting, cycling, swimming, id])
        res.status(200).json(rows)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

module.exports = router;