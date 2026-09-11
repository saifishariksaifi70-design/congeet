import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='relative'>
       <div className='flex justify-between items-center mx-5 my-5'>
         <div>
            <h1 className='text-3xl font-bold'>Shap.</h1>
        </div>
        <div>
            <ul className='flex items-center gap-5 text-xl font-semibold'>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>About</li>
                <li>Contact</li>
                <li>Work</li>
            </ul>
        </div>
        <div className='border border-amber-200 bg-yellow-300 px-5 py-1 rounded-2xl'>
            <span className='text-xl'>Start a Project</span>
        </div>
       </div>

    </nav>
  )
}

export default Navbar