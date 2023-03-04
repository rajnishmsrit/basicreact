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
    }, [url])

    console.log(data);
        return (
            <ul>
                {data?.users?.map(item => (
                    <li key={"item"+item.id}>
                        <img src={item.image}></img>
                        <span>{item.firstName} {item.lastName}</span>
                    </li>
                    )
                )}
            </ul>
        );
}

export default ContentList