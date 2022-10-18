const express = require( 'express' );
const app = express();

const http = require( 'http' );
const server = http.createServer( app );

//const router = require( './routes/routeBarrio' );
const { notFoundRoute, readCSV } = require( './middlewares/middleware');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

readCSV()
//app.use( '/', router );

//app.use( notFoundRoute );

const PORT = 3000;
server.listen( PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
