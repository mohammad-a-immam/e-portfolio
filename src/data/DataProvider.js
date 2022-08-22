import React, {createContext, useEffect, useState} from 'react'
import Loading from "../components/loading/Loading";


export const DataContext = createContext();
export const DataProvider = (props) => {
    const [data, setData] = useState();


    useEffect(() => {
        const defaultData = require("./example_data.json.json");
        setData(defaultData);
    }, []);

    return (
        <DataContext.Provider value={data}>
            {
                data ?
                    props.children :
                    <Loading/>
            }
        </DataContext.Provider>
    )
}