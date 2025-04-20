import { Route, Routes } from 'react-router-dom';
import './App.css';
import Month from './Month';
import Top from './Top';
import RegisterName from './RegisterName';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Month />} />
            <Route path="/top" element={<Top />} />
            <Route path="/register-name" element={<RegisterName />} />
        </Routes>
    );
}

export default App;
