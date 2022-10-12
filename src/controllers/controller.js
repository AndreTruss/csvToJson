const csv = require("csvtojson");
const path = require('path')

exports.multiColumns = async (req, res) => {
    try {
        if (req.file.mimetype == "text/csv") {
            let csvFileName = req.file.originalname;
            let csvFilePath = path.join( __dirname, "..", "..", "inputUpload", csvFileName )
            //Convert to json multicolumns
            const jsonArray = await csv({ checkType: true }).fromFile( csvFilePath )
            res.status( 201 ).json( jsonArray )
        }
        else { res.status( 404 ).json({ message: 'csv file not found' }); }
    } catch (err) { 
        res.status( 500 ).json({ message: 'Error converting to JSON' }); 
    }
}

exports.oneColumn = async (req, res) => {
    try {
        if ( req.file.mimetype == "text/csv" ) {
            let csvFileName = req.file.originalname;
            let csvFilePath = path.join( __dirname, "..", "..", "inputUpload", csvFileName )
            
            const column = req.params.column
            //Create a json file from csv and control if column exists
            const jsonFile = await csv().fromFile( csvFilePath )
            const jsonKey = Object.keys( jsonFile[0] )
            const findColumn = jsonKey.find( (key) => key === column )

            if ( findColumn ){
                const csvColumn = new RegExp(`${column}`);
                //Convert to json only one column
                const jsonArray = await csv({ checkType: true, includeColumns: csvColumn }).fromFile( csvFilePath )
                res.status( 201 ).json( jsonArray )   
            }
            else { res.status( 404 ).json({ message: `Column value must be an integer between 1 and ${jsonKey.length}` }); }
        }
        else { res.status( 404 ).json({ message: 'csv file not found' }); }
    } catch (err) { 
        res.status( 500 ).json({ message: 'Error converting to JSON' }); 
    }
}