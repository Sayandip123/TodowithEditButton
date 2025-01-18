import { useState } from "react"

export default function Form(){
  const model = {
    Firstname  : '',
    Lastname : '',
    Email : '',
    Username : '',
    Password : '',
    Mobile : ''
  }
  const[form,setForm] = useState(model)
  function events(e){
      e.preventDefault();
      const input = e.target;
      const value = input.value;
      const key = input.name;
      const name =  setForm({...form,[key]:value})
      
  }
return(<><div className=" min-h-screen w-full bg-white flex justify-center items-center ">
  {JSON.stringify(form)}
  
  <div className="h-[68vh] p-4 w-[25vw] border-2 border-black rounded-md text-center  "> 
  <h1 className=" text-center border-2 rounded-md w-fit p-2 mx-auto border-black m-2">SignUp Form</h1>
  <form>
    <div className="flex mt-5 flex-col justify-self-center" >
    <label className>Firstname
   </label>
    <input onChange={events}  className="border-2  border-gray-400 " placeholder="Enter First Name"  type="text" name="Firstname" />
    <label>Lastname</label>
    <input onChange={events} className="border-2 border-gray-400" type="text" placeholder="Enter Last Name" name="Lastname" />
    <label>Email</label>
    <input onChange={events}   className="border-2 border-gray-400" type="text" placeholder="Johndoe@mail.com" name="Email" />
    <label>Username</label>
    <input onChange={events}   className="border-2 border-gray-400" type="text" placeholder="John doe" name="Username" />
    <label>Password</label>
    <input onChange={events}   className="border-2 border-gray-400" type="password" placeholder="***" name="Password" />
    <label>Mobile</label>
    <input onChange={events}   className="border-2 border-gray-400" type="Number" placeholder="1234567890" name="Mobile" />
    <button className="m-5 p-2 rounded-md bg-black text-white">Submit</button>
       </div>
   
    
  </form>

  </div>
  </div></>)
}
