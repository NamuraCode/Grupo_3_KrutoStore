const paht = require('paht');

controller = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, '../view/index.html'))
    }
}

module.exports = controller;