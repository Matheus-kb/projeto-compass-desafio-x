import { useEffect, useContext } from "react";
import { UserContext } from "./userContext";

export function UserInfos() {
    const {user, setUser} = useContext(UserContext)

    return {
        user, 
        setUser
    }
}  