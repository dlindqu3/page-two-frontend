import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
  <ul className="flex">
    <li>
    <Link className="mr-6" to='/'>Home</Link>
    </li>
    <li>
    <Link className="mr-6" to='saved-items/'>Saved Books</Link>
    </li>
    <li>
    <Link className="mr-6" to='about/'>About</Link>
    </li>
</ul>
  )
}

export default Header