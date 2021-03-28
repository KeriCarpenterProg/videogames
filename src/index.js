import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import axios from "axios";

let apiKey = [
  "b1916123652250288e5524d86b275108",
  "52a08eaa3e0c932c655ef9cfb8739ceb",
  "0441631dbf13c03d81036146f6dafc15",
  "8ce877dc2b29f8e245c041acedcff5ec"
];
let currentKey = 3;
// declaring a database retrieved games object
let gamesDB = [];
// declaring a games object as well as all the fields and all the screenshots
let games = [
  {
    name: "Miles Morales",
    game_id: "1",
    release: "12th November 2020",
    genre: "Shooter",
    platforms: "PS5",
    summary:
      "The latest adventure in the Spider-Man universe will build on and expand ‘Marvel’s Spider-Man’ through an all-new story. Players will experience the rise of Miles Morales as he masters new powers to become his own Spider-Man.",
    cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2dwe.jpg",
    screenshots: [
      "https://images.igdb.com/igdb/image/upload/t_original/sc8bir.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/sc6qem.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/ar6dr.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/gxrqetgeesus7abzlxsu.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/bofvxbntojlvpwueihdg.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/yyynkripplx43svs9ifw.jpg"
    ],
    video: "https://www.youtube.com/embed/T03PxxuCfDA"
  },
  {
    name: "Call of Duty",
    game_id: "83727",
    release: "25th October 2019",
    genre: "Shooter",
    platforms: "PS4",
    summary: "Not available right now.  Try again later.",
    cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wkf.jpg",
    screenshots: [
      "https://images.igdb.com/igdb/image/upload/t_original/sc6qen.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/sc6qem.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/ar6dr.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/gxrqetgeesus7abzlxsu.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/bofvxbntojlvpwueihdg.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/yyynkripplx43svs9ifw.jpg"
    ],
    video: "https://www.youtube.com/embed/3pyfKYwlGhQ"
  },
  {
    name: "Marvel's Spider Man",
    game_id: "19565",
    release: "7th September, 2018",
    genre: "Adventure",
    platforms: "PS4",
    summary: "Not available right now.  Try again later.",
    cover: "https://images.igdb.com/igdb/image/upload/t_original/co1r77.jpg",
    screenshots: [
      "https://images.igdb.com/igdb/image/upload/t_original/sc6khp.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/sc6khv.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/sc6khw.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/sc6khq.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/sc6khs.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/sc6kht.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/sc6khu.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/sc6khx.jpg"
    ],
    video: "https://www.youtube.com/embed/q4GdJVvdxss"
  },
  {
    name: "God of War",
    game_id: "19560",
    release: "20th April 2018",
    genre: "Adventure, Role-playing(RPG)",
    platforms: "PS4",
    summary:
      "It is a new beginning for Kratos. Living as a man, outside the shadow of the gods, he seeks solitude in the unfamiliar lands of Norse mythology. With new purpose and his son at his side, Kratos must fight for survival as powerful forces threaten to disrupt the new life he has created...",
    cover: "https://images.igdb.com/igdb/image/upload/t_original/co1tmu.jpg",
    screenshots: [
      "https://images.igdb.com/igdb/image/upload/t_original/mknszfnaifmhssbrmkpl.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/r7hpzsqic1bjwyzn1bnq.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/wunlbofh23trw0u67gms.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/s2zdtxopibrfjbxvpj5h.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/o4mg2wvhlcikaogvvzqe.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/gpt3d0gpue5mat4kkso6.jpg"
    ],
    video: "https://www.youtube.com/embed/GdJtyZRPsUM"
  },
  {
    name: "Death Stranding",
    game_id: "19564",
    release: "20th November 2019",
    genre: "Adventure, Role-playing(RPG)",
    platforms: "PS4",
    summary: "Not available right now.  Try again later.",
    cover: "https://images.igdb.com/igdb/image/upload/t_original/co1syk.jpg",
    screenshots: [
      "https://images.igdb.com/igdb/image/upload/t_original/mknszfnaifmhssbrmkpl.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/r7hpzsqic1bjwyzn1bnq.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/wunlbofh23trw0u67gms.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/s2zdtxopibrfjbxvpj5h.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/o4mg2wvhlcikaogvvzqe.jpg",
      "https://images.igdb.com/igdb/image/upload/t_original/gpt3d0gpue5mat4kkso6.jpg"
    ],
    video: "https://www.youtube.com/embed/tCI396HyhbQ"
  }
];

// Prints all the HTML for the game text fields as well as the pictures associated with the game -- takes the games object
class Text extends React.Component {
  constructor() {
    super();
    this.state = {
      screenshots: [],
      name: "",
      summary: "",
      activeGame: 0,
      coverNum: 0
    };
    this.clickMe = this.clickMe.bind(this);
    this.getScreenshots = this.getScreenshots.bind(this);
    this.getGame = this.getGame.bind(this);
  }

  getScreenshots(index) {
    this.state.activeGame = index;
    const testNum = games[this.state.activeGame].game_id;
    const dataString =
      "fields game,image_id, height, width;where game=" + testNum + ";";
    // console.log(dataString)
    axios({
      url:
        "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/screenshots",
      method: "POST",
      headers: {
        Accept: "application/json",
        "user-key": apiKey[currentKey]
      },
      data: dataString
    })
      .then((response) => {
        // console.log("Response from server: " + JSON.stringify(response))
        const data = response.data;
        const _data = data.map((value) => {
          const _url =
            "https://images.igdb.com/igdb/image/upload/t_original/" +
            value.image_id +
            ".jpg";
          return {
            url: _url
          };
        });
        console.log(
          "These are the new screenshots I retrieved from the DB: " +
            JSON.stringify(_data)
        );
        this.setState({ screenshots: _data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getGame(index) {
    this.state.activeGame = index;
    const testNum = games[this.state.activeGame].game_id;
    const dataString =
      "fields name, id, summary, first_release_date, genres, platforms, artworks, cover, screenshots, videos, url, websites; where id=(" +
      testNum +
      ");";
    // console.log(dataString)
    axios({
      url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
      method: "POST",
      headers: {
        Accept: "application/json",
        "user-key": apiKey[currentKey]
      },
      data: dataString
    })
      .then((response) => {
        // console.log("Response from server: " + JSON.stringify(response))
        const data = response.data;
        let tempObject = {};
        tempObject.name = data[0].name;
        tempObject.game_id = data[0].id;
        tempObject.summary = data[0].summary;
        tempObject.cover = data[0].cover;
        this.setState({ name: tempObject.name, summary: tempObject.summary });
        console.log(
          "This is the game data I got from the database " +
            JSON.stringify(tempObject)
        );
        // Future Work:  arrays need to be mapped and saved in my new object gamesDB.
        // This will be a future enhancement. the fields artworks, platforms, screenshots, videos need this.
        // const _data = data.map((value)=>{
        //   const _url = "https://images.igdb.com/igdb/image/upload/t_original/"+value.image_id+".jpg"
        //   return {
        //     url: _url
        //   }
        // }
        // )
        // console.log("After update:  These are the new screenshots I retrieved from the DB: " + JSON.stringify(_data))
        // this.setState({screenshots: _data})
      })
      .catch((err) => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.getScreenshots(this.state.activeGame);
    this.getGame(this.state.activeGame);
  }

  clickMe(index) {
    this.setState((prevState) => ({ activeGame: index }));
    const testNum = games[this.state.activeGame].game_id;
    const dataString =
      "fields game,image_id, height, width;where game=" + testNum + ";";
    // console.log(dataString)
    // console.log(this.state.activeGame);

    // Calling the Database -- tried to put this into a function but that was just not working!
    this.getScreenshots(this.state.activeGame);
    this.getGame(this.state.activeGame);
  }

  render() {
    const urls = this.state.screenshots ? (
      this.state.screenshots.map((value, index) => (
        <div class="col s12 m4" key={index}>
          <img src={value.url} width="100%" />
        </div>
      ))
    ) : (
      <span>NOTHING HERE</span>
    );
    const currentGame = this.state.activeGame;

    return (
      <div class="section">
        <div class="container">
          <div class="row">
            <div class="grey darken-1 row center">
              <div class="col s12 m3">
                <a
                  onClick={() => this.clickMe(0)}
                  href="#"
                  class="waves-effect waves-light btn grey btn-large opac-btn"
                >
                  {games[0].name}
                </a>
              </div>
              <div class="col s12 m3">
                <a
                  onClick={() => this.clickMe(1)}
                  href="#"
                  class="waves-effect waves-light btn grey btn-large opac-btn"
                >
                  {games[1].name}
                </a>
              </div>
              <div onClick={() => this.clickMe(2)} class="col s12 m3">
                <a
                  href="#"
                  class="waves-effect waves-light btn grey btn-large opac-btn"
                >
                  {games[2].name}
                </a>
              </div>
              <div onClick={() => this.clickMe(3)} class="col s12 m3">
                <a
                  href="#"
                  class="waves-effect waves-light btn grey btn-large opac-btn"
                >
                  {games[3].name}
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col s12 m4">
              <img src={games[this.state.activeGame].cover} width="100%" />
            </div>
            <div class="col s12 m8">
              <h1>{games[this.state.activeGame].name}</h1>
              <p>{games[this.state.activeGame].summary}</p>
              <p>Release Date: {games[this.state.activeGame].release}</p>
              <p>Platforms: {games[this.state.activeGame].platforms}</p>
              <p>Genre: {games[this.state.activeGame].genre}</p>
            </div>
          </div>

          <div class="row">
            <div class="col s12 m4">
              <div class="video-container">
                <iframe
                  width="560"
                  height="315"
                  src={games[this.state.activeGame].video}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope;
                  picture-in-picture"
                  allowfullscreen
                />
              </div>
            </div>
            {urls}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Text />, document.getElementById("text"));

// const rootElement = document.getElementById("text");
// ReactDOM.render(<App />, rootElement);
