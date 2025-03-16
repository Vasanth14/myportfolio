import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import SoftwareDevelopment from './services/SoftwareDevelopment';
import MobileDevelopment from './services/MobileDevelopment'
import BlockchainDevelopment from './services/Blockchain-development'
import AiMlDevelopment from './services/AiMl-Development'
import UiUxDevelopment from './services/Ui-Ux-development'
import DigitalMarketing from './services/Digital-Marketing'
import QaTestingService from './services/Qa-Development'
import HospitalManagementSystem from './products/HospitalManagementSystem';
import StaffManagementSystem from './products/StaffManagementSystem';
import HrManagement from './products/HrManagementSystem';
import CRM from './products/CRM';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact-us' element={<Contact />}/>
        <Route path='/software-development-services' element={<SoftwareDevelopment />}/>
        <Route path='/ai-ml-development-services' element={<AiMlDevelopment />}/>
        <Route path='/mobile-app-development-services' element={<MobileDevelopment />}/>
        <Route path='/ui-ux-design-services' element={<UiUxDevelopment />}/>
        <Route path='/digital-marketing-services' element={<DigitalMarketing />}/>
        <Route path='/blockchain-development-services' element={<BlockchainDevelopment />}/>
        <Route path='/qa-testing-services' element={<QaTestingService />}/>
        <Route path='/hospital-management-software' element={<HospitalManagementSystem />}/>
        <Route path='/staff-management-software' element={<StaffManagementSystem />}/>
        <Route path='/hr-management-software' element={<HrManagement />}/>
        <Route path='/customer-relationship-management-software' element={<CRM />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App