let userData = []
const fetchUser = async () => {
    await fetch("https://randomuser.me/api/?results=24")
        .then((res) => res.json())
        .then((data) => (userData = data.results));
        
    console.log(userData);
};
const userDisplay = async () => {
    await fetchUser();
    document.body.innerHTML = userData
        .map((user) =>
            `
            <div class= "card">
                <div class="img-logo">
                 <img id="photo"src=${user.picture.large} alt= >
                 <img id="logo" src="img/Frame 3 (1).png" alt="" />
                </div>
                <div class="text">
                    <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
                    <h2>${user.location.city}</h2>
                    <h1>${user.location.country}</h1>
                </div>
            </div>
            `
        ).join("")
}
userDisplay();