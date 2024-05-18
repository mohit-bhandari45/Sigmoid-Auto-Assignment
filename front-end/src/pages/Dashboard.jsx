import React, { useEffect, useState } from 'react'
import Card2 from '../components/DashboardComps/Card2'
import 'animate.css';

const Dashboard = () => {

  const [itemsmap, setitemsmap] = useState([])
  const doAsync = async() => {
      let a = await fetch("http://localhost:3000/getitems");
      let data = await a.json();
      setitemsmap(data)
  }
  useEffect(()=>{
    doAsync();
  }, [])


  if(!itemsmap){
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="main flex justify-center gap-8 h-[18vh] w-full font-[Helvetica] animate__animated animate__slideInDown">
        <div className="nav flex justify-between items-center w-[95%]">
          <div className="logo flex justify-center items-center gap-2">
            <a href="/"><img className='w-20 h-20 rounded-full' src="src/assets/top-view-table-full-delicious-food-composition_23-2149141352.webp" alt="" /></a>
          </div>

          <div className="info flex justify-center items-center gap-5">
            <div className="btn">
              <button className='text-lg md:text-4xl font-bold flex justify-center items-center text-black py-0 md:py-1 px-2 md:px-4 rounded-full'>Dashboard</button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full mx-auto flex flex-col justify-center items-center gap-5'>
        {itemsmap.map((item) => {
          return <Card2 key={item.id} image={item.image} title={item.title} price={item.price} quantity={item.quantity} id={item.id} />
        })}
      </div>
    </div>
  )
}

export default Dashboard
