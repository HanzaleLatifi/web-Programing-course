'use client'
import { createContext, useContext, useState } from 'react';

// Create the context
const AuthContext = createContext();

// Create a provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
// Custom hook to use the context
export function useAuthProvider() {
  return useContext(AuthContext);
}
