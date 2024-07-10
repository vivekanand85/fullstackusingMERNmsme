import React from 'react'

const Dataview = ({title,data}) => {
    console.log('data',data);
  return (
    <div>
         <h2>{title}</h2>
         {
            data.map((item,index)=>{
                <li key={index}>
                 {
                    Object.values(item).join('*')
                 }
                </li>
            })
         }
    </div>
  )
}

export default Dataview