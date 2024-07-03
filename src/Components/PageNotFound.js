import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function PageNotFound() {
    let navigateHome=useNavigate()
  return (
    <div>
      <img src='https://thumbs.dreamstime.com/b/error-page-not-found-design-template-website-121941507.jpg'></img>
    <NavLink to={"/"}>Goto-HOME</NavLink>
    </div>
  )
}

export default PageNotFound
