import React from "react"

//components 
import Nav from "./container_comps/cont_header.js"
import Wrapper from "./container_comps/cont_wrapper.js"
//css
import "./container.css"

export default function Container() {
  return (
    <div class="container" style={{ color: `teal` }}>
        <Nav />
        <Wrapper /> 
    </div>
  )
}