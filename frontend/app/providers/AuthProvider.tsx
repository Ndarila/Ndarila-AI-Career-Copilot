"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { jwtDecode } from "jwt-decode";


interface User {

  email: string;

  username?: string;

}



interface AuthContextType {

  user: User | null;

  token: string | null;

  loading: boolean;

  loginUser: (
    token: string,
    user?: User
  ) => void;

  logout: () => void;

}



const AuthContext =
createContext<AuthContextType | null>(null);





export function AuthProvider({
  children
}:{
  children: ReactNode;
}) {


  const [user,setUser] =
  useState<User|null>(null);


  const [token,setToken] =
  useState<string|null>(null);


  const [loading,setLoading] =
  useState(true);





  useEffect(()=>{


    const savedToken =
    localStorage.getItem("token");


    const savedUser =
    localStorage.getItem("user");



    if(savedToken){

      try{


        setToken(savedToken);



        if(savedUser){


          setUser(
            JSON.parse(savedUser)
          );


        }

        else {


          const decoded:any =
          jwtDecode(savedToken);



          setUser({

            email:
            decoded.sub,

            username:
            decoded.username

          });


        }



      }

      catch(error){


        console.error(
          "Invalid token",
          error
        );


        localStorage.removeItem(
          "token"
        );


        localStorage.removeItem(
          "user"
        );


      }


    }



    setLoading(false);



  },[]);








  function loginUser(
    newToken:string,
    userData?:User
  ){


    localStorage.setItem(
      "token",
      newToken
    );



    setToken(
      newToken
    );




    if(userData){


      localStorage.setItem(
        "user",
        JSON.stringify(userData)
      );



      setUser(
        userData
      );


    }

    else {


      const decoded:any =
      jwtDecode(newToken);



      const userFromToken = {

        email:
        decoded.sub,

        username:
        decoded.username

      };



      localStorage.setItem(
        "user",
        JSON.stringify(userFromToken)
      );



      setUser(
        userFromToken
      );


    }


  }







  function logout(){


    localStorage.removeItem(
      "token"
    );


    localStorage.removeItem(
      "user"
    );


    setToken(null);


    setUser(null);


  }







  return (

    <AuthContext.Provider

      value={{

        user,

        token,

        loading,

        loginUser,

        logout

      }}

    >

      {children}

    </AuthContext.Provider>


  );


}







export function useAuth(){


  const context =
  useContext(AuthContext);



  if(!context){

    throw new Error(
      "useAuth must be inside AuthProvider"
    );

  }



  return context;


}