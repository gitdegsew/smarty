import React from 'react'
interface Props{
    children:React.ReactNode,
    className?:string
}
const Container = ({children,className}:Props) => {
  return (
    <div className={`${className} w-full mx-auto px-6 py-10 `} >{children}</div>
  )
}

export default Container