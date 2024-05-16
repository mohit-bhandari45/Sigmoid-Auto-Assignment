import React from 'react'
import 'animate.css';

const Card2 = ({ image, title, price, quantity, id }) => {
    return (
        <div className='animate__animated animate__slideInUp w-[85%] flex justify-between items-center font-[Helvetica] bg-[#F5F5F5] py-5 mb-5 rounded-xl px-20'>
            <div className="imageselements flex justify-center items-center gap-14">
                <div className="img">
                    <img className='w-[15vw] h-[29vh]' src={image} alt="" />
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-3xl font-bold'>{title}</h1>
                    <div className="quantity font-medium"><span>Quantity:</span>{quantity}</div>
                    {/* <div className="price text-xl">{price}</div> */}
                </div>
            </div>
            <div className="paid text-xl">Paid</div>
        </div>
    )
}

export default Card2