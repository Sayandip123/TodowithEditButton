import axios from "axios"
import { useState } from "react"

export default function Data(){
 const [products,setProducts] = useState([])
 const [loading,setLoading] = useState(false)
  async function test(){
setLoading(true)
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      setProducts(response.data)
      
    } catch (error) {
      console.log("the error is",error)
    }
   finally{
    setLoading(false)
   }
  }

  return(<>
  <div>Let's add Data</div>
  <button onClick={test} className="p-2 border-2 border-black rounded-md m-2.5">Add Data</button>
  {loading && <h1>Loading...</h1>}
{products.map((itm,index)=>(
  <li key={index}>{itm.title}</li>
))}

  </>)
}