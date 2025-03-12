import React from "react";
import "./Navbar.css"
const Navbar = () => {
 const navDate = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "Country",
      link: "country",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];
  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <h1>WorldAtlas</h1>
          </div>
          <div className="list">
            <ul>
                {navDate.map((item)=>{
                  const{name,link}=item
                return (
                    <li key={name}><a href={item.link}>{item.name}</a></li>
                )
            })}</ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
