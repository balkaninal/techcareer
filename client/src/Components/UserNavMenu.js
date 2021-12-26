import React from 'react'

const UserNavMenu = (props) => {
    const dropdownOpen = true
    return (
        <>
            <div class="flex justify-center p-12">
              
                <div class="relative">
                    <button class="block h-12 w-auto rounded-full overflow-hidden focus:outline-none">
                       <div className="username">{props.username}</div>
                    </button>
                    
                    <div class="absolute right-0 w-40 mt-2 py-2 bg-white border rounded shadow-xl">
                        <a href="#" class="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white">Settings</a>
                        <div class="py-2">
                            <hr></hr>
                        </div>
                        <a href="#" class="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white">
                            Logout
                        </a>
                    </div>
                 
                </div>
            
            </div>
        </>
    )
}

export default UserNavMenu
