var addSongButton = document.getElementById("addSongButton");

async function addNewSong() {
    var songName = document.getElementById("songName").value;
    var releaseDate = document.getElementById("releaseDate").value;
    // var avgRating = document.getElementById("avgRating").value;

    var data = { songName, releaseDate };

    // make a fetch request to the backend API
    const req = await fetch("http://localhost:4000/api/song", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const res = await req.json();
    console.log("res : ", res)
}
async function UpdateSong() {
    var songName = document.getElementById("songName").value;

    var data = { songName };

    // make a fetch request to the backend API
    const req = await fetch("http://localhost:4000/api/song", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const res = await req.json();
    console.log("res : ", res)
}
async function DeleteSong() {
    var songName = document.getElementById("songName").value;

    var data = { songName };

    // make a fetch request to the backend API
    const req = await fetch("http://localhost:4000/api/song", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const res = await req.json();
    console.log("res : ", res)
}

