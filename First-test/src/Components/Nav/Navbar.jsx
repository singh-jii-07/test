import React from 'react'
import"./Navbar.css"
const Navbar = () => {
    const navDate=[
        {
            name:"Home",
            link:"/"
        },
        {
            name:"Daskboard",
            link:"/daskboard"
        }
    ]
  return (
    <div>
      <nav>
        <div className="logo">
            <h1>Test</h1>
        </div>
        <div className="icon">
            <ul>
                {
                    navDate.map((item,index)=>{
                        return(
                            <li key={index}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
