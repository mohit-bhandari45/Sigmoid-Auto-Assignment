import React, { useState } from 'react'
import Card from '../components/DashboardComps/Card'
import Navbar from '../components/DashboardComps/Navbar'
import { useNavigate } from 'react-router-dom'

const FoodOrder = () => {
    const navigate=useNavigate()

    const [items, setitems] = useState([
        {
            id: 1,
            image: "src/assets/mstitem.webp",
            title: "Chemo",
            price: "Rs 799",
        },
        {
            id: 2,
            image: "src/assets/noodles.webp",
            title: "Noodles",
            price: "Rs 499",
        },
        {
            id: 3,
            image: "src/assets/roti.webp",
            title: "Roti",
            price: "Rs 660",
        },
        {
            id: 4,
            image: "src/assets/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.webp",
            title: "Burger",
            price: "Rs 1999",
        },
    ])

    const handleClick = async () => {
        let a = await fetch("http://localhost:3000/handleadd", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(selecteditems),
        })
        await a.json();
        navigate("/dashboard")
    }



    const [selecteditems, setselecteditems] = useState([])

    return (
        <>
            <Navbar />
            <div className='flex flex-col w-full justify-center items-center gap-5 py-10'>
                {items.map((item) => {
                    return <Card key={item.id} image={item.image} title={item.title} price={item.price} selecteditems={selecteditems} setselecteditems={setselecteditems} id={item.id} />
                })}
            </div>
            <div className="button w-full flex justify-center items-centerc my-10">
                <button className='py-6 px-16 font-[Helvetica] bg-black rounded-full text-4xl text-white font-bold' onClick={handleClick}>Add to Cart</button>
            </div>
        </>
    )
}

export default FoodOrder