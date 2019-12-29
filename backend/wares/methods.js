module.exports = () => (req, res, next) => {
    res.success = function (data) {
        res.json({
            code: 0,
            data
        });
    };
    res.error = function (error) {
        res.json({
            code: 1,
            error
        });
    };
    next();
};