import search from '../../public/search.svg';
import logo from '../../public/logo.png';
import menu from '../../public/menu.svg';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <nav className="bg-myBlack w-full h-[60px] flex items-center justify-between px-[12px]">
            <Image src={menu} alt="menu" />
            <Image src={logo} alt="logo" className='w-[50px] h-[50px]' />
            <Image src={search} alt="search" className='w-[25px]' />
        </nav>
    );
};

export default Header;