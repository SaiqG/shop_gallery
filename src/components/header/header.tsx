import React from 'react'
import './header.css'
import Search from './search'

export default function Header({searchInput, setSearchInput} : {searchInput:string, setSearchInput:any}) {
  return (
    <div className='header'>
        <div className='logo'>CospBits</div>
        <div><Search input={searchInput} setInput={setSearchInput}/></div>
        <div><a className='shop__link' target="_blank" rel="noreferrer" href='https://boosty.to/cospbits'>Магазин на Boosty</a></div>
    </div>
  )
}
