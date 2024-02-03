import "./App.css";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import Home from "./pages/index.jsx";
import Inquiry from "./pages/inquiry.jsx";
import WeChat from "./pages/weChat.jsx";
import ChatBot from "./pages/chatBot.jsx";
import CompanyProfile from "./pages/companyProfile/index.jsx";
import ServiceIntroduction from "./pages/serviceIntroduction/index.jsx";
import PlanList from "./pages/planList/index.jsx";
import CorporationsStep1 from "./pages/contact/corporations/corporations-step1.jsx";
import CorporationsStep2 from "./pages/contact/corporations/corporations-step2.jsx";
import IndividualsStep1 from "./pages/contact/individuals/individuals-step1.jsx";
import IndividualsStep2 from "./pages/contact/individuals/individuals-step2.jsx";
import Individuals from "./pages/contact/individuals/index.jsx";
import PrivacyPolicy from "./pages/privacyPolicy/index.jsx";
import FAQ from "./pages/FAQ/index.jsx";
import Report from "./pages/report/index.jsx";
import Article from "./pages/report/article.jsx";
import Dress from "./pages/dress/index.jsx";
import RetouchAlbum from "./pages/retouchAlbum/index.jsx";
import ProduceCrew from "./pages/produceCrew/index.jsx";
import Concept from "./pages/concept/index.jsx";
import Scene from "./pages/scene/index.jsx";
import Studio from "./pages/studio/index.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className={"container"}>
        <Header></Header>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route
              path="/service-introduction"
              element={<ServiceIntroduction />}
            />
            <Route path="/plans" element={<PlanList />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/wechat" element={<WeChat />} />
            <Route path="/chat-bot" element={<ChatBot />} />
            <Route path="/corporations-step1" element={<CorporationsStep1 />} />
            <Route path="/corporations-step2" element={<CorporationsStep2 />} />
            <Route path="/individuals" element={<Individuals />} />
            <Route path="/individuals-step1" element={<IndividualsStep1 />} />
            <Route path="/individuals-step2" element={<IndividualsStep2 />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Report" element={<Report />} />
            <Route path="/Report/Article" element={<Article />} />
            <Route path="/Dress" element={<Dress />} />
            <Route path="/retouch-album" element={<RetouchAlbum />} />
            <Route path="/produce-crew" element={<ProduceCrew />} />
            <Route path="/concept" element={<Concept />} />
            <Route path="/scene" element={<Scene />} />
            <Route path="/studio" element={<Studio />} />
          </Routes>
        </Router>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
