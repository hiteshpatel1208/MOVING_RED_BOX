import React from 'react'

export default function Redbox(props) {
    return (
        <>
            <div className={`car ${props.moveCar ? 'move-right': 'move-left'}`}>
            </div>
        </>
    )
}
