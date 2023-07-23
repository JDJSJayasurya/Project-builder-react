import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Aggregate from "./routes/Aggregate";
import Analytics from "./routes/Analytics";
import Avatar from "./routes/Avatar";
import Chat from "./routes/Chat";
import Coding from "./routes/Coding";
import Copywriting from "./routes/Copywriting";
import Fun from "./routes/Fun";
import FeaturedFitness from "./routes/FeaturedFitness";
import GenerativeArt from "./routes/GenerativeArt";
import GenerativeVideo from "./routes/GenerativeVideo";
import ImageImprovement from "./routes/ImageImprovement";
import ImageScanning from "./routes/ImageScanning";
import Marketing from "./routes/Marketing";
import Music from "./routes/Music";
import Presentation from "./routes/Presentation";
import Productivity from "./routes/Productivity";
import PromtGuides from "./routes/PromtGuides";
import Research from "./routes/Research";
import SelfImprovement from "./routes/SelfImprovement";
import Seo from "./routes/Seo";
import SocialMedia from "./routes/SocialMedia";
import TextToSpeech from "./routes/TextToSpeech";
import TextToVideo from "./routes/TextToVideo";
import Travel from "./routes/Travel";
import VideoEditing from "./routes/VideoEditing";
import VideoModulation from "./routes/VideoModulation";
import WebsiteBuilder from "./routes/WebsiteBuilder";
import Category from "./components/Category";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/:category" element={<Category></Category>}></Route>
          <Route path="/aggregate" element={<Aggregate></Aggregate>}></Route>
          {/* <Route path="/aggregate" element={<Aggregate></Aggregate>}></Route>
          <Route path="/analytics" element={<Analytics></Analytics>}></Route>
          <Route path="/avatar" element={<Avatar></Avatar>}></Route>
          <Route path="/chat" element={<Chat></Chat>}></Route>
          <Route path="/coding" element={<Coding></Coding>}></Route>
          <Route
            path="/copyWriting"
            element={<Copywriting></Copywriting>}
          ></Route>
          <Route path="/fun" element={<Fun></Fun>}></Route>
          <Route
            path="/featured Fitness"
            element={<FeaturedFitness></FeaturedFitness>}
          ></Route>
          <Route
            path="/generative Art"
            element={<GenerativeArt></GenerativeArt>}
          ></Route>
          <Route
            path="/generative Video"
            element={<GenerativeVideo></GenerativeVideo>}
          ></Route>
          <Route
            path="/image Improvement"
            element={<ImageImprovement></ImageImprovement>}
          ></Route>
          <Route
            path="/image Scanning"
            element={<ImageScanning></ImageScanning>}
          ></Route>
          <Route path="/marketing" element={<Marketing></Marketing>}></Route>
          <Route path="/music" element={<Music></Music>}></Route>
          <Route
            path="/presentation"
            element={<Presentation></Presentation>}
          ></Route>
          <Route
            path="/productivity"
            element={<Productivity></Productivity>}
          ></Route>
          <Route
            path="/promt guides"
            element={<PromtGuides></PromtGuides>}
          ></Route>
          <Route path="/research" element={<Research></Research>}></Route>
          <Route
            path="/self Improvement"
            element={<SelfImprovement></SelfImprovement>}
          ></Route>
          <Route path="/SEO" element={<Seo></Seo>}></Route>
          <Route
            path="/social Media"
            element={<SocialMedia></SocialMedia>}
          ></Route>
          <Route
            path="/text-to-speech"
            element={<TextToSpeech></TextToSpeech>}
          ></Route>
          <Route
            path="/text-To-Video"
            element={<TextToVideo></TextToVideo>}
          ></Route>
          <Route path="/travel" element={<Travel></Travel>}></Route>
          <Route
            path="/video Editing"
            element={<VideoEditing></VideoEditing>}
          ></Route>
          <Route
            path="/voice Modulation"
            element={<VideoModulation></VideoModulation>}
          ></Route>
          <Route
            path="/website Builder"
            element={<WebsiteBuilder></WebsiteBuilder>}
  ></Route>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
