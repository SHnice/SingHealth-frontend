import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useAuth } from '../context/auth';
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
export default function NavbarHeader() {
  const navigate = useNavigate()
  const auth = useAuth()
  return (
    <Navbar fluid className=''>
      <Navbar.Brand className='cursor-pointer' onClick={()=>navigate('/')}>
        <img src="/cross.png" className="h-12" alt="Logo" />
        <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">Sing Health</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {!auth?.user ? <><Button onClick={()=>navigate('login')} className='mr-2'>Login</Button> </> :
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Admin</span>
              
            </Dropdown.Header>
            <Dropdown.Item onClick={()=>navigate('admin-dashboard')}>Dashboard</Dropdown.Item>
            
            <Dropdown.Divider />
            <Dropdown.Item onClick={()=> auth.logout()}>Sign out</Dropdown.Item>
          </Dropdown>
        }
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
