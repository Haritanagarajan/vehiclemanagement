
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [userDetails, setuserDetails] = useState(() => {
        const storedUserDetails = localStorage.getItem("userDetails");
        return storedUserDetails ? JSON.parse(storedUserDetails) : {};
    });

    const [userName, setuserName] = useState(() => {
        const storeduserName = localStorage.getItem("userName");
        return storeduserName ? JSON.parse(storeduserName) : {};
    });

    const [CarDetails, setCarDetails] = useState(() => {
        const storedCarDetails = localStorage.getItem("CarDetails");
        return storedCarDetails ? JSON.parse(storedCarDetails) : {};
    });


    const [BrandDetails, setBrandDetails] = useState(() => {
        const storedBrandDetails = localStorage.getItem("BrandDetails");
        return storedBrandDetails ? JSON.parse(storedBrandDetails) : {};
    });


    const [FuelDetails, setFuelDetails] = useState(() => {
        const storedFuelDetails = localStorage.getItem("FuelDetails");
        return storedFuelDetails ? JSON.parse(storedFuelDetails) : {};
    });



    const [ServiceDetails, setServiceDetails] = useState(() => {
        const storedServiceDetails = localStorage.getItem("ServiceDetails");
        return storedServiceDetails ? JSON.parse(storedServiceDetails) : {};
    });


    useEffect(() => {
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
    }, [userDetails]);


    useEffect(() => {
        localStorage.setItem("userName", JSON.stringify(userName));
    }, [userName]);


    useEffect(() => {
        localStorage.setItem("ServiceDetails", JSON.stringify(ServiceDetails));
    }, [ServiceDetails]);


    useEffect(() => {
        localStorage.setItem("FuelDetails", JSON.stringify(FuelDetails));
    }, [FuelDetails]);

    useEffect(() => {
        localStorage.setItem("BrandDetails", JSON.stringify(BrandDetails));
    }, [BrandDetails]);



    useEffect(() => {
        localStorage.setItem("CarDetails", JSON.stringify(CarDetails));
    }, [CarDetails]);


    return (
        <UserContext.Provider value={{ userDetails, setuserDetails, CarDetails, setCarDetails, BrandDetails, setBrandDetails, FuelDetails, setFuelDetails, ServiceDetails, setServiceDetails ,userName,setuserName}}>
            {children}
        </UserContext.Provider>
    );
}
