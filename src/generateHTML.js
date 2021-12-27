const fs = require('fs');

//generates the html and puts it into the dist folder
const writeFile = fileContent => {
    return new Promise((resolve, reject)=> {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'file created!'
            });
        });
    });
};

//makes a copy of the style.css from the src folder and places the copy into the dist folder
const copyFile = () => {
    return new Promise((resolve, reject)=> {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'style sheet created!'
            });
        });
    });
};

module.exports = {writeFile, copyFile};