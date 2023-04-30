import Cards from './components/cards/Cards'
import CounterySelector from './components/countrySelector/CountrySelector'
import Chart from './components/chart/Chart'


import { useEffect } from "react";
import { useState } from "react";


const App = () => {
  const [ data, setData ] = useState(null)
  const [ counteryName, setCountryName ] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://api.covid19api.com/summary')
        const data = await res.json()
        setData(data)
      } catch (error) {
        console.log('Error fetching data from an API: ', error)
      }
    }
    fetchData();
  }, [])

 
  return ( 
    <div className="container">
    { data && <Cards country = {data.Global} /> }
    <CounterySelector/>
    <Chart />
    </div>
  );
}
 
export default App;