
import React, {useState} from 'react';
import Link from 'next/link';
import { CgMenu,CgClose } from "react-icons/cg";
interface NavbarProps {
    logo:string,
    links: { label: string; href: string }[];
}

  
const Navbar: React.FC<NavbarProps> = ({logo,links}) => {
    const [isActive,setIsActive] = useState<number|null>(null);
    const [isOpenNav,setIsOpenNav] = useState<boolean>(false);

    const setActive = (index:number) => {
        setIsActive(isActive === index ? null : index)
    } 


    return (
        <div className="flex justify-between items-start md:items-center px-5 flex-col md:flex-row">
            <div className="flex items-center justify-between w-full">
                <img src={`${logo}`} alt="Company Logo" />
                <div className="flex" onClick={()=>setIsOpenNav(!isOpenNav)}>
                    <CgMenu  className= {`${isOpenNav ? 'hidden' : ''} text-3xl cursor-pointer md:hidden`} />
                    <CgClose  className= {`${isOpenNav ? '': 'hidden'} text-3xl cursor-pointer md:hidden`} />
                </div>
            </div>
            <nav  className={`${isOpenNav ? 'flex' : 'hidden'} transition-all duration-300 border-b md:border-0 border-gray-200 w-full py-3 md:flex my-5 justify-start items-start flex-col md:flex-row md:items-center md:gap-10 md:justify-center`} >
                {links.map((link,index) => (
                    <Link onClick={()=>setActive(index)} className={`text-md relative 
                    before:content-[''] before:left-0 before:absolute before:h-[1px] before:w-0 before:bottom-1 before:bg-white
                    before:transition-all before:duration-300 hover:before:w-full 
                    uppercase font-normal border-transparent border-b-2 py-1 hover:border-hover:font-boldtransition-all duration-200
                    md:px-2 md:my-0 
                    `}
                    key={index} href={link.href}>{link.label}</Link>
                ))}
            </nav>
        </div>
    );
};

export default Navbar;
