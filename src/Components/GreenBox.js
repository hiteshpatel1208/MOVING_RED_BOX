import React from 'react'

export default function Greenbox(props) {
    

    return (
        <>
            <div className='lane' onClick={e => e.preventDefault()} >
                {props.children}
            </div>
        </>
    )
}
