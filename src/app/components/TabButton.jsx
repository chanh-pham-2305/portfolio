import React from 'react'

const TabButton = ({active, selectTab, children}) => {
    const buttonClasses = active
        ? 'text-white border-b border-purple-500'
        : 'text-[#ADB7BD]'
    return (
        <button
            onClick={selectTab}
        >
            <p className={`mr-3 font-bold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
}

export default TabButton