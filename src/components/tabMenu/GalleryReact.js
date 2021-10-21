import React, {useState} from 'react'
import Menu from "./menu"
import "../tabMenu/tab.css"
import 'aos/dist/aos.css';
import {Fade} from 'react-reveal'
const GalleryReact = () => {
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
                                    const { id, name, image, link } = elem 
                                    return (     
                                        <ul className="projectsContainer aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">
                                                <Fade up>
                                                <li className="image">
                                                    <span>
                                                    <a href={link}>
                                                        <img src={image} alt={name} className="img-fluid"/>
                                                    </a>
                                                    </span>
                                                </li>
                                                </Fade>
                                            {/* </div> */}
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