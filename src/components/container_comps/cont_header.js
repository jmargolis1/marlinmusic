import React from "react"

//components 
import NavItems from "./nav_items"

//css
import "./cont_header.css"

export default function Nav() {
  return (
      <div class="cont_header" style={{ color: 'black'}}>
        <NavItems />
      </div>

  )
}