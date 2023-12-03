import { SEARCH } from "./Search.styles"
import StarWarsLogoWhite from '../../assets/images/star_wars_logo_white.svg';
import CreativeMarsCollage from '../../assets/images/creative_mars_collage.png';
import Spaceship from '../../assets/images/spaceship5_1.svg'
import SearchIcon from '../../assets/images/search.svg';
import FilterIcon from '../../assets/images/filter.svg';
import ArrowDownIcon from '../../assets/images/arrowDown.svg';

const Search = () => {
    return (
        <SEARCH>
            <img src={CreativeMarsCollage} alt="" />
            <div className='search_form'>
                <span>
                    Discover all the information about Planets of the Star Wars Saga
                </span>
                <input placeholder='Enter the name in the planet' />
                <button type='button'>
                    <img src={SearchIcon} alt="" />
                    Search
                </button>
                <div className='search_form-filter'>
                    <div className='filter'>
                        <img src={FilterIcon} alt="" />
                        <span>Filter: </span>
                    </div>
                    <div className='filter-type' style={{ marginLeft: 7 }}>
                        <img src={ArrowDownIcon} alt="" />
                        <span>Name</span>
                    </div>
                    <div className='filter-type' style={{ marginLeft: 12 }}>
                        <img src={ArrowDownIcon} alt="" />
                        <span>Population</span>
                    </div>
                </div>
            </div>
            <img className='spaceship' src={Spaceship} />
        </SEARCH>
    )
}

export { Search }