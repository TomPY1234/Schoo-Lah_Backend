const feesModel = require('../models/fees_models')
const express = require('express')
const router = express.Router()

// Get all fees
router.get('/', async (req, res, next) => {
    try {
        const result = await feesModel.get()
        return res.json(result)
    }
    catch (e) {
        return next(e)
    }
})

// Get one fees
router.get('/:id', async (req, res, next) => {
    try {
        const result = await feesModel.getById(req.params.id)
        if (!result) return res.sendStatus(404)
        return res.json(result)
    }
    catch (e) {
        return next(e)
    }
})

// Create a new fees
router.post('/', async (req, res, next) => {
    try {
        const result = await feesModel.create(req.body)
        if (!result) return res.sendStatus(409)
        return res.status(201).json(result)
    }
    catch (e) {
        return next(e)
    }
})

// Delete a fees
router.delete('/:id', async (req, res, next) => {
    try {
        const result = await feesModel.delete(req.params.id)
        if (!result) return res.sendStatus(404)
        return res.sendStatus(200)
    }
    catch (e) {
        return next(e)
    }
})

// Update a fees
router.patch('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const data = req.body

        const doc = await feesModel.getById(id)
        if (!doc) return res.sendStatus(404)

        // Merge existing fields with the ones to be updated
        Object.keys(data).forEach((key) => doc[key] = data[key])

        const updateResult = await feesModel.update(id, doc)
        if (!updateResult) return res.sendStatus(404)

        return res.json(doc)
    }
    catch (e) {
        return next(e)
    }
})

// Replace a fees
router.put('/:id', async (req, res, next) => {
    try {
        const updateResult = await feesModel.update(req.params.id, req.body)
        if (!updateResult) return res.sendStatus(404)

        const result = await feesModel.getById(req.params.id)
        return res.json(result)

    }
    catch (e) {
        return next(e)
    }
})

module.exports = router