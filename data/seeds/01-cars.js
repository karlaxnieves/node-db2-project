const cars = [
    {
        vin: "JH4DA9450MS001229",
        make: "nissan",
        model: "rogue",
        milage: 111111,
        title: "clean",
        transmission: "manual",
    },
    {
        vin: "KLATA52671B611178",
        make: "honda",
        model: "civic",
        milage: 211111,
        title: "clean",
    },
    {
        vin: "WDBRF52H76F783280",
        make: "toyota",
        model: "prius",
        milage: 111200,
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}