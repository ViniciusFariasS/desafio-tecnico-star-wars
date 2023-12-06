import React from "react"
import { FOOTER, FOOTERCONTENT } from "./Footer.styles"
import StarWarsLogoBlack from '../../assets/images/star_wars_logo_black.svg'
import { Divider, styled, DividerProps, useMediaQuery } from "@mui/material"

const MuiDivider = styled((props: DividerProps) => (
    <Divider {...props} />
))(({ theme }) => {
    return ({
        height: 44,
        borderColor: 'black',
        alignSelf: 'center',
        marginLeft: 59,
        marginRight: 64
    })
});

const Footer = () => {
    const isMobile = useMediaQuery('(max-width: 480px)');
    return (
        <FOOTER>
            <FOOTERCONTENT>
                {
                    !isMobile &&
                    <>
                        <span>STARUARS LTDA | CNPJ: 77.777.777/0007-07 | 2023 | Todos os direitos reservados</span>
                        <MuiDivider orientation="vertical" flexItem /></>
                }
                <img src={StarWarsLogoBlack} alt="" />
            </FOOTERCONTENT>
        </FOOTER>
    )
}

export default Footer