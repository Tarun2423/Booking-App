import React from './Featured.css'

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="Images/Berlin.png" alt="" className='featuredImg'/>
        <div className="featuredTitle">
          <h1>Berlin</h1>
          <h2>200 Plus Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="Images/Dubai.png" alt="" className='featuredImg'/>
        <div className="featuredTitle">
          <h1>Dubai</h1>
          <h2>400 Plus Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="Images/Paris.jpg" alt="" className='featuredImg'/>
        <div className="featuredTitle">
          <h1>Paris</h1>
          <h2>100 Plus Properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured