# E-Portfolio

An e-portfolio project that I created for myself with ReactJS. The project can be reused by developers
looking for a simple, dynamic, editable template to build on. The project template allows connection to
azure cosmos db to host the data. It allows github connection for allowing visitors to leave comments
as well.

## Demo
https://mohammad-a-immam.azurewebsites.net

## Instructions

- src/data/DataProvider: React Context providing the data using example_data.json
- if you are connecting to azure cosmos db:
  - fill in credentials in `.env.example` and rename the file to `.env`.
  - you need an azure function hosting to get the data from the azure function and availing it through an HTTP endpoint. Check out https://github.com/mohammad-a-immam/azure-functions
- if you are connecting github signin, 
  - fill in credentials in `.env.example` and rename the file to `.env`.
  - you need an azure function hosting to exchange the github auth code for an access token. Check out https://github.com/mohammad-a-immam/azure-functions.

## Run locally
- Make sure you have nodejs v.14 installed
- use `npm start` to start the react project

## Hostings and deployment
- Azure App Service
- Deployed through FTP (FileZilla)



