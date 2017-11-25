module.exports = {
    go_index: (req, res, next) => {
        res.render('index', { title: 'Express' });
    }
}