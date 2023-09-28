
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [userDetails, setuserDetails] = useState(() => {
        const storedUserDetails = localStorage.getItem("userDetails");
        return storedUserDetails ? JSON.parse(storedUserDetails) : {};
    });

    useEffect(() => {
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
    }, [userDetails]);

    return (
        <UserContext.Provider value={{ userDetails, setuserDetails }}>
            {children}
        </UserContext.Provider>
    );
}
