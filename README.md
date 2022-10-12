
# NUWE CHALLENGE CSV TO JSON

Node js REST API to convert CSV files to JSON response

## Install project

* Clone the project from Github:
  ```
  git clone https://github.com/AndreTruss/csvToJson.git
  ```
* Inside csvToJson folder install dependecies:
  ```
  npm i
  ```  
* Run the project inside csvToJson folder (node src/index.js) to localhost port 3000:
   ```
  npm start
  ```
  with nodemon:
  ```
  npm run dev
  ```

## Endpoints

POSTMAN collection contains following requests:

- POST /csvToJson - Body form-data {key: csvFile} to upload CSV file from inputUpload folder
- POST /csvToJson/:column - Body form-data {key: csvFile} to upload CSV file and Params {key: column} to convert into JSON response only that column 
