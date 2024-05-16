import React from 'react'
import { useState } from 'react'
import 'animate.css';

const Card = ({ image, title, price, selecteditems, setselecteditems, id }) => {
    const [animate, setAnimate] = useState(false);
    const [animate2, setAnimate2] = useState(false);

    const handleadd = () => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 300);
        setselecteditems([...selecteditems, { image: image, title: title, price: price }])
    }

    const handleDelete = (itemId) => {
        setAnimate2(true);
        setTimeout(() => setAnimate2(false), 300);
        setselecteditems(selecteditems.filter(item => item.id !== itemId));
    }


    return (
        <div className='animate__animated animate__slideInUp w-[85%] flex justify-between items-center font-[Helvetica] bg-[#F5F5F5] py-5 rounded-xl px-20'>
            <div className="imageselements flex justify-center items-center gap-14">
                <div className="img">
                    <img className='w-[15vw] h-[29vh]' src={image} alt="" />
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-3xl font-bold'>{title}</h1>
                    <div className="price text-xl">{price}</div>
                </div>
            </div>
            <div className="delete flex justify-center items-center gap-2">
                <div onClick={handleadd} className={animate ? ' transform scale-75 plus cursor-pointer' : ' transform scale-100 plus cursor-pointer'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                        <path d="M12 4V20M20 12H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div onClick={() => { handleDelete(id) }} className={animate2 ? ' transform scale-75 minus cursor-pointer' : ' transform scale-100 minus cursor-pointer'}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M20 12L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </div>
            </div>
        </div>
    )
}

export default Card