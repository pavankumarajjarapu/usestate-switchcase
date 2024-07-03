import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    let navPoped=(poped)=>{
        if (poped.isActive){
            return{
                color:"red",
                // backgroundColor:"palegreen",
                // borderRadius:"12px"
            }
        }
    }
  return (
    <div>
        <nav>
      <NavLink to={"/"} style={(poped)=>{return navPoped(poped)}}> Home</NavLink>
      <NavLink to={"/cricket"} style={(poped)=>{return navPoped(poped)}}>CricketScore</NavLink>
      <NavLink to={"/swicthcase"} style={(poped)=>{return navPoped(poped)}}>StateCapitals</NavLink>
      </nav>
    </div>
  )
}

export default NavBar
