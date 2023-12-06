import React, { createContext, useState } from 'react'
import { IPlanet } from '../services/Swapi.interface'

interface IPlanetContext {
    planets: Array<IPlanet> | null
    setPlanets: (planets: Array<IPlanet> | null) => void
}

export const PlanetContext = createContext<IPlanetContext>({
    planets: null,
    setPlanets: () => { }
})

export const PlanetProvider = ({ children }: any) => {
    const [planets, setPlanets] = useState<Array<IPlanet> | null>(null)
    return (
        <PlanetContext.Provider
            value={{
                planets,
                setPlanets
            }}
        >
            {children}
        </PlanetContext.Provider>
    )
}

export const usePlanetContext = () => {
    const context = React.useContext(PlanetContext)
    if (context === undefined) {
        throw new Error('PlanetContext must be used within a usePlanetContext')
    }
    return context
}