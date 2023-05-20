import React from 'react'
import './Header.css';
import logo from '../../assets/shared/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    const navgator=[
        {name:'00 Home', path:'/'},
        {name:'01 Destination', path:'/destination'}, 
        {name:'02 Crew', path:'/crew'},
        {name:'03 Technology', path:'/technology'}
    ]
    return (
        <header className='w-screen h-20 absolute top-5 left-0 z-50'>
            <div className='h-full w-fulk flex justify-between items-center'>
                <div className='h-full px-10'>
                    <img src={logo} className='my-3 p-0'/>
                </div>
                <nav className='w-3/5 h-full list-none z-1 py-6 main-nav backdrop-blur-lg'>
                    <ul className='flex djustify-start z-10 pl-10'>
                        {navgator.map((li, i) =>{
                            return (<li key={i} className='pl-10'><Link to={li.path} className='text-md text-white'>{li.name}</Link></li>)
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header