import React, { useState } from 'react';
import { auth, googleProvider, db } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup,
    signOut, signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'
import { Routes, Route, Link } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        }
        catch(err){
            console.error(err);
        }
    };

    const signInWithEmail = async () => {
        try{
            const userWithEmail = await createUserWithEmailAndPassword(auth, email, password);

            if(userWithEmail){
                const uDoc = {
                    uid:userWithEmail.user.uid,
                    uemail:userWithEmail.user.uid,
                    owned_decks:[],
                    shared_decks:[],
                    createdAt:Date.now()
                };

                await setDoc(doc(db, "users", userWithEmail.user.uid), uDoc);
                console.log("User document added to Firestore.");
            }
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
            {/* <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form> */}

            <button onClick={signInWithGoogle}>Sign in with Google</button>
            
            {/* <form onSubmit={signInWithEmail}>
                <div>
                    <label>Email:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign in with Email</button>
            </form> */}
            <Link to="/">
                <button onClick={logout}>Log out</button>
            </Link>
            
        </div>
    );
};

export default LoginPage;