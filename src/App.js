import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import './index.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />}>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forget-password" element={<ForgotPasswordPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
