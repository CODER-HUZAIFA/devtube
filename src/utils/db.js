const { mongoose } = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://Huzaifa:Huzaifa@cluster0.dk5otlp.mongodb.net/")
        console.log(`Database is connected at: ${connect.connection.host}`)
        
    } catch (error) {
        console.error(`Database Error ${error}`)
    }

}

module.exports = connectDB;