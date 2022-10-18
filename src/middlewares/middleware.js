const csv = require("csvtojson");
const path = require('path')
const fs = require('fs')

exports.notFoundRoute = ( req, res ) => {
    return res.status( 404 ).send({ message: `Url ${req.originalUrl} not found.` });
  },
  
  exports.readCSV = async() => {
    try {
    // let csvFileName = req.file.originalname;
    let csvFilePath = path.join( __dirname, "..", "..", "inputUpload" )
    console.log(csvFilePath)
    fs.readdir(csvFilePath, async(err, files) => {
        if (err) console.log(err)
        else{
            for( arch of files ) {
                if (path.extname(arch) == ".csv"){
                console.log(`${csvFilePath}/${arch}`);
                const jsonArray = await csv({ checkType: true }).fromFile( `${csvFilePath}/${arch}` )
                //console.log(jsonArray)
                let name = path.basename(arch, '.csv')
                fs.writeFileSync(`${csvFilePath}/${name}.json`, JSON.stringify(jsonArray))
                }
            }
          }
        })
        }
    
         catch (err){
            console.log({ message: 'Error converting to JSON' }); 
        }
        
      };