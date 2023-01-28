import React from 'react'
import Link from 'next/link'

const home = () => {
  return (
    <div className='home-page'>home
        <div className='intro-div'>
            <h1>Welcome, sammyak! 👋🏼</h1>
            <p>Get access to quality study materials, brush up on concepts, solve sample papers and clarify all your doubts.</p>
        </div>
      <div className='panelnav'>
        <div className='subpanel'>
        <Link className='head-titles' href={'/maths'}><img  src='https://cdn-icons-png.flaticon.com/128/897/897406.png' alt=''></img>Mathematics</Link>
        </div>
        <div className='subpanel'>
        <Link className='head-titles' href={'/science'}><img  src='https://cdn-icons-png.flaticon.com/128/1048/1048971.png' alt=''></img>Science</Link>
        </div>
    </div>
    </div>
  )
}

export default home