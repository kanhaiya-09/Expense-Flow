async function getHomePage(req, res){
    res.render("home", {
        title: "Home",
        username: "Kanhaiya",
        projectName: "ExpenseFlow",
    })
}
module.exports ={
    getHomePage,
}