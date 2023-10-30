import React from 'react'

function NewFeat({Image,Amenities}) {
  return (
    <div className="feat">
        <div style={{backgroundImage: `url(${Image})`}}></div>
        <h1>{Amenities} </h1>
        </div>
  )
}

export default NewFeat