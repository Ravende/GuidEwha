import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainPage from "./components/MainPage";
import DetailPageEcc from "./components/DetailPageEcc";
import RuleBook from "./components/RuleBook";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/detailPage/ECC" element={<DetailPageEcc />} />
          <Route path="/ruleBook" element={<RuleBook />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
