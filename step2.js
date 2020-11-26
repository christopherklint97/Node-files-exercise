const axios = require('axios');
const { cat } = require('./step1')

function webCat(url) {
    axios.get(path)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}

if (process.argv[2].slice(0, 4) === 'http') {
    webCat(process.argv[2]);
} else {
    cat(process.argv[2]);
}

// export an object
module.exports = { webCat: webCat };