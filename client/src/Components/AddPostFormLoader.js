import React from 'react'

const AddPostFormLoader = () => {
    return (
        <>
            <div className="w-full h-auto  flex items-center justify-center flex-col">
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                <span className="font-semibold text-gray-500 mt-2">Yükleniyor...</span>
            </div>
        </>
    )
}

export default AddPostFormLoader
