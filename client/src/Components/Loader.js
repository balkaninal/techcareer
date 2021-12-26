import React from 'react'

const Loader = () => {
    return (
        <div>
            <button type="button" className="bg-rose-800" disabled>
                <svg className="animate-spin h-8 w-8 mr-3 " viewBox="0 0 24 24">
                    
                </svg>
                Processing...
            </button>
        </div>
    )
}

export default Loader
