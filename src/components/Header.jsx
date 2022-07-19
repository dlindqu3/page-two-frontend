import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (


  <div >
  <ul className='flex bg-gray-200 px-4 justify-center'>
    <li className="mr-6 items-center font-semibold">
      <div>Page Two</div>
    </li>
    <li>
    <Link className="mr-6 items-center" to='/'>Home</Link>
    </li>
    <li>
    <Link className="mr-6 items-center" to='saved-items/'>Saved Books</Link>
    </li>
    <li>
    <Link className="mr-6 items-center" to='about/'>About</Link>
    </li>
</ul>
</div>
  )
}

export default Header