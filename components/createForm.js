export default function Form(props){
    return(
        <div className=" bg-green-300 rounded-md w-3/4">
        <legend className=" mb-4 text-center">
          <h2 className=" m-10 font-medium text-2xl ">Create Cookie Stand  </h2>

          <form className="flex flex-wrap mx-3" onSubmit={props.newlocationHandler}>
            <label className=" flex w-full my-5 "><p className=" w-1/12">Location</p>
            <input className=" w-11/12 " name="location" />
            </label>
            <label className="w-3/12" ><p className="text-sm">Minimum Customers per Hour </p>
            <input className="px-5 w-11/12 " name="mincust" type="number" min="0"/>
            </label>
            <label className="w-3/12 " ><p className="text-sm">Maximum Customers per Hour</p>
            <input className=" px-5 w-11/12" name="maxcust" type="number" min="0"/>
            </label>
            <label className="w-3/12" ><p className="text-sm">Average Cookies per Sale </p>
            <input className="px-5 w-11/12" name="avgcookie" type="number" step="0.1"></input>
            </label>
            <input className=" bg-green-500 w-3/12 text-center" type="submit" value="Create" />
          </form>

        </legend>
      </div>
    )
}