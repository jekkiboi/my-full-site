import React, {useState} from 'react'
// import Menu from "./Menu"
import "../tabMenu/tab.css"
import {Fade} from 'react-reveal'

const GalleryReact = () => {
    const Menu = [
        {
            id: 1,
            image: "/images/iconwayfarer.png",
            name: "Project Wayfarer",
            link: "/wayfarer",
            category: "Web",
        },
        {
            id: 2,
            image: "images/C9icon.png",
            name: "Claude 9",
            link: "/claude9",
            category: "Graphic",
        },
        {
            id: 3,
            image: "images/Lizzieicon.png",
            name: "Lizzie",
            link: "/lizzie",
            category: "Web",
        },
        {
            id: 4,
            image: "images/diamond.png",
            name: "EnGayged",
            link: "/engayged",
            category: "Web",
        },
        {
            id: 5,
            image: "images/oftheearth.png",
            name: "Of the Earth",
            link: "/oftheearth",
            category: "Graphic",
        },
    ]
    const [items, setItems] = useState(Menu)

    const filterItem = (categItem) => {
            const updatedItems = Menu.filter((curElem) =>  {
                return curElem.category === categItem
            })
            setItems(updatedItems)
    }

    return (
        <body className="projectsPage">
            <>
            <div className="inline-menu">
                <Fade left>
            <h1 className='title1'>Work</h1>
                <Fade left>
                <nav className="seeProjects">
                    <ul>
                        &nbsp; 
                        <li>
                        <button className="btn" onClick={() => filterItem('Web')}>Web</button>
                        </li>
                         
                        <li>
                        <button className="btn" onClick={() => filterItem('Graphic')}>Graphic</button>
                        </li>
                         
                        <li>
                        <button className="btn" onClick={() => setItems(Menu)}>All</button>
                        </li>
                    </ul>
                </nav>
                </Fade>
                </Fade>
            </div>

            <hr/>
            <br />

            {/* my main items section */}
            <div className="menu-items">
                <div className="row">
                        <div className="col-1">
                            <div className="yee">
                            {
                                items.map((elem) => {
                                    const { name, image, link } = elem 
                                    return (     
                                        <ul className="projectsContainer">
                                                <Fade up>
                                                <li className="image">
                                                    <span>
                                                    <a href={link}>
                                                        <img src={image} alt={name} className="img-fluid"/>
                                                    </a>
                                                    </span>
                                                </li>
                                                </Fade>
                                        </ul>
                                    )
                                })
                            }
                         </div>
                    </div>
                </div>
            </div>
        </>
    </body>
    )
}

export default GalleryReact