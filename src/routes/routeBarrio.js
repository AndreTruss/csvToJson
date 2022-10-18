const express = require( 'express' );
const controller = require( '../controllers/control' );

const router = express.Router();

router.get("/barrios", controller.readCSV, controller.barrios);

module.exports = router;