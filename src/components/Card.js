import React from 'react'

export const Card = ({ day, temp, tempUnit, onClick }) => {
    return (
        <div className="card" onClick={onClick}  >
            <div><h3>{day}</h3></div>
            <div><h3>{temp} °{tempUnit}</h3></div>
            
        </div>
           
        
    )
}
