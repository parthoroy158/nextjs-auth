"use client"
import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

const LogIn = () => {



    return (
        <div>
            <div>
                <button className=" btn btn-primary " onClick={() => signIn()}>Lon In</button>
            </div>

        </div>
    );
};

export default LogIn;