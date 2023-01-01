import Image from 'next/image'

const Hero1: React.FC = () => {
    return (
        <div className="bg-myBrow w-full h-screen md:flex">
            <div className="bg-gradient-to-r from-[#1A1A1A] to-[#1A1A1A]/60 w-full h-[65%] md:h-full">
                <div className='w-full h-full flex flex-col items-end justify-center'>
                    <h1 className='text-2xl text-myWhite w-full text-center'>Heading</h1>
                    <div className='w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-myBlack flex flex-col text-myWhite p-3 gap-3'>
                        <h3 className='text-[20px] text-center'>Subheading</h3>
                        <p className='text-left text-[18px] tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores earum aperiam maiores porro accusantium culpa.</p>

                    </div>
                </div>
            </div>
            <Image src='/hero1.png' alt="hero1" width={965} height={1118} quality={100} />
        </div>
    );
};

export default Hero1;