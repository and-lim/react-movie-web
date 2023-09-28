import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className='bg-gray-900 text-white text-center flex justify-center flex-col gap-2 items-center w-full py-2'>
            <h1 className="text-3xl pt-3">Movie Website</h1>
            <div className="w-10/12 mx-auto bg-white" style={{height:'1px'}}></div>
            <p>copyright &copy; and-lim</p>
        </footer>

    </div>
  )
}

export default Footer