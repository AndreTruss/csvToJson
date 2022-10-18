
const fs = require('fs')


    
        //Convert to json multicolumns
        

        exports.barrios = async (req, res) => {
            try {
                const data = fs.readFile('../../inputUpload/padro.json')
                //console.log(data)
                res.status(201).json( data )
                
            } catch (err) {
                res.status( 500 ).json({ message: 'Name Barrio not found' }); 
        
            }
        }

   

exports.barrio = async (req, res) => {
    try {
        const data = readCSV()
        const {nameBarrio} = req.body
        
        const dataBarrio = data.find((barrio) => barrio.name === nameBarrio)
        res.status(201).json( dataBarrio )
        
    } catch (err) {
        res.status( 500 ).json({ message: 'Name Barrio not found' }); 

    }
}