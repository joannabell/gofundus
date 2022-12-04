import React from "react";

const AuthenticationContext = React.createContext({
    currentUser: null,
    isAuthenticated: false
});

AuthenticationContext.displayName = "AuthenticationContext";

export default AuthenticationContext;