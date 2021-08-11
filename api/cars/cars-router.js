// DO YOUR MAGIC
const express = require('express')
const Car = require('./cars-model')
const {
    checkCarPayload,
    checkVinNumberValid,
    checkCarId,
    checkVinNumberUnique,
} = require('./cars-middleware')

const router = express.Router()

router.get('/', async ( req, res, next) =>{
try {
    const cars = await Car.getAll()
    res.json(cars)
} catch(err) {
    next(err)
}
})

router.get('/:id', checkCarId, async ( req, res, next) =>{
   req.json(req.car)
})

router.post('/', 
checkCarPayload, 
checkVinNumberUnique, 
checkVinNumberValid, 
async ( req, res, next) =>{
    try {
        const car = await Car.create(req.body)
        res.json(car)
    } catch (err) {
        next(err)
    }
})

module.export = router