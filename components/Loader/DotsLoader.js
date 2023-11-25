import React from 'react'
import styles from '../../styles/DotsLoader.module.css'

const DotsLoader = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center" style={{background: 'rgba(0, 0, 0, 0.3)'}}>
        <div className="bg-white fixed left-2/3 border py-2 px-5 rounded-lg flex items-center flex-col">
            <div className="block relative w-20 h-5 mt-2">
                <div className={`${styles.loaderDot} absolute top-0 mt-1 w-3 h-3 rounded-full bg-[#5B2C89]`}></div>
                <div className={`${styles.loaderDot} absolute top-0 mt-1 w-3 h-3 rounded-full bg-[#5B2C89]`}></div>
                <div className={`${styles.loaderDot} absolute top-0 mt-1 w-3 h-3 rounded-full bg-[#5B2C89]`}></div>
                <div className={`${styles.loaderDot} absolute top-0 mt-1 w-3 h-3 rounded-full bg-[#5B2C89]`}></div>
            </div>
            <div className="text-gray-500 text-xs font-light mt-2 text-center">
            Please wait...
            </div>
        </div>
    </div>
  )
}

export default DotsLoader