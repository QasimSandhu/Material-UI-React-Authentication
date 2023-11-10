import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/pages/Layout';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import LoginReg from './components/pages/auth/LoginReg';
import ResetEmail from './components/pages/auth/ResetEmail';
import ResetPassword from './components/pages/auth/ResetPassword';
import Dashboard from './components/pages/auth/Dashboard';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />} >
                        <Route index element={<Home />} />
                        <Route path='Contact' element={<Contact />} />
                        <Route path='login_registration' element={<LoginReg />} />
                        <Route path='reset_email' element={<ResetEmail />} />
                        <Route path='reset_password' element={<ResetPassword />} />
                    </Route>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='*' element={<h1>Error 404 Page not Found !!</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
