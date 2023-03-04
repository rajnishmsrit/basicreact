import './index.css'
import {useEffect, useState} from 'react'

const ContentList = () => {
    const [data, setData] = useState(null);
    const [searchInput, setSearchInput] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const url = "https://dummyjson.com/users"
        
    useEffect(() => {
        let ignore = false;
        fetch(url)
        .then((response) => response.json())
        .then(data => {
            if(!ignore){
                setData(data);
                setFilteredData(data?.users?.filter((item) => item.firstName!=""));
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
        return () => {
            ignore = true;
        }
    }, [url])

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    useEffect(() => {
        setFilteredData(
            data?.users?.filter((item) => {
                return item.firstName.toLowerCase().startsWith(searchInput.toLowerCase());
            })
        );
    }, [searchInput])

    //console.log(filteredData);
    
    return (
        <>
        <input 
        className="userListSearch"
        placeholder="Search robots"
        onChange={handleChange}
        ></input>
        <ul className="usersList">
            {filteredData?.map(item => (
                <li className="usersListItem" key={"item"+item.id}>
                    <img src={item.image}></img>
                    <span>{item.firstName} {item.lastName}</span>
                </li>
                )
            )}
        </ul>
        </>
    );
}

export default ContentList