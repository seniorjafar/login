import React from 'react'
import { MdClose } from 'react-icons/md'

const Model = ({ children, close }) => {
    return (
        <>
            <div onClick={() => close(false)}></div>
            <div>
                <button onClick={() => close(false)}>
                    <MdClose/>
                </button>
                {children}
            </div>
        </>
    )
}

export default Model