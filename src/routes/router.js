const express = require( 'express' );
const controller = require( '../controllers/controller' );

const router = express.Router();

const multer = require('multer');
const upload = multer().single('csvFile');

router.post("/csvToJson", upload, controller.multiColumns);
router.post("/csvToJson/:column", upload, controller.oneColumn);

module.exports = router;