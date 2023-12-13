import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

import axios from 'axios';
import { signUpValidate } from '../utils/validations';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
export default function AddDoctor() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleAddDoctor = async (e) => {
        e.preventDefault();
        const errors = signUpValidate(name,email, password, confirmPassword);
        if(Object.keys(errors).length > 0) return;

        try {
            // Make a POST request to the Flask backend to register the doctor
            const response = await axios.post('https://sing-health-backend.vercel.app/register-doctor', {
                name,
                email,
                password,
            });
            // Handle the response as needed (e.g., show success message)
            toast.success('Doctor added successfully')
            navigate('/admin-dashboard')
        } catch (error) {
            // Handle errors (e.g., show error message)
            console.error('Error adding doctor:', error.message);
        }
    };
  return (
    <div className='flex justify-center h-screen items-center'>
            <form className="flex w-1/4 flex-col gap-4">
            <h1 className='text-center text-3xl font-bold mb-4'>Add Doctor</h1>
                <div className=''>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Enter doctor full name" />
                    </div>
                    <TextInput id="name" onChange={(e)=>setName(e.target.value)} type="text" placeholder="John Doe" required />
                </div>
                <div className=''>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Enter email" />
                    </div>
                    <TextInput id="email1" onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="name@gmail.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Enter password" />
                    </div>
                    <TextInput id="password1" onChange={(e)=>setPassword(e.target.value)} type="password" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password2" value="Confirm password" />
                    </div>
                    <TextInput id="password2" onChange={(e)=>setConfirmPassword(e.target.value)} type="password" required />
                </div>
               
                <Button onClick={handleAddDoctor} type="submit">Submit</Button>
            </form>

        </div>
  );
}
