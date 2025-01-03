import React from 'react';
// import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    // const content = <>
    // <div className=''>
    //     <ul>
    //         <Link to='Home'>
    //             <li>Home</li>
    //         </Link>
    //         <Link to='About'>
    //             <li>About</li>
    //         </Link>
    //         <Link to='Services'>
    //             <li>Services</li>
    //         </Link>
    //         <Link to='Projects'>
    //             <li>Projects</li>
    //         </Link>
    //         <Link to='Contact'>
    //             <li>Contact</li>
    //         </Link>
    //     </ul>
    // </div>
    // </>

    return (
        <nav>
            <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4'/>
                <div className = 'flex items-center flex-1'>
                    <span className='text-3x1 font-bold'>Logo</span>
                </div>
                <div className='lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden'>
                    <div className='flex-10'>
                    <ul className='flex gap-8 mr-16 text-[18px]'>
                    <Link to='Home'>
                        <li>Home</li>
                    </Link>
                    <Link to='About'>
                        <li>About</li>
                    </Link>
                    <Link to='Services'>
                        <li>Services</li>
                    </Link>
                    <Link to='Projects'>
                        <li>Projects</li>
                    </Link>
                    <Link to='Contact'>
                        <li>Contact</li>
                    </Link>
                    </ul>
                    </div>
            </div>

        </nav>
    );
};

export default Navbar; 