import AuthContext from './AuthContext';

export default function AuthProvider({user, setUser, children}) {
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
}
