import React from 'react'
import { link } from 'react-router-dom'

function Layout({children}) {
  return (
    <div>
    <header>
        <nav className="navbar bg-light bg-primary">
            <div className="container">
                <link to="/" className="navbar-brand">DevPOS</link>
            </div>
        </nav>

    </header>
    <main>
        <div className='container mt-3'>
            {children}
            </div>
    </main>
  
</div>
  )
}
export default Layout