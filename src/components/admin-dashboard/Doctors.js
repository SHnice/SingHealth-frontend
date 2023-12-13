import { Button, Modal ,Label, TextInput} from 'flowbite-react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Doctors() {
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([]);
    const [opendeleteModal, setOpenDeleteModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [selectedDoctorId, setSelectedDoctorId] = useState(null); // To keep track of the selected doctor for edit
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get('http://localhost:5000/get-doctors');
                setDoctors(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching doctors:', error.message);
            }
        };

        fetchDoctors();
    }, []);

    const handleEdit = (doctorId) => {
        // Open the edit modal
        setOpenEditModal(true);

        // Find the selected doctor from the list
        const selectedDoctor = doctors.find((doctor) => doctor._id === doctorId);

        // Populate the form fields with the selected doctor's information
        setSelectedDoctorId(doctorId);
        setName(selectedDoctor.name);
        setEmail(selectedDoctor.email);
        
    };

    const handleEditDoctor = async (e) => {
        e.preventDefault();
        if(name === '' || email === '') {
            toast.error('Please fill all the fields')
            return;
        }
        // Perform the edit action
        try {
            await axios.put(`https://sing-health-backend.vercel.app/edit-doctor/${selectedDoctorId}`, {
                name,
                email,
                password,
                
            });

            // Close the edit modal
            setOpenEditModal(false);
            toast.success('Doctor edited successfully')
            // Refresh the doctors list
            const response = await axios.get('https://sing-health-backend.vercel.app/get-doctors');
            setDoctors(response.data);
        } catch (error) {
            console.error('Error editing doctor:', error.message);
        }
    };

    const handleDelete = async (doctorId) => {
        // Open the delete modal
        setOpenDeleteModal(true);
        console.log(doctorId)
        // Set the selected doctor ID for deletion
        setSelectedDoctorId(doctorId);
    };

    const handleDeleteDoctor = async () => {
        // Perform the delete action
        try {
            await axios.delete(`https://sing-health-backend.vercel.app/delete-doctor/${selectedDoctorId}`);

            // Close the delete modal
            setOpenDeleteModal(false);
            toast.success('Doctor deleted successfully')

            // Refresh the doctors list
            const response = await axios.get('https://sing-health-backend.vercel.app/get-doctors');
            setDoctors(response.data);
        } catch (error) {
            console.error('Error deleting doctor:', error.message);
        }
    };

    return (
        <div>
            <Button onClick={() => navigate('/add-doctor')} className='mb-7'>Add Doctor</Button>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Doctor name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor) => (
                            <tr key={doctor._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {doctor.name}
                                </th>
                                <td className="px-6 py-4">
                                    {doctor.email}
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 mr-5 dark:text-blue-500 hover:underline" onClick={() => handleEdit(doctor._id)}>Edit</a>
                                    <a href="#" className="font-medium text-red-600 hover:underline" onClick={() => handleDelete(doctor._id)}>Delete</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal show={opendeleteModal} size="md" onClose={() => setOpenDeleteModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this doctor?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={handleDeleteDoctor}>
                                {"Yes, I'm sure"}
                            </Button>
                            <Button color="gray" onClick={() => setOpenDeleteModal(false)}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={openEditModal} size="md" onClose={() => setOpenEditModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    
                        <form className="flex flex-col gap-4">
                            <h1 className='text-center text-3xl font-bold mb-4'>Edit Doctor</h1>
                            <div className=''>
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Enter doctor full name" />
                                </div>
                                <TextInput id="name" onChange={(e) => setName(e.target.value)} type="text" placeholder="John Doe" value={name} required />
                            </div>
                            <div className=''>
                                <div className="mb-2 block">
                                    <Label htmlFor="email1" value="Enter email" />
                                </div>
                                <TextInput id="email1" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@gmail.com" value={email} required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="password1" value="Enter password" />
                                </div>
                                <TextInput id="password1" onChange={(e) => setPassword(e.target.value)} type="password" value={password} />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="password2" value="Confirm password" />
                                </div>
                                <TextInput id="password2" onChange={(e) => setConfirmPassword(e.target.value)} type="password" value={confirmPassword}/>
                            </div>
                            <Button onClick={handleEditDoctor} type="submit">
                                Submit
                            </Button>
                        </form>
                 
                </Modal.Body>
            </Modal>
        </div>
    );
}
