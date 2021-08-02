import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
export default function Home() {

  const [newBranchs, setnewBranchs] = useState([]);

  function newlocationHandler(event){
    event.preventDefault();

    const branch = {
      // id: newBranchs.length + 1,
      location: event.target.location.value,
      minCustomer: event.target.mincust.value,
      maxCustomer: event.target.maxcust.value,
      avgCookies: event.target.avgcookie.value,
    }
    
    setnewBranchs([...newBranchs , branch]);
  }

  return (
    <div className="">

      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex bg-green-500 text-black-100 p-3 items-center">
        <h1 className="font-semibold text-2xl font-sans">Cookie Stand Admin</h1>
      </header>

      <main className=" flex flex-col my-10 justify-center mx-auto h-full items-center">

        <div className=" bg-green-300 rounded-md w-3/4">
          <legend className=" mb-4 text-center">
            <h2 className=" m-10 font-medium text-2xl ">Create Cookie Stand  </h2>

            <form className="flex flex-wrap mx-3" onSubmit={newlocationHandler}>
              <label className=" flex w-full my-5 "><p className=" w-1/12">Location</p>
              <input className=" w-11/12 " name="location" />
              </label>
              <label className="w-3/12" ><p class="text-sm">Minimum Customers per Hour </p>
              <input className="px-5 w-11/12 " name="mincust" type="number" min="0"/>
              </label>
              <label className="w-3/12 " ><p class="text-sm">Maximum Customers per Hour</p>
              <input className=" px-5 w-11/12" name="maxcust" type="number" min="0"/>
              </label>
              <label className="w-3/12" ><p class="text-sm">Average Cookies per Sale </p>
              <input className="px-5 w-11/12" name="avgcookie" type="number" step="0.1"></input>
              </label>
              <input className=" bg-green-500 w-3/12 text-center" type="submit" value="Create" />
            </form>

          </legend>
        </div>

        <div className="flex flex-col text-center">
          <p class=" p-5 ">Report Table Coming Soon... </p>

          {
              newBranchs.map(item => {
                return(
                  
                    <p class="font-mono text-gray-500">{JSON.stringify(item)}</p>
                  
                )
              })
            }

        </div>

      </main>

      <footer className="bg-green-500 text-black-100 p-4 ">
        <p>&copy;2021</p>
      </footer>
    </div>
  )
}
