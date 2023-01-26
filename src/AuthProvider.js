import AuthContext from './AuthContext';

function AuthProvider({user, setUser, children}) {
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
}