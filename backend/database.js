const mongoose=require('mongoose');
async function dbConn(){
    const conn=await mongoose.connect('mongodb+srv://priyanshu:<db_root>@cluster0.9nzpg7m.mongodb.net/crud-live-aiml?retryWrites=true&w=majority&appName=Cluster0');
    if(conn){
        console.log("database connect sucessfully");
    }
    else{
        console.log("datbase not connect");
    }
}
module.exports=dbConn;