
const fakeUser = {
    username: "Minho",
    loggedIn: false,
}


export const trending = (req, res) => res.render("home",{pageTitle:"Home", fakeUser, });
export const see = (req, res) => res.render("watch", {pageTitle:"Watch"});
export const edit = (req, res) => res.render("edit", {pageTitle:"Edit"});
export const search = (req, res) => res.send("Search", {pageTitle:"Search"});
export const upload = (req, res) => res.send("Upload", {pageTitle:"Upload"});
export const deleteVideo = (req, res) => {
    console.log(req.params); 
    return res.send("Delete Video");
}