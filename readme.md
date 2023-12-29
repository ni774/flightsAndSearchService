# welcome to Fligh service

## project setup
- clone the project on your local
- Execute 'npm install' on the same path as of your root 
  directory of the downloeaded project
- Create a `.env` file in the root directory and add the
  following enviroment variable
    - `PORT = 3000`
- Inside the `src/config` folder create a new file  `config.  json`
   ```
    {
  "development": {
    "username": "<your db login name>",
    "password": "<your db password>",
    "database": "Flight_Search_DB_DEv",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
   ```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute
`npx sequelize db:migrate`
    
## DB Design
  - Airplane Table(id,model_number,capacity,created_at, updated_at)
  - Flight(id,src_city_id,dest_airport_id, deppartatue_time, arival_time)
  - Airport(id,name,city_id,address)
  - City(id,name)
  - 
