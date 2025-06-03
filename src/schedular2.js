const corn = require('node-cron');
const path = require('path');
const fs = require('fs');

const invoiceData = require('../data/invoice.json');

// console.log(invoiceData);

function filterInvoice(){
    console.log("Schedular task started", new Date().toLocaleString());
    try{
        const paidInvoices = invoiceData.filter(data => data.status==="paid");
        console.log(paidInvoices);
        

        for (let i = invoiceData.length - 1; i >= 0; i--) {
                if (invoiceData[i].status === 'paid') {
                    invoiceData.splice(i, 1);
                }
            }
            console.log("Invoices data", invoiceData);
        
            
            fs.writeFileSync(
                path.join(__dirname, "../" , "data" , "invoice.json"), JSON.stringify(invoiceData), 'utf-8'
            )
             fs.writeFileSync(
                path.join(__dirname, "../" , "data" , "archive.json"), JSON.stringify(paidInvoices), 'utf-8'
            )

    }catch(err){
        console.log("error" , err);
        
    }
    console.log("Schedular task Finised", new Date().toLocaleString());
    
}

corn.schedule('*/30 * * * * *', filterInvoice)