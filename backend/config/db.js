const mongoose = require('mongoose')

const connectDB = async () => 
{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        const host_uri = conn.connection.host.red.underline
        console.log(`MongoDB Connected : ${host_uri}`)
    } catch (error)
    {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB
