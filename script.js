const File = require('./models/file');
const fs = require('fs');
const connectDB = require('./config/db');
connectDB();

async function deleteData() {
    //deleting all the files after 24 hours
    const pastDate = new Date(Date.now() - 1000 * 60 * 60 * 24);
    const files = await File.find({ createdAt: {$lt: pastDate} });
    if(files.length) {
        for(const file of files) {
            try {
                fs.unlinkSync(file.path);
                await file.remove();
                console.log(`Successfully deleted ${file.filename}`);
            } catch(err) {
                console.log(`Error while deleting file ${err}`);
            }
        }
        console.log('Job Done');
    }
}

deleteData().then(process.exit);

// deleteData().then(() => {
    
//     process.exit();
// })