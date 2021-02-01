import React from 'react'

const Container = ({children, padded, id}) => {
    return (
        <div
        id={id} className="py-12">
        <div className={`${padded ? "sm:py-6 sm:px-6": ""} max-w-full mx-auto px-0`}>

        {children}
        </div>
    </div>
    )
}

export default Container
