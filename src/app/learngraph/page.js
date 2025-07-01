




'use client'
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line , BarChart, Bar} from 'recharts';
// , XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
  const data = [
    { week: 'Wk 1', applications: 120 },
    { week: 'Wk 2', applications: 20 },
    { week: 'Wk 3', applications: 67 },
    { week: 'Wk 4', applications: 20 },
        { week: 'Wk 6', applications: 250 },
         { week: 'Wk 7', applications: 102 },
    { week: 'Wk 8', applications: 210 },
    { week: 'Wk 9', applications: 170 },
    { week: 'Wk 10', applications: 25 },
        { week: 'Wk 11', applications: 200 },


  ];


const Page=()=>{
return <div className="py-20 px-5 grid gap-20 md:px-20">

<ResponsiveContainer width="100%" height={300} className="border border-[#008751] border-3 ">
    <LineChart data={data}>
<CartesianGrid strokeDasharray="3 3"/>
<XAxis dataKey="Week" />
<YAxis />
<Tooltip />

<Line type="monotone" dataKey="applications"  stroke='#008751
'/>
    </LineChart>

</ResponsiveContainer>
<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="week" />
              <YAxis  />

    <Tooltip />
    <Bar dataKey="applications" fill="#008751" />
  </BarChart>
</ResponsiveContainer>
</div>
}
export default Page