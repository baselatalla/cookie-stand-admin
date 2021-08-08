import axios from "axios";
import { BsTrash } from "react-icons/bs";
import {useState} from "react";

export default function Table(props){

    const [removeid, setremoveid] = useState('');
    function remove_handler(event){
      event.preventDefault();
      let id = parseInt(event.target.id);
      console.log(typeof(id))
      remove_requst(id)
    }
    async function remove_requst(id){
      const config = {headers: {'Authorization': 'Bearer ' + props.token}};
      const response = await axios.delete(`https://cookie-stand-api.herokuapp.com/api/v1/cookie-stands/${id}`, config);
      if (response.status == 201){
       props.getdataFromAPI();
      }}
    return(
        <div className="flex flex-col text-center">
         
        {
              (props.newBranchs.data.length === 0)?<p className="font-mono text-black-500">No Cookie Stand Available</p>:
              <table className="w=1/2 mx-auto my-4 p-3">
              <thead>
                <tr className=" ">
                  <th className=" bg-green-600 p-2 w-1/12">Location</th>
                    {
                    props.time.map(item =>{
                        return(
                            <th className=" bg-green-600">{item}</th>
                        )
                    })
                    
                    }
                  <th className=" bg-green-600">Total</th>
                </tr>
              </thead>
              <tbody>
                {
                  
                  props.newBranchs.data.map(item => {
                    return(
                      <tr>
                        <td  className=" flex flex-row bg-green-300 border border-black w-28 justify-between items-center" >{item.location}<BsTrash  id={item.id} onClick={remove_handler}/></td>
                        {
                            item.hourly_sales.map(ele =>{
                                
                                return(
                                    <td className=" bg-green-300 border border-black">{ele}</td>
                                    )
                                  })
                                }
                                
                        
                      </tr>
                    )
                  })
                }
                
              </tbody>
              <thead>
                <tr>
                  <th className=" bg-green-400">Total</th>
                    {
                            props.totals.map(ele=>{
                                return(
                                    <th className=" bg-green-400">{ele}</th>
                                )
                            })
                    }
                  
                </tr>
              </thead>
            </table>
        }

        </div>
    )
}