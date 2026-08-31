import mongoose from 'mongoose';

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URL!);
        const connection =mongoose.connection;

        connection.on('Connected' , ()=>{
            console.log('MongoDB connected successfully');
        })

        //to hear the error
        connection.on('error' , (err)=>{
            console.log('MongoDB connection error. pleasse make sure mongodb is running' + err);
            process.exit();
        })

    }catch(error){
       console.log('Something goes wrong ! ');
       console.log(error);
    }
    
}