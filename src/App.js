import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import AuthContext from './context/AuthContext';
import axios from 'axios';
import getCookie from './utils/getCookie';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [csrftoken, setCsrftoken] = useState(null);

  useEffect(() => {
    const isAuthCookie = getCookie('is_authenticated');
    const usernameCookie = getCookie('username');

    if (isAuthCookie) {
      setIsAuthenticated(true);
      setUsername(usernameCookie);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const getCsrfToken = async () => {
      const response = await axios.get('/api/members/get-csrftoken/');
      setCsrftoken(response.data.csrftoken);
    }
    getCsrfToken();
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, username, csrftoken }}>
      <Layout />
    </AuthContext.Provider>
  );
}

export default App;