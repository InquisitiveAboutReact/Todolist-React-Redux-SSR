## Clone the project
git clone <url> 

Go to the project folder and run the below commands 
  
1. To install dependencies 

npm install 

2. Generate the production build to run the app in Express ( You don't need to generate build to run the app in Client port ( 3000 ) ) 
  
 `npm run build`


3. Runs the app in the Express server ( port 8088 )  with production build

'npm ssr' 

** npm start && npm ssr can be run in parallel to monitor the performance ( in network tab of the browser ) both in Client and Server port

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


