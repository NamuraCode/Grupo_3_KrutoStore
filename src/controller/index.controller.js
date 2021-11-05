const path = require('path');

controller = {
    index: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../view/index.html'))
    }
}

module.exports = controller;