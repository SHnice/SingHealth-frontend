import { Button, Checkbox, Label, TextInput } from 'flowbite-react';


export default function Register() {
  return (
    <div className='flex justify-center h-screen items-center'>
            <form className="flex w-1/4 flex-col gap-4">
            <h1 className='text-center text-3xl font-bold mb-4'>Register</h1>
                <div className=''>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput id="password1" type="password" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Confirm Your password" />
                    </div>
                    <TextInput id="password1" type="password" required />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <Button type="submit">Submit</Button>
            </form>

        </div>
  );
}
