 "use client"
 import { IoLogoGoogle } from "react-icons/io";
 import { FaFacebookF } from "react-icons/fa";
 import "../page.css"
import {useGoogleLogin} from "@react-oauth/google";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function page() {
    const [user,setUser]=useState<any>()
    const route=useRouter()
    const handlesubmit=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()
    }



    const googlelogin = ()=>{
        const clientID =`${process.env.NEXT_PUBLIC_CLIENT_ID}`
     const scope=`https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`
        const redirectURI = 'http://localhost:3000/home';

         route.push(`https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=code&scope=${scope}`)
    };
 
 

    // const googlelogin=useGoogleLogin({
    //     onSuccess: credentialResponse => {
    //       console.log(credentialResponse);
    //     },
    //     onError: () => {
    //       console.log('Login Failed');
    //     },
    //   });
  

        const GitHublogin = () => {
            const clientID =`${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`
            const redirectURI = 'http://localhost:3000/home';
            route.push(`https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectURI}`);
        };
        const facebooklogin = () => {
            const clientID =`${process.env.NEXT_PUBLIC_FACEBOOK_ID}`
             const redirectURI = 'http://localhost:3000/home';
            route.push(`https://www.facebook.com/v21.0/dialog/oauth?client_id=${clientID}&redirect_uri=${redirectURI}`);
        };
        const Instagramlogin = () => {
            const clientID =`${process.env.NEXT_PUBLIC_INSTAGRAM_ID}`
             const redirectURI = 'http://localhost:3000/about';
            route.push(`https://api.instagram.com/oauth2/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&scope=user_profile,user_media&response_type=token`);
        };

  return (
 <div className=" flex justify-center items-center sm:p-0 px-4 h-[100vh]">
 <form onSubmit={handlesubmit} className="bg-slate-200  lg:min-w-[30%] sm:min-w-[50%] p-3 rounded-sm min-w-full">
    <p className="font-semibold">Login</p>
    <div className="flex flex-col my-3">
        <label htmlFor="user-name" className="font-semibold">User</label>
    <input type="text" name="user-name" id="user-name" placeholder="Enter your user Name" width={100}/>
    </div>
    <div className="flex flex-col my-3">
        <label htmlFor="email" className="font-semibold">Email</label>
    <input type="email" name="email" id="email" placeholder="Enter your Email Address"/>
    </div>
    <button className="font-semibold bg-green-400 w-full py-2 rounded-[10px] text-lg text-white my-3">Submit</button>
    <div className="Login-options">
    <button onClick={()=>googlelogin()}>Google</button>
       <button onClick={()=>GitHublogin()}>Github</button>
       <button onClick={()=>facebooklogin()}>Facebook</button>
       <button onClick={()=>Instagramlogin()}>Instagram</button>
    </div>
 
 </form>
 
 
 
 </div>
  )
}
