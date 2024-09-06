import React, { useState } from 'react';
import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup,
    signOut, signInWithEmailAndPassword,
} from 'firebase/auth';

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
            await signInWithPopup(auth, googleProvider);
        }
        catch(err){
            console.error(err);
        }
    };

    const signInWithEmail = async () => {
        try{
            await createUserWithEmailAndPassword(auth, email, password);
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
            <form onSubmit={handleLogin}>
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
            </form>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            <form onSubmit={signInWithEmail}>
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
            </form>
            <button onClick={logout}>Log out</button>
        </div>
    );
};

export default LoginPage;