const app = require("./index");

const connect = require("./configs/db");



app.listen(2890, async function (){

    try{
        await connect();
        console.log("listening on port 2890");
    }
    catch(err) {
        console.log(err.message);
    }
   

});