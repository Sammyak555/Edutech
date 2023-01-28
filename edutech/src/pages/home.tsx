import React from 'react'
import Link from 'next/link'

const home = () => {
  return (
    <div className='home-page'>home
        <div className='intro-div'>
            <h1>Welcome, sammyak! 👋🏼</h1>
            <p>Get access to quality study materials, brush up on concepts, solve sample papers and clarify all your doubts.</p>
        </div>
        <div className='why-info'>
            <h1>Why Learn & Grow ?</h1>
            <div className='why-sub'>
            <div style={{textAlign:"center",justifyContent:'center',alignItems:"center"}}>
                <img src="https://www.edutech.com/tools/img/why/lifelong.png" alt="" />
                <h1 style={{width:"120px"}}>Lifelong Learning</h1>
            </div>
            <div style={{textAlign:"center",justifyContent:'center',alignItems:"center"}}>
                <img src="https://www.edutech.com/tools/img/why/deep.png" alt="" />
                <h1 style={{width:"120px"}}>Deep Understanding</h1>
            </div>
            <div style={{textAlign:"center",justifyContent:'center',alignItems:"center"}}>
                <img src="https://www.edutech.com/tools/img/why/future.png" alt="" />
                <h1>Future Forward</h1>
            </div>
            </div>
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