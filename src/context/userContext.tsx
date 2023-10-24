import { createContext, useState } from "react";

interface UserType {
    email: string ,
      password: string ,
      enteredName: string,
      enteredDate: string ,
      enteredProfession: string ,
      enteredCountry: string ,
      enteredCity: string ,
      relationship: string,
      id: number 
    }

export const UserContext = createContext(
    {} as {user: UserType | undefined; setUser:(data?:UserType)=> void}   
)

interface UserContextProviderProps {
    children: React.ReactNode;
  }
   
  const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<UserType>();
   
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  };
   
  export default UserContextProvider;