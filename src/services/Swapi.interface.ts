export interface IPlanet {
    climate: string
    created: string
    diameter: string
    edited: string
    films: Array<string>,
    gravity: number,
    name: string,
    orbital_period: number,
    population: string,
    residents: Array<string>,
    rotation_period: number,
    surface_water: number,
    terrain: string,
    url: string
}


export interface IGetAllPlanets {
    data: {
        results: Array<IPlanet>
    }
}

