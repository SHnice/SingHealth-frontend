import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
import toast from 'react-hot-toast';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useAuth();
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();

        // Admin credentials (hardcoded for now)
        const adminEmail = process.env.REACT_APP_ADMIN_EMAIL;
        const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD;

        // Check if the entered credentials match the admin credentials
        if (email === adminEmail && password === adminPassword) {
           
            login({
                admin: true,
                email
            })
            toast.success('Admin login successful')
            navigate('/admin-dashboard')
        } else {
           toast.error('Invalid credentials')
        }
    };
    return (
        <div className='flex justify-center h-screen items-center'>
            
            <form className="flex w-1/4 flex-col gap-4">
            <h1 className='text-center text-3xl font-bold mb-4'>Login</h1>
                <div className=''>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput id="password1" onChange={(e)=>setPassword(e.target.value)} type="password" required />
                </div>
           
                <Button onClick={handleLogin} type="submit">Submit</Button>
            </form>

        </div>
    );
}
