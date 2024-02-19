import { useState } from 'react'
import './index.css'
import {LiaFileImportSolid} from 'react-icons/lia'
import {AiOutlineSend, AiTwotonePrinter, AiOutlineDown} from 'react-icons/ai'
import { RiRefreshLine, RiExpandUpDownLine, RiSearchLine} from 'react-icons/ri'
import {CiSquarePlus} from 'react-icons/ci'
import {GiShoppingBag} from 'react-icons/gi'

import {RxCross2} from 'react-icons/rx'
import {PiGearBold} from 'react-icons/pi'

import { useTheme } from '../../ThemeContext';

const ordersTabs = [
    {name: "Pending", id: 1},
    {name: "Accepted", id: 2},
    {name: "AWB Created", id: 3},
    {name: "Ready to Ship", id: 4},
    {name: "Shipped", id: 5},
    {name: "Completed", id: 6},
    {name: "Cancelled", id: 7},
]
const orderItemsArray = [1,2,3] 

const Orders = () => {
    const {theme} = useTheme()
    const [ordersTab, setOrdersTab] = useState(0)
    return(
        <>
        <div className= {`home-container ${theme === 'darkmode' ? 'dark-mode' : 'light-mode-banner-box'}`}>
            <div className='output-container'>
                <div className='tab-title-container'>
                    <button type='button' className={`tab-cancel-btn ${theme === 'darkmode' ? 'dark-mode' : 'light-mode'}`}
                    >Orders <RxCross2 style={{color: 'lightgray'}} /></button>
                    <PiGearBold style={{marginRight: 15}}/>
                </div>
                
            </div>
        </div>
        <div className='orders-container'>
            <div className='orders-tabs-container' >
                {ordersTabs.map(eachTab => (
                    <button key={eachTab.id} type='button'  className={`order-tabs-btn 
                    ${theme === 'darkmode' ? 'dark-mode' : 'light-btn-p'}
                    ${ordersTab === eachTab.id? 'active-order-tab' : null}`}
                    defaultValue={`${ordersTab === 1 ? true : false}`}
                    onClick={() => setOrdersTab(eachTab.id)}>{eachTab.name}</button>
                )) }
            </div>
            <div className= {`pending-container ${theme === 'darkmode' ? 'dark-mode' : 'light-mode'}`}>
                <div className='pending-tabs-container'>
                    <div className='pending-btns-container'>
                        <button type='button' className='pending-tab-btn'><LiaFileImportSolid/> Import Orders</button>
                        <button type='button' disabled className='pending-tab-btn'><AiOutlineSend/> Accept</button>
                        <button type='button' disabled className='pending-tab-btn'><AiTwotonePrinter/> Print <AiOutlineDown/></button>
                    </div>
                    <button type='button' className='pending-tab-btn refresh-btn'><RiRefreshLine/> Refresh</button>
                </div>
                <div className={`filter-container ${theme === 'darkmode' ? 'dark-mode' : 'light-mode'}`}>
                    <input type='checkbox' className='checkbox' />
                    <p className='filter-item'>Channel <RiExpandUpDownLine className='filter-item-icons'/></p>
                    <p className='filter-item'>Order No <RiExpandUpDownLine /> <RiSearchLine className='filter-item-icons'/></p>
                    <p className='filter-item'>Order Date <RiExpandUpDownLine /> <RiSearchLine className='filter-item-icons'/></p>
                    <p className='filter-item'>City <RiExpandUpDownLine className='filter-item-icons'/></p>
                    <p className='filter-item'>Customer Name <RiSearchLine className='filter-item-icons'/></p>
                    <p className='filter-item'>Order Value <RiExpandUpDownLine className='filter-item-icons'/></p>
                    <p className='filter-item'>Status <RiExpandUpDownLine className='filter-item-icons'/></p>
                    <p className='filter-item'>Operation</p>
                </div>
                <ul className='orders-list-container'>
                    {orderItemsArray.map(eachOrder => (
                        <li className='orders-list-item' key={eachOrder}>
                            <CiSquarePlus className='add-btn'/>
                            <input type='checkbox' className='orders-checkbox'/>
                            <GiShoppingBag className='order-list-tcard shopping-bag-icon'/>
                            <p className='order-list-tcard transaction-id'>#TRSIND20241801</p>
                            <p className='order-list-tcard date-tag'>2024-18-01</p>
                            <p className='order-list-tcard city-tag'>Hyderabad</p>
                            <p className='order-list-tcard customer-name'>Saikumar P</p>
                            <p className='order-list-tcard order-value-tag'>0.00</p>
                            <button type='button' className=
                            {` order-list-tcard order-pending-btn ${theme === 'darkmode' ? 'dark-green-mode' : 'light-green-mode'}`}
                            >Pending</button>
                            <select className='order-list-tcard operation-tag'>
                                <option className='option-tag' defaultValue={true}>Action</option>
                                <option className='option-tag'>Remove</option>
                            </select>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}

export default Orders;