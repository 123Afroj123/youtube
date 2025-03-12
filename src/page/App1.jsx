import React,{useEffect,useState} from 'react'
import FetchData from './FetchData'
import Datacard from './Datacard'
const App1 = () => {
    const [data,setData]=useState(null)
    useEffect(() => {
      const fetchData = async () => {
        const result = await FetchData();
        setData(result);
      };
      fetchData();
    }, []);
    
  return (
    <div>
      {data && data.items.map(item => (
        <Datacard
          key={item.id.videoId}
          videoid={item.id.videoId}
          title={item.snippet.title}
          desc={item.snippet.description}
        />
      ))}
    </div>
  )
}

export default App1