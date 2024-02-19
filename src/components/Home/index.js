import './index.css'

import {RxCross2} from 'react-icons/rx'
import {PiGearBold} from 'react-icons/pi'


const Home = () => {
    const {theme} = useTheme()
    return(
        <div className='home-container' >
            <div className='output-container'>
                <div className='tab-title-container'>
                    <button type='button' className='tab-cancel-btn'>Orders <RxCross2 style={{color: 'black'}}/></button>
                    <PiGearBold style={{marginRight: 15}}/>
                </div>
                
            </div>
        </div>
    )
}

export default Home;