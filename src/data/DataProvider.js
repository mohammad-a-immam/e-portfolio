import React, {createContext, useEffect, useState} from 'react'
import Loading from "../components/loading/Loading";
import axios from "axios";


export const DataContext = createContext();
export const DataProvider = (props) => {
    //data from cosmosdb
    const [profile, setProfile] = useState();
    const [data, setData] = useState();



    useEffect(() => {
        const cosmosDbHelper_URI = process.env.REACT_APP_COSMOSDB_AZUREFUNCTIONURI;
        const databaseId = process.env.REACT_APP_COSMOSDB_DATABASEID;
        const containerId = process.env.REACT_APP_COSMOSDB_CONTAINERID;
        if(cosmosDbHelper_URI && cosmosDbHelper_URI != "your_cosmosdb_azurefunction_uri"){
            const cosmosConfig = {databaseId, containerId};

            //get each data separately from cosmos db using the helper function hosted on azure

            function getProfile (){
                cosmosConfig.itemId = "profile";
                return axios.post(cosmosDbHelper_URI,cosmosConfig);
            }

            function getExperience (){
                cosmosConfig.itemId = "experience";
                return axios.post(cosmosDbHelper_URI,cosmosConfig);
            }

            function getFeatures (){
                cosmosConfig.itemId = "features";
                return axios.post(cosmosDbHelper_URI,cosmosConfig);
            }

            function getEducation (){
                cosmosConfig.itemId = "education";
                return axios.post(cosmosDbHelper_URI,cosmosConfig);
            }

            function getExpertise(){
                cosmosConfig.itemId = "expertise";
                return axios.post(cosmosDbHelper_URI,cosmosConfig);
            }

            function getPosts(){
                cosmosConfig.itemId = "posts";
                return axios.post(cosmosDbHelper_URI,cosmosConfig);
            }

            function getProjects(){
                cosmosConfig.itemId = "projects";
                return axios.post(cosmosDbHelper_URI,cosmosConfig);
            }

            function getComments(){
                cosmosConfig.itemId = "comments";
                return axios.post(cosmosDbHelper_URI,cosmosConfig);
            }

            Promise.all([getProfile(),getExperience(),
                getEducation(), getExpertise(), getPosts(), getProjects(), getComments()])
                .then((responses)=>{
                console.log(responses);
                const _data = {
                    profile:responses[0].data,
                    experience:responses[1].data,
                    education:responses[2].data,
                    expertise:responses[3].data,
                    posts:responses[4].data,
                    projects:responses[5].data,
                    comments:responses[6].data,
                };
                setData(_data);
            })
        }
        else {
            //no cosmos db uri to connect to! get local json data!
            const defaultData = require("./example_data.json");
            setData(defaultData);
            setProfile(defaultData.profile);
        }
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