import { RESULT } from "./Result.styles"
import ClimateIcon from "../../assets/images/thermometer.svg";
import PopulationIcon from "../../assets/images/audience.svg";
import TerrainIcon from "../../assets/images/Group.svg";
import PersonIcon from "../../assets/images/Person.svg";
import FilmIcon from "../../assets/images/film.svg";

const Result = () => {
    return (
        <RESULT>
            <div className="result_planet">
                <img src="https://cryptospro.com.br/planetas/planeta_0000_tatooine.png" alt="" />
                <div className="result_planet--name">
                    <span className="text_planet" style={{ fontSize: 14 }}>Planet:</span>
                    <span className="name_planet">TATOOINE</span>
                </div>
                <div className="result_planet--data">
                    <div className="data-planet">
                        <img src={ClimateIcon} alt="" />
                        <span className="text_data">Climate:</span>
                        <span className="value_data"> dadas</span>
                    </div>
                    <div className="data-planet">
                        <img src={TerrainIcon} alt="" />
                        <span className="text_data">Terrain:</span>
                        <span className="value_data"> dasdas</span>
                    </div>
                    <div className="data-planet">
                        <img src={PopulationIcon} alt="" />
                        <span className="text_data">Population:</span>
                        <span className="value_data"> dasdas</span>
                    </div>
                </div>
            </div>
            <div className="result_details--residents">
                <div className="result_details--title">
                    <img src={PersonIcon} alt="" />
                    <span className="details-text">Residents:</span>
                </div>
                <span className="result_details-list">
                    People 01 , People 02 , People 04 , People 06 , People 07 , People 08 , People 09 , People 11, People 43, People 62 .
                </span>
            </div>
            <div className="result_details--films" style={{ marginTop: 9, maxHeight: 93 }}>
                <div className="result_details--title">
                    <img src={FilmIcon} alt="" />
                    <span className="details-text">Residents:</span>
                </div>
                <span className="result_details-list">
                    Films 1, Films 3, Films 4, Films 5, Films 6.
                </span>
            </div>
        </RESULT>
    )
}

export {
    Result
}