import React from 'react'



const Title = (
    <h1 id="title" key="h1">
      Food Valli React
    </h1>
  );

export default function Header() {
  return (
    <>
        <div className="APP_header">
        {Title} 
        <div className="iteam_alin">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Card</li>
          </ul>
        </div>
      </div>

    </>
  )
}
