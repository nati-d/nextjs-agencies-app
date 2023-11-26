import React from 'react'
type ButtonProps={
    type:'button';
    title:string;
    variant:string;
}

const Button = ({type, title, variant}: ButtonProps) => {
  return (
    <button className={`py-2 px-8 rounded-md text-white border font-semibold ${variant}`}>
      {title}
    </button>
  )
}

export default Button
