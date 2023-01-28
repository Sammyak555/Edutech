import React from 'react'
import Singlesubject from "../components/Singlesubject"

type obj={
    title: string,
    image: string,
    drivelink: string,
    subject: string,
    description: string
}
export async function getServerSideProps() {
    let res = await fetch('http://localhost:4002/books?subject=Science')
    let data = await res.json()
    return {
        props: {
            data:data
        }, // will be passed to the page component as props
    }
}

const science = (data:any) => {
    const arrdata=data.data
    console.log(arrdata)

  return (<div className='maths-page'>
  <div className='math-comp'>
            <div className='subject-heading'>
            <img src="https://cdn-icons-png.flaticon.com/128/2022/2022299.png" alt="" />
            <h1>ＳＣＩＥＮＣＥ</h1>
            </div>
  <div className='math-topics'>
  {
      arrdata&&
      arrdata.map((el:obj,i:number)=>{
         return <Singlesubject {...el}/>
      })
  }
  </div>
  </div>
  </div>
)
}

export default science