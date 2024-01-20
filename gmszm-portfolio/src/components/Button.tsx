import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className='bg black text-white font-sans py-2 px-6 rounded md:ml-8 hover:bg-indigo-600 
    duration-500'>
      {children}
    </button>
  );
};

export default Button;