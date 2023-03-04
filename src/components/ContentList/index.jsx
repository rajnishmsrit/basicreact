import './index.css'
import {useEffect, useState} from 'react'

const ContentList = () => {
    const [data, setData] = useState(null);
    
    const url = "https://dummyjson.com/users"
        
    useEffect(() => {
        let ignore = false;
        fetch(url)
        .then((response) => response.json())
        .then(data => {
            if(!ignore){
                setData(data)
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
        return () => {
            ignore = true;
        }
    }, [url]);

    console.log("data :: ", data);
    return (
    {data.users.map((item) => (
        <img src={item.image}></img>
    ))}
    );
}

export default ContentList