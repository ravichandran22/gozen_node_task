const fs = require('fs');


fs.readFile('sample.txt', 'utf8', (err, data) => {
    if(err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log('File Content:', data);
    
    const modifiedContent = data.toUpperCase();

    fs.writeFile('demo.txt', modifiedContent, 'utf8', err => {
        if(err){
            console.log('Error writing file:', err);
            return;
        }
        console.log('File Successfuly Created');
    })
})



