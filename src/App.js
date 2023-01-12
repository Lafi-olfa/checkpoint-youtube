import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNav from "./components/headerNav/HeaderNav";
import MainPage from "./components/mainPage/MainPage";
import DescriptionVideo from "./components/descriptionVideo/DescriptionVideo";
import MoreInfo from "./components/moreInfo/MoreInfo";
import CommentsUsers from "./components/comments/CommentsUsers";
import VideosList from "./components/videosList/VideosList";

function App() {
  return (
    <div className="App">
      <HeaderNav />
     <div style={{ display:"flex",justifyContent:"space-around"}}>
     <div>
        <MainPage/>
       <DescriptionVideo/>
       <MoreInfo/>
      <CommentsUsers/>
      </div>
      {/* videosList */}
      {/* display:"flex",  margin:"20px"*/}
      <VideosList />

     </div>

    </div>
  );
}

export default App;
