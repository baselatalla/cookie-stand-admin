import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Form from '../components/createForm'
import Table from '../components/reportTable'
import {time} from '../data'

export default function Home() {

  const [newBranchs, setnewBranchs] = useState([]);
  
  const [totals, setTotals] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  
  function storInArray(max, min, avg){
    let array = [];
    array[15] = 0;
    for (let i = 0 ; i < 15; i++ ){
      let rand = Math.floor(Math.random() * (max - min + 1) + min);
      let numOfCookies = Math.floor(avg * rand);
      array[i] = numOfCookies;
      array[15] += array[i];
      totals[i]+= array[i]
      
      
      
    }
    totals[15] += array[15]
    return array;
  }

  function newlocationHandler(event){
    event.preventDefault();
    let arrayData = storInArray(parseInt(event.target.maxcust.value), parseInt(event.target.mincust.value), parseInt(event.target.avgcookie.value))
    const branch = {
      // id: newBranchs.length + 1,
      location: event.target.location.value,
      minCustomer: event.target.mincust.value,
      maxCustomer: event.target.maxcust.value,
      avgCookies: event.target.avgcookie.value,
      randCookPerHour: arrayData
      
      
    }
    
    setnewBranchs([...newBranchs , branch]);
  }

  return (
    <div className="">

      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className=" flex flex-col my-10 justify-center mx-auto h-full items-center">

        <Form newlocationHandler= {newlocationHandler}/>

        <Table time={time} newBranchs={newBranchs} totals={totals}/>

      </main>

      <Footer newBranchs={newBranchs}/>
    </div>
  )
}
