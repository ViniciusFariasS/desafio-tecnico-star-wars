import React, { useState } from 'react'
import BackgroundImage from '../../assets/images/background_image.png';
import StarWarsLogoWhite from '../../assets/images/star_wars_logo_white.svg';
import CreativeMarsCollage from '../../assets/images/creative_mars_collage.png';
import Spaceship from '../../assets/images/spaceship5_1.svg'
import SearchIcon from '../../assets/images/search.svg';
import FilterIcon from '../../assets/images/filter.svg';
import ArrowDownIcon from '../../assets/images/arrowDown.svg';
import { HOME } from './Index.style'
import { Search } from '../../components/Search/Search';

const Home = () => {
    const [searh, setSearch] = useState('');
    return (
        <HOME imageUrl={BackgroundImage}>
            <div className='home_logo'>
                <span>PLANET SEARCH</span>
                <img src={StarWarsLogoWhite} alt="" />
            </div>
            <Search />
        </HOME>
    )
}

export {
    Home
}