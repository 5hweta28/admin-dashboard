import React from 'react'
import './listing.css'
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

import img from '../../../../Assets/i1.png';
import img2 from '../../../../Assets/i2.png';
import img3 from '../../../../Assets/i3.png';
import img4 from '../../../../Assets/i5.png';
import img9 from '../../../../Assets/i4.png';
import img5 from '../../../../Assets/p1.jpg';
import img6 from '../../../../Assets/p2.jpg';
import img7 from '../../../../Assets/p3.jpg';
import img8 from '../../../../Assets/p4.jpg';
const Listing = ()=> {
    return (
        <div className="listingSection">
            <div className="heading flex">
                <h1>My Listing</h1>
                <button className='btn flex'>
                    See All <BsArrowRightShort className='icon'/>
                </button>
            </div>

            <div className="secContainer flex">
                <div className="singleItem">
                <AiFillHeart className='icon'/>
                <img src={img} alt="Image Name" />
                <h3>FlowerPot</h3>
                </div>

                <div className="singleItem">
                <AiOutlineHeart className='icon'/>
                <img src={img2} alt="Image Name" />
                <h3>Basket Plant</h3>
                </div>

                <div className="singleItem">
                <AiOutlineHeart className='icon'/>
                <img src={img3} alt="Image Name" />
                <h3>Creeping Fig</h3>
                </div>

                <div className="singleItem">
                <AiFillHeart className='icon'/>
                <img src={img4} alt="Image Name" />
                <h3>Money Plant</h3>
                </div>

                {/* <div className="singleItem">
                <AiFillHeart className='icon'/>
                <img src={img9} alt="Image Name" />
                <h3>Money Plant</h3>
                </div> */}

            </div>

            <div className="sellers flex">
                <div className="topSellers">
                    <div className="heading flex">
                        <h3>Top Sellers</h3>
                        <button className='btn flex'>
                        See All <BsArrowRightShort className='icon'/>
                        </button>
                    </div>
                    <div className="card flex">
                        <div className="users">
                        <img src={img5} alt="User Image" />
                        <img src={img6} alt="User Image" />
                        <img src={img7} alt="User Image" />
                        <img src={img8} alt="User Image" />

                        </div>
                        <div className="cardText">
                            <span>
                                14,556 Plant sold <br />
                                <small>
                                    21 Sellers <span className='date'>7 Days</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="featuredSellers">
                    <div className="heading flex">
                        <h3>Featured Sellers</h3>
                        <button className='btn flex'>
                        See All <BsArrowRightShort className='icon'/>
                        </button>
                    </div>
                    <div className="card flex">
                        <div className="users">
                        <img src={img5} alt="User Image" />
                        <img src={img6} alt="User Image" />
                        <img src={img7} alt="User Image" />
                        <img src={img8} alt="User Image" />

                        </div>
                        <div className="cardText">
                            <span>
                                28,556 Plant sold <br />
                                <small>
                                    28 Sellers <span className='date'>31 Days</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Listing