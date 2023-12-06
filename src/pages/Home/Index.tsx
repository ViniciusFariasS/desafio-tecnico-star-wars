import React, { useState, useEffect } from 'react'
import { HOME, SEARCH } from './Index.style'
import CreativeMarsCollage from '../../assets/images/creative_mars_collage.png';
import CreativeMarsCollageMobile from '../../assets/images/creative_mars_collage_mobile.png';
import Spaceship from '../../assets/images/spaceship5_1.svg'
import SearchIcon from '../../assets/images/search.svg';
import FilterIcon from '../../assets/images/filter.svg';
import ArrowDownIcon from '../../assets/images/arrowDown.svg';
import { useNavigate } from "react-router-dom";
import { debounce } from 'lodash'
import { useCallback } from "react";
import BB8AnimationLoading from '../../assets/gifs/bb8Loading.gif'
import axios from 'axios';
import { usePlanetContext } from '../../context/Planet.context';
import { useMediaQuery } from '@mui/material';


const HomePage = () => {
    const { setPlanets, planets } = usePlanetContext();
    const [search, setSearch] = useState('');
    const [typeSearch, setTypeSearch] = useState('name');
    const [loading, setLoading] = useState<boolean>(true);
    const isMobile = useMediaQuery('(max-width: 480px)');

    const navigate = useNavigate();

    const handleSearch = useCallback(
        debounce((e) => {
            setSearch(e.target.value)
        }, 300),
        []
    )

    useEffect(() => {
        const fetchAllPlanets = async () => {
            setLoading(true)
            try {
                let url = 'https://swapi.dev/api/planets/';
                let allPlanetsData: any[] = [];

                while (url) {
                    const response = await axios.get(url);
                    const planets = response.data.results;

                    allPlanetsData = [...allPlanetsData, ...planets];
                    url = response.data.next;

                    if (!url) {
                        setPlanets(allPlanetsData);
                    }
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching planets data:', error);
            }
        };


        if (!planets)
            fetchAllPlanets();
        else
            setLoading(false)
    }, []);


    return (
        <HOME>
            <SEARCH>
                <img src={isMobile ? CreativeMarsCollageMobile : CreativeMarsCollage} alt="" />
                <div className='search_form'>
                    {
                        loading ?
                            <div className='loading'>
                                <img src={BB8AnimationLoading} />
                            </div>
                            :
                            <>
                                <span>
                                    Discover all the information about Planets of the Star Wars Saga
                                </span>
                                <input id='search'
                                    name='search'
                                    type={typeSearch === 'name' ? 'text' : 'number'}
                                    placeholder={typeSearch === 'name' ? 'Enter the name in the planet' : 'Enter the population in the planet'}
                                    onChange={(e) => handleSearch(e)} />
                                <button
                                    type='button'
                                    disabled={!search}
                                    onClick={() => navigate(`/result/${typeSearch === 'name' ? 'name' : 'population'}/${search}`)}
                                    style={{ backgroundColor: !search ? '#a9a9a9' : '#DE1212' }}
                                >
                                    <img src={SearchIcon} alt="" />
                                    Search
                                </button>
                                <div className='search_form-filter'>
                                    <div className='filter'>
                                        <img src={FilterIcon} alt="" />
                                        <span>Filter: </span>
                                    </div>
                                    <div className='filter-type' style={{ marginLeft: 7 }} onClick={() => setTypeSearch('name')}>
                                        <img src={ArrowDownIcon} alt="" />
                                        <span>Name</span>
                                    </div>
                                    <div className='filter-type' style={{ marginLeft: 12 }} onClick={() => setTypeSearch('population')}>
                                        <img src={ArrowDownIcon} alt="" />
                                        <span>Population</span>
                                    </div>
                                </div>
                            </>
                    }
                </div>
                <img className='spaceship' src={Spaceship} />
            </SEARCH>

        </HOME>
    )
}

export {
    HomePage
}