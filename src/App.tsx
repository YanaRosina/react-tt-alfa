import React from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import CardDetailPage from "./components/CardDetailPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardContainer />} />
        <Route path="/card/:id" element={<CardDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
