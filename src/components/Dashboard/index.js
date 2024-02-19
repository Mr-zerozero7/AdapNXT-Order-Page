import './index.css'
//  importing packages
import { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../ThemeContext';
//  importing React icons
import {AiOutlineDashboard} from 'react-icons/ai'
import {IoPricetagOutline, IoShareSocialOutline} from 'react-icons/io5'
import {BiNews} from 'react-icons/bi'
import {MdOutlineLocalShipping} from 'react-icons/md'


const Dashboard = () => {
    const {theme} = useTheme()
    const [activeTab, setActiveTab] = useState(3)

    useEffect(() => {
      setActiveTab(3);
    }, [])
    
    //  creating dashboard tabs
    return(
        <div className= {`side-bar-container ${theme === 'darkmode' ? 'dark-mode' : 'light-mode'}`}>
            <div className='dashboard-container'>
                <Link to={'/'} className='dashboard-links'><button type='button' className={`dashboard-items ${theme === 'darkmode' ? 'dark-mode' : 'light-mode'} ${activeTab === 1? 'active' : null}`}  onClick={() => setActiveTab(1)}>
                        <AiOutlineDashboard className='dashboard-icons' /> Dashboard</button></Link>
                <Link to={'/inventory'} className='dashboard-links'><button type='button' className={`dashboard-items ${theme === 'darkmode' ? 'dark-mode' : 'light-mode'} ${activeTab === 2? 'active' : null}`}  onClick={() => setActiveTab(2)}>
                        <IoPricetagOutline className='dashboard-icons' /> Inventory</button></Link>
                <Link to={'/orders'} className='dashboard-links'  onClick={() => setActiveTab(3)}><button type='button' className={`dashboard-items ${theme === 'darkmode' ? 'dark-mode' : 'light-mode'} ${activeTab === 3? 'active' : null}`} >
                        <BiNews className='dashboard-icons' /> Orders</button></Link>
                <Link to={'/shipping'} className='dashboard-links'><button type='button' className={`dashboard-items ${theme === 'darkmode' ? 'dark-mode' : 'light-mode'} ${activeTab === 4? 'active' : null}`}  onClick={() => setActiveTab(4)}>
                        <MdOutlineLocalShipping className='dashboard-icons' /> Shipping</button></Link>
                <Link to={'/channel'} className='dashboard-links'><button type='button' className={`dashboard-items ${theme === 'darkmode' ? 'dark-mode' : 'light-mode'} ${activeTab === 5? 'active' : null}`}  onClick={() => setActiveTab(5)}>
                        <IoShareSocialOutline className='dashboard-icons' /> Channel</button></Link>
            </div>
        </div>
    )
}

export default Dashboard




// const dashboardData = [
//     {name: 'Dashboard', icon: 'AiOutlineDashboard'},
//     {name: 'Inventory', icon: 'IoPricetagOutline'},
//     {name: 'Orders', icon: 'BiNews'},
//     {name: 'Shipping', icon: 'MdOutlineLocalShipping'},
//     {name: 'Channel', icon: 'IoShareSocialOutline'},
// ]


/* <ul className='dashboard-container'>
    {dashboardData.map((eachList,index) => {
        const IconName = eachList.icon;
        return(
        <li key={index} className={`dashboard-items ${activeTab === eachList.name ? 'active' : null}`} onClick={() => setActiveTab(eachList.name)}>
            <IconName className='dashboard-icons'/>
                {eachList.name}</li>
    )})}
</ul> */