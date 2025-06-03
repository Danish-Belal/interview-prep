const corn = require('node-cron')

function schedularTasks(){
    console.log("Schedulaer1 is running",new Date().toLocaleString());
    
}

corn.schedule('0 * * * *', schedularTasks);