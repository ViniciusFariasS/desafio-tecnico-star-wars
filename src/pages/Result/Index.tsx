import React, { useState, useEffect, useCallback } from 'react'
import { RESULT, RESULTCONTENT } from './Index.style'
import ArrowLeft from '../../assets/images/arrowLeft.svg'
import ClimateIcon from "../../assets/images/thermometer.svg";
import PopulationIcon from "../../assets/images/audience.svg";
import TerrainIcon from "../../assets/images/Group.svg";
import PersonIcon from "../../assets/images/Person.svg";
import FilmIcon from "../../assets/images/film.svg";
import { useNavigate, useParams } from 'react-router';
import { IPlanet } from '../../services/Swapi.interface';
import BB8AnimationLoading from '../../assets/gifs/bb8Loading.gif'
import axios from 'axios';
import { getPlanetByNameService } from '../../services/Swapi.service';
import { IconButton, Modal, useMediaQuery } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { debounce } from 'lodash';
import { usePlanetContext } from '../../context/Planet.context';

const ResultPage = () => {
    const [selectedPlanet, setSelectedPlanet] = useState<IPlanet | null>(null)
    const { planets } = usePlanetContext();
    const [open, setOpen] = useState<boolean>(false);
    const [residentsString, setResidentsString] = useState<string>('');
    const [namePlanet, setNamePlanet] = useState<string>('');
    const [filmsString, setFilmsString] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const { searchType, searchQuery } = useParams();
    const isMobile = useMediaQuery('(max-width: 480px)');

    const navigate = useNavigate();

    const handleImage = (name: any) => {
        switch (name?.toLowerCase()) {
            case 'tatooine':
                return 'https://cryptospro.com.br/planetas/planeta_0000_tatooine.png'
            case 'naboo':
                return 'https://cryptospro.com.br/planetas/planeta_0001_naboo.png'
            case 'mustafar':
                return 'https://cryptospro.com.br/planetas/planeta_0002_mustafar.png'
            case 'kashyyyk':
                return 'https://cryptospro.com.br/planetas/planeta_0003_kashyyyk.png'
            case 'hoth':
                return 'https://cryptospro.com.br/planetas/planeta_0004_hoth.png'
            case 'endor':
                return 'https://cryptospro.com.br/planetas/planeta_0005_endor.png'
            case 'dagobah':
                return 'https://cryptospro.com.br/planetas/planeta_0006_dagobah.png'
            case 'coruscant':
                return 'https://cryptospro.com.br/planetas/planeta_0007_coruscant.png'
            case 'bespin':
                return 'https://cryptospro.com.br/planetas/planeta_0008_bespin.png'
            case 'alderaan':
                return 'https://cryptospro.com.br/planetas/planeta_0009_alderaan.png'
            default:
                return 'https://cryptospro.com.br/planetas/planeta_0000_tatooine.png'
        }
    }

    useEffect(() => {
        if (!planets) {
            getPlanetByNameService({ searchQuery: searchQuery || '' })
                .then((res) => {
                    setSelectedPlanet(res?.data?.results[0]);
                    setNamePlanet(res?.data?.results[0]?.name)
                })

        } else {
            const planet: IPlanet | null = planets?.find((planet) => searchType === 'name' ?
                planet.name.toLowerCase() === searchQuery?.toLowerCase() : planet.population === searchQuery) || null
            setNamePlanet(planet?.name || '');
            setSelectedPlanet(planet);
        }

    }, [])


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const residentsPromises = selectedPlanet?.residents.map(async (url) => {
                    const residentResponse = await axios.get(url);
                    return residentResponse.data.name;
                });
                if (residentsPromises) {
                    const residentsData = await Promise?.all(residentsPromises);
                    const formatedResidents = residentsData.join(', ') + '.'
                    setResidentsString(formatedResidents);
                }
                const filmsPromises = selectedPlanet?.films.map(async (url) => {
                    const filmResponse = await axios.get(url);
                    return filmResponse.data.title;
                });

                if (filmsPromises) {
                    const filmsData = await Promise?.all(filmsPromises);
                    const formatedFilms = filmsData.join(', ') + '.'
                    setFilmsString(formatedFilms);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching planet data:', error);
            }
        };

        if (selectedPlanet) {
            fetchData();
        }
    }, [selectedPlanet])

    const handleEdit = useCallback(
        debounce((e) => {
            setNamePlanet(e.target.value)
        }, 300),
        []
    )

    return (
        <RESULT>
            <RESULTCONTENT>
                {
                    loading ?
                        <div className='loading'>
                            <img src={BB8AnimationLoading} />
                        </div>
                        :
                        selectedPlanet ?
                            <>
                                <div className="result_planet">
                                    <div className='result_planet--planet'>
                                        <img src={handleImage(selectedPlanet?.name)} alt="" />
                                        <div className="result_planet--name">
                                            <span className="text_planet" style={{ fontSize: 14 }}>Planet:</span>
                                            <span className="name_planet">
                                                {namePlanet}
                                                <IconButton onClick={() => setOpen(true)}>
                                                    <EditIcon fontSize='small' />
                                                </IconButton>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="result_planet--data">
                                        <div className="data-planet">
                                            <img src={ClimateIcon} alt="" />
                                            <span className="text_data">Climate: <span className="value_data">{selectedPlanet?.climate}</span></span>

                                        </div>
                                        <div className="data-planet" style={{ marginTop: isMobile ? 7 : '' }}>
                                            <img src={TerrainIcon} alt="" />
                                            <span className="text_data">Terrain: <span className="value_data">{selectedPlanet?.terrain}</span></span>
                                        </div>
                                        <div className="data-planet" style={{ marginTop: isMobile ? 15 : '' }}>
                                            <img src={PopulationIcon} alt="" />
                                            <span className="text_data">Population: <span className="value_data">{selectedPlanet?.population}</span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="result_details--residents">
                                    <div className="result_details--title">
                                        <img src={PersonIcon} alt="" />
                                        <span className="details-text">Residents:</span>
                                    </div>
                                    <span className="result_details-list">
                                        {residentsString}
                                    </span>
                                </div>
                                <div className="result_details--films" style={{ marginTop: 9, maxHeight: 93 }}>
                                    <div className="result_details--title">
                                        <img src={FilmIcon} alt="" />
                                        <span className="details-text">Films: ({selectedPlanet?.residents.length})</span>
                                    </div>
                                    <span className="result_details-list">
                                        {filmsString}
                                    </span>
                                </div>
                            </>
                            :
                            <span style={{ marginTop: 150 }}>Nenhum resultado encontrado.</span>
                }
            </RESULTCONTENT>
            <a onClick={() => navigate('/')}>
                <img src={ArrowLeft} alt="" />
                Voltar
            </a>
            <Modal open={open} onClose={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className='modal_edit' style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#FFF', borderRadius: 8, width: 250, padding: 8 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <input id='edit'
                            name='edit'
                            style={{ borderRadius: 8, border: '1px solid grey', padding: 8 }}
                            type='text'
                            placeholder='Edit name'
                            onChange={(e) => handleEdit(e)} />
                        <button type='button' onClick={() => setOpen(false)} style={{ backgroundColor: 'red', borderRadius: 8, border: 'none', color: 'white', padding: 8 }}>
                            Save
                        </button>
                    </div>
                </div>
            </Modal>
        </RESULT >
    )
}

export {
    ResultPage
}