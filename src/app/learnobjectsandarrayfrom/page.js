



const Page=()=>{
  
    const profile = {
  name: 'Quwam',
  age: 20,
  skills: ['React', 'Next.js', 'Express'],
  location: 'Nigeria',
};
return <div className="container py-20 px-20 grid gap-5">



<div>
    <h1>profile 1  using object keys</h1>
   <ul>
     {Object.keys(profile).map((item,index)=>{
        return <li key={index}>
            
            {item}
             </li>
    })}

   </ul>
</div>

   <div>
   <h1>profile 2  using object values</h1>

   <ul>
     {Object.values(profile).map((item,index)=>{
        return<>
        {Array.isArray(item)? <> {item.map((i,index)=>{

            return <li key={index}> {i} </li>
        })} </>: <> <li key={index}> {item} </li> </>}
        </>
             
    })}
    
   </ul>
   </div>

<div>
    <h1>profile 3 using object entries</h1>
   <ul>
     {Object.entries(profile).map(([key,value])=>{
        return<>
        {Array.isArray(value)? <> {value.map((i,index)=>{

            return <li key={index}> {i} </li>
        })} </>: <> <li key={key}> {value} </li> </>}
        </>
             
    })}
    
   </ul>
</div>
{[...Array(4)].map((index)=>{
return <div className="h-40 w-40 bg-black rounded" key={index}>  </div>
})}
</div>
}
export default Page