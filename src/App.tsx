import { Route, Routes } from 'react-router-dom';
import './App.css';
import Month from './Month';
import Top from './Top';
import RegisterName from './RegisterName';
import RegisterPayment from './RegisterPayment';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Month />} />
            <Route path="/top" element={<Top />} />
            <Route path="/register-name" element={<RegisterName />} />
            <Route path="/:id/register-payment" element={<RegisterPayment />} />
            <Route path="/:id/:year/:month" element={<Month />} />
        </Routes>
    );
}

export default App;
