module.exports.get404Page = (req, res, next) => {
    res.render("404", {title: "Page Not Found", path:""})
};
