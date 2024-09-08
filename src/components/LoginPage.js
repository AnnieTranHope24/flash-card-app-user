import React, { useState } from 'react';
import { auth, googleProvider, db } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup,
    signOut, signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const currentUser = auth?.currentUser?.uid;

    console.log(auth?.currentUser?.email);

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log('Logging in with: ', email, password);
        try{
            await signInWithEmailAndPassword(auth, email, password);
        }
        catch(err){
            console.error(err);
        }
    };

    const signInWithGoogle = async () => {
        try{
            const newUser = await signInWithPopup(auth, googleProvider);

            if(newUser){
                const userDoc = {
                    uid:newUser.user.uid,
                    uemail:newUser.user.email,
                    owned_decks:[],
                    shared_decks:[],
                    createdAt:Date.now()
                };

                await setDoc(doc(db, "users", newUser.user.uid), userDoc);
            }

            navigate('/username');
        }
        catch(err){
            console.error(err);
        }
    };

    const logout = async () => {
        try{
            await signOut(auth);
            console.log("user signed out");
        }
        catch(err){
            console.error(err);
        } 
    }


    return (
        <div>
            <h2>Login Page</h2>

            <button onClick={signInWithGoogle}>Sign in with Google</button>

            <Link to="/">
                <button onClick={logout}>Log out</button>
            </Link>
            
        </div>
    );
};

export default LoginPage;