import React from 'react'
import {Featureslist} from '../helpers/Featureslist';
import NewFeat from '../Components/NewFeat';
import '../styles/Feature.css';
function Features() {
  return (
    <div className="feature">
    <h1 className="feat">Our Features</h1>
    <div className="featList">
      {Featureslist.map((newFeat, key) => {
        return (
<NewFeat
key={key}
 Image={newFeat.Image} 
 Amenities={newFeat.Amenities} 
 />
        )
         
      })}
   </div>
  </div>
  );
}

export default Features;