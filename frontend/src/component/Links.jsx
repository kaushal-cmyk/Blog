import React from 'react'
import { NavLink } from 'react-router-dom'
import CreateBlog from '../pages/CreateBlog'
import Home from '../pages/Home'

const Links = () => {
  return (
    <div>
        <NavLink to = '/' style={{marginRight: "20px"}}>Home</NavLink>
        <NavLink to = 'create' style={{marginRight: "20px"}}>Create Blog</NavLink>
    </div>
  )
}

export default Links