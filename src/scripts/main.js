import { createPlan } from "./plan.js"
console.log("Welcome to the main module")
const yearlyPlan = createPlan()
console.log(yearlyPlan)

//temp code
import { createAsparagus } from "./seeds/asparagus.js"


import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { createCorn } from "./seeds/corn.js"
import { Catalog } from "./catalog.js"
plantSeeds(yearlyPlan)

const plantArray = usePlants()
const harvest = harvestPlants(plantArray)
Catalog(harvest)
