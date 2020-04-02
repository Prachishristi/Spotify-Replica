const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require("cors");

const app = express();

const PORT = 4000;

const fileUpload = require("express-fileupload");

// const Song = require('./addSong/Song')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const artistModel = require("./models/artist");
const SongModel = require("./models/songModel");

// connection to db

mongoose
  .connect("mongodb://localhost:27017/spotify", { useNewUrlParser: true })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("unable to connect with the database", err);
  });

const songModel = require("./models/songModel");
const artist = require("./models/artist");

app.get("/api/song", async (req, res) => {
  res.sendFile(path.resolve(__dirname, 'front/index.html'));
});

app.get('/api/new', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'front/addSong.html'));
});

// add new song
app.post('/api/song', async (req, res) => {
  try {
    const { songName, releaseDate, avgRating } = req.body;
    console.log("songName : ", songName)

    const data = { songName, releaseDate, avgRating };

    await new SongModel().save(data);

    res.json({
      success: true
    })
  } catch (error) {
    throw error;
  }
});

// update song
app.put('api/song', async (req, res) => {
  try {
    const { songName } = req.body;
    console.log("songName :", songName)
    if (!songName) {
      return res.send({ error: "Song Name does not exist" });
    }

    const updatedSong = await BlogModel.update(
      { songName: songName },

    );

    res.json(updatedblog);
  } catch (error) {
    throw error;
  }
});

// delete song
app.delete('api/song', async (req, res) => {
  try {
    const { songName } = req.body;
    console.log("songName :", songName)

    if (!songName) {
      return res.send({ error: "enter a valid song" });
    }
    await songModel.remove({ songName: songName });
    res.json({ success: true });
  } catch {
    console.error("/api/song", error);
  }
});



app.listen(PORT, () => {
  console.log(`App is now running on port ${PORT}!!!`)
});