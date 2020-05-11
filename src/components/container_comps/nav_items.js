import React from "react"

//css
import "./nav_items.css"

export default function NavItems() {
    function handleClick(e) {
        switch(e) {
            case 'music':
                break;
            case 'videos':
                break;
            default:
                break;
        }
      }

  return (
      <div class="nav" style={{ color: 'black'}}>
          <div class="items">
            <button onClick={handleClick('music')} class="music"> Music</button>
            <button onClick={handleClick('videos')} class="videos"> Videos </button>
          </div>
      </div>
  )
}