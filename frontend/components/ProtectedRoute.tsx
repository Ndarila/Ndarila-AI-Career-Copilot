"use client";


import {
ReactNode,
useEffect
} from "react";


import {
useRouter
} from "next/navigation";


import {
useAuth
} from "@/app/providers/AuthProvider";



export default function ProtectedRoute({

children

}:{

children:ReactNode

}){


const router =
useRouter();


const {
token,
loading
}=useAuth();




useEffect(()=>{


if(!loading && !token){

router.push("/login");

}


},[
token,
loading,
router
]);





if(loading){

return (

<div className="
flex
min-h-screen
items-center
justify-center
bg-slate-950
text-white
">

Checking authentication...

</div>

)

}




if(!token){

return null;

}





return children;


}