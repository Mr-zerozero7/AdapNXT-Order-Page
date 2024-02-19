import './index.css'
import logo from './logo.svg';
import {FaRegMoon, FaRegBell} from 'react-icons/fa'
import {TbLanguageHiragana} from 'react-icons/tb'
import {RxAvatar} from 'react-icons/rx'
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import { useTheme } from '../../ThemeContext';

const NavBar = () =>{
    // const [darkMode, setDarkMode] = useState(false)
    const {theme, toggleTheme} = useTheme()


    return(
        <>
        <div className={`nav-bar-container ${theme === 'darkmode' ? 'dark-mode' : 'light-mode'}`}>
            <Link to={'/'} className='brand-link'>
                <div className='brand-details'>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className={`brand-name ${theme === 'darkmode' ? 'dark-mode' : 'light-mode'}`}>AdaptNXT</h1>
                </div>
            </Link>
            <ul className="utility-container">
                <li className="utility-tabs display-mode" onClick={toggleTheme}><FaRegMoon/></li>
                <li className="utility-tabs notification-bell"><FaRegBell/></li>
                <li className="utility-tabs language"><TbLanguageHiragana/></li>
                <li className="utility-tabs user-image"><RxAvatar/></li>
            </ul>
        </div>
        </>
    )
}

export default NavBar