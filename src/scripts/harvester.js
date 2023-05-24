//this takes the field plants array as argument
export const harvestPlants = (plantArray) => {
    const seedArray = []
    //iterate the growing plant array
    //store each ones output value, except corn (divide corn output by half)
    //iterate over the output and add the object to seed array each time
    for (const plant of plantArray) {
        if (plant.type === "Corn") {
            for (let i=0; i<3; i++) {
                seedArray.push(plant)
            }
        }
        else {
            for (let j=0; j<plant.output; j++) {
                seedArray.push(plant)
            }
        }
    }
    return seedArray
}