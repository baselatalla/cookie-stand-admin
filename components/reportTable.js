export default function Table(props){
    return(
        <div className="flex flex-col text-center">
         
        {
              (props.newBranchs.length === 0)?<p class="font-mono text-black-500">No Cookie Stand Available</p>:
              <table className="w=1/2 mx-auto my-4 p-3">
              <thead>
                <tr className=" ">
                  <th className=" bg-green-600 p-2">Location</th>
                    {
                    props.time.map(item =>{
                        return(
                            <th className=" bg-green-600">{item}</th>
                        )
                    })
                    
                    }
                  <th className=" bg-green-600">Totale</th>
                </tr>
              </thead>
              <tbody>
                {
                  
                  props.newBranchs.map(item => {
                    return(
                      <tr>
                        <td className=" bg-green-300 border border-black">{item.location}</td>
                        {
                            item.randCookPerHour.map(ele =>{
                                 
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