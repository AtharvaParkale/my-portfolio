import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from './Components/AboutUs/AboutUs.jsx';
import ContactUs from './Components/ContactUs/ContactUs';
import TermsCondition from './Components/Policies/TermsCondition/TermsCondition';
import PrivacyPolicy from './Components/Policies/PrivacyPolicy/PrivacyPolicy.jsx'
import ConfPolicy from './Components/Policies/ConfPolicy/ConfPolicy.jsx'
import DiscPolicy from './Components/Policies/DiscPolicy/DiscPolicy.jsx'
import DemoForm from './Components/SectionEight/Forms/DemoForm/DemoForm';
import FreeTrial from './Components/SectionEight/Forms/FreeTrial/FreeTrial';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="termscondition" element={<TermsCondition />} />
      <Route path="privacypolicy" element={<PrivacyPolicy />} />
      <Route path="confpolicy" element={<ConfPolicy />} />
      <Route path="discpolicy" element={<DiscPolicy />} />
      <Route path="demoform" element={<DemoForm />} />
      <Route path="freetrial" element={<FreeTrial />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
