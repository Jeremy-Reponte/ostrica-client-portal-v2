import React, { FC } from 'react';
import './App.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Portefeuille } from './pages/Portefeuille';
import { Rapportages } from './pages/Rapportages';
import { ErrorPage } from './pages/ErrorPage';
import LayoutWrapper from './components/LayoutWrapper';
import { Nieuws } from './pages/Nieuws';
import { Contact } from './pages/Contact';
import { Formulieren } from './pages/Formulieren';
import { Wachtwoord } from './pages/Wachtwoord';
import { Email } from './pages/Email';
import { Inbox } from './pages/Inbox';
import { LoginGebruikersnaam } from './pages/LoginGebruikersnaam';
import { LoginWachtwoord } from './pages/LoginWachtwoord';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='login-gebruikersnaam-vergeten' element={<LoginGebruikersnaam />} />
        <Route path='login-wachtwoord-vergeten' element={<LoginWachtwoord />} />
        <Route element={<LayoutWrapper />}>
          <Route path='/' element={<Home />} />
          <Route path='portefeuille' element={<Portefeuille />} />
          <Route path='rapportages' element={<Rapportages />} />
          <Route path='nieuws' element={<Nieuws />} />
          <Route path='contact' element={<Contact />} />
          <Route path='formulieren-wijziging' element={<Formulieren />} />
          <Route path='wachtwoord-wijziging' element={<Wachtwoord />} />
          <Route path='email-wijziging' element={<Email />} />
          <Route path='inbox' element={<Inbox />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
