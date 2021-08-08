import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import CookieStandHeader from './header'
import Footer from './footer'
import Form from './createForm'
import Table from './reportTable'
import {time} from '../data'
import axios from 'axios'
import { useEffect } from 'react' 

export default function CookieStandAdmin(props) {

  const [newBranchs, setnewBranchs] = useState([]);
  
  const [totals, setTotals] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  
  async function Post_request(data){
    const config = {headers: {'Authorization': 'Bearer ' + props.token}};
    const response = await axios.post('https://cookie-stand-api.herokuapp.com/api/v1/cookie-stands/', data, config);
    if (response.status == 201){
      getdataFromAPI();
    }}

    useEffect( () => {
      if (props.token){
        getdataFromAPI();
      }
    }, [props.token]);
  
  
    async function getdataFromAPI(){
  
      const config = {headers: {'Authorization': 'Bearer ' + props.token}};
      const branch = await axios.get(`https://cookie-stand-api.herokuapp.com/api/v1/cookie-stands/`, config);
      setnewBranchs(branch);
      console.log(branch)
    }

  function storInArray(max, min, avg){
    let array = [];
    array[14] = 0;
    for (let i = 0 ; i < 14; i++ ){
      let rand = Math.floor(Math.random() * (max - min + 1) + min);
      let numOfCookies = Math.floor(avg * rand);
      array[i] = numOfCookies;
      array[14] += array[i];
      totals[i]+= array[i]
      
      
      
    }
    totals[14] += array[14]
    return array;
  }

  function newlocationHandler(event){
      event.preventDefault();
      let arrayData = storInArray(parseInt(event.target.maxcust.value), parseInt(event.target.mincust.value), parseInt(event.target.avgcookie.value))
      
      const branch = {
        location: event.target.location.value,
        description:'',
        hourly_sales: arrayData,
        minimum_customers_per_hour: event.target.mincust.value,
        maximum_customers_per_hour: event.target.maxcust.value,
        average_cookies_per_sale: event.target.avgcookie.value,
        owner: null

      }
    
    
    Post_request(branch)
  }

  return (
    <div className="">

      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CookieStandHeader/>

      <main className=" flex flex-col my-10 justify-center mx-auto h-full items-center">

        <Form newlocationHandler= {newlocationHandler}/>

        <Table time={time} newBranchs={newBranchs} totals={totals} getdataFromAPI={getdataFromAPI} token={props.token}/>

      </main>

      <Footer newBranchs={newBranchs}/>
    </div>
  )
}
