const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db,  
    {
        useUnifiedTopology: true,
        useNewUrlParser: true   
    })
    .then(() => {
        console.log('Conexión a la base de datos establecida')
    
        app.listen(config.port, () => {
            console.log(`API REST corriendo en: http://localhost:${config.port}`)
        })
    })
    .catch(err => {
        console.log(`DB Connection Error: ${err.message}`);
    });