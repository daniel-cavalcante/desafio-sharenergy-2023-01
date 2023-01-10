import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import RandomUserPage from "./components/RandomUser/RandomUserPage";

import Missing from "./components/Missing";
import SearchRandomUserPage from "./components/RandomUser/SearchRandomUserPage";
import CatStatusCode from "./components/CatStatusCode/CatStatusPage";
import RandomDog from "./components/RandomDog/RandomDogPage";
import LoginPage from "./components/Login/LoginPage";
import Clients from "./components/Clients/ClientsPage";
import EditClient from "./components/Clients/EditClientPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<RandomUserPage />} />
          <Route
            path='/home/search/:keywords'
            element={<SearchRandomUserPage />}
          />
          <Route path='/cat' element={<CatStatusCode />} />
          <Route path='/dog' element={<RandomDog />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/clients/edit/:_id' element={<EditClient />} />
          <Route path='*' element={<Missing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
