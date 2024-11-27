
import React, {useState} from 'react';
import Link from 'next/link';

interface ButtonProps {
    label:string,
    classes:string,
    link: string,
}

  
const Button: React.FC<ButtonProps> = ({label,classes,link}) => {
    return (
       <Link href={link} className={`${classes}`}>{label}</Link>
    );
};

export default Button;
