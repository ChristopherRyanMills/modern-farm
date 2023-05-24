//array of plants in the field
const growingPlants = []
//add a seed to the field
export const addPlant = (seed) => {
    // the only seed that is an array is corn, so I iterate the corn array and push each index into the new array
    if (Array.isArray(seed)) {
        for (let k=0; k<seed.length; k++) {
            growingPlants.push(seed[k])
        }
    }
    else{
        growingPlants.push(seed)
    }
    return growingPlants
}

//returns the array of plants in the field
export const usePlants = () => {
    return growingPlants
}