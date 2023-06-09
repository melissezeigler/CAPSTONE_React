import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, onAuthStateChanged } from 'firebase/auth';
import { auth, Providers } from '../config/firebase';

//Hooks a function that lets you interact with the "state", which has information kind-of saved but only for a single "component".
// Props are used like variables and can pass state information around the different pages in the program.

interface Props {
    children: React.ReactNode;
}

const AuthChecker =({ children }: Props) => {
    const navigate = useNavigate();

    const signInOnClick = async () => {
      const response = await signInWithRedirect(auth, Providers.google);
  }
  //this is a hook, it starts with "use"  
  useEffect(() => {
    const auth_state = onAuthStateChanged(auth, (user) => {
      if (!user) {
        signInOnClick()
        navigate('/dashboard');
        
      }
    });
    return () => auth_state();
  }, [auth, navigate]);

  return (
    <>{children}</>
  )
}

export default AuthChecker