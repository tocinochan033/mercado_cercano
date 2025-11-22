import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage.jsx";
import RegisterPageCompany from "./RegisterPageCompany.jsx";
import RegisterPageUser from "./RegisterPageUser.jsx";
import LoginPage from "./LoginPage.jsx";
import FeedUI from "./FeedUI.jsx";
import { NotFoundPage } from "./NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/RegisterPageUser" element={<RegisterPageUser />} />
      <Route path="/RegisterPageCompany" element={<RegisterPageCompany />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/FeedUI" element={<FeedUI />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
