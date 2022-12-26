import Router from './Pages/Router';
import { authService } from './firebase';
import { useEffect, useState } from 'react';
function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  });
  return (
    <div>{init ? <Router isLoggedIn={isLoggedIn} /> : 'Initializing...'}</div>
  );
}

export default App;
