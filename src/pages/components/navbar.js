import * as Icon from 'react-feather'
import Stylist from '@/styles/stylist.module.css'
import React from 'react'
import Link from 'next/link'

export default function Navbar(){

    const [searchBar, setSearchBar] = React.useState(false)
    const [navbar, setNavbar] = React.useState(false)

    function searchBarActivated(){
        if(!searchBar){
            setSearchBar(true)

        }else{
            setSearchBar(false)
        }
    }

    function navbarMenu(){
        if(navbar){
            setNavbar(false)
        }else{
            setNavbar(true)
        }
    }

    return(
        <nav className={`${Stylist.navbar}  ${(navbar)?Stylist.active:""}`}>
            <div className={Stylist.title}>
                <a href='#'>Animazaa.</a>
            </div>
            <ul>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/genres"}>Genre</Link></li>
                <li><Link href={"https://saweria.co/animqu"}>Donate</Link></li>
            </ul>
            <div className={Stylist.opt}>
                <a onClick={searchBarActivated}>{(!searchBar)?<Icon.Search/>:<Icon.X/>}</a>
                <a className={`${Stylist.menu}`} onClick={navbarMenu}><Icon.Menu/></a>
            </div>
            <div className={`${Stylist.fly} ${(searchBar)?Stylist.active:""}`}>
                <form className={Stylist.search}  action='/search/'>
                    <input name='slug' placeholder='One Piece...' type='search'/>
                    <button type='submit'>Cari</button>
                </form>
            </div>
        </nav>
    )
}