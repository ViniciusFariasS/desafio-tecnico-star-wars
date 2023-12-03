import React, { useState } from 'react'
import { HOME } from './Index.style'
import { Search } from '../../components/Search/Search';

const HomePage = () => {
    const [searh, setSearch] = useState('');
    return (
        <HOME>
            <Search />
        </HOME>
    )
}

export {
    HomePage
}