import React from 'react'

const ListWaitingLoader = () => {
    return (
        <>
            <div className="w-full h-96  flex items-center justify-center flex-col">
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                <span className="font-semibold text-gray-500 mt-2">Yükleniyor...</span>
            </div>
        </>
    )
}

export default ListWaitingLoader
