import axios from "axios";
import { IGetAllPlanets } from "./Swapi.interface";

const getPlanetByName = ({ searchQuery }: { searchQuery: string }): Promise<IGetAllPlanets> => {
    return axios.get(`https://swapi.dev/api/planets/?search=${searchQuery}`);
}

export {
    getPlanetByName as getPlanetByNameService,
}