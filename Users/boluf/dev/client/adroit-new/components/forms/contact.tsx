'use client'

import { useState } from 'react'
import toast from 'react-hot-toast';

import Spinner from '@/components/Spinner';
import { CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const BookForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    lastName: '',
    email: '',
    description: '',
  });

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(data.message);
        setFormData({
          fullName: '',
          lastName: '',
          email: '',
          description: '',
        });
      } else {
        toast.error('Failed to send email');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while sending the email');
    } finally {
      setIsLoading(false); // Hide spinner
    }
  };

  return (
    <>

      <div className="pt-2 pb-10 flex flex-col items-center justify-center bg-white">
        <Card className="w-[90vw] md:w-[80vw] lg:w-[60vw] transition-all duration-1000 ease-out md:hover:-translate-y-3">

          <CardHeader>

            <CardDescription>&quot;Fill out the form below and we'll get back to you as soon as possible.&quot;</CardDescription>

          </CardHeader>

          <CardContent className="w-full">
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='grid md:grid-cols-2 gap-4'>
                <div className="space-y-2">
                  <Label>Full Name:</Label>

                  <Input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Email:</Label>

                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@smith.com"
                    required
                  />
                </div>
              </div>


              <div className='space-y-2'>
                <Label>Message:</Label>

                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className='min-h-[100px] sm:min-h-[150px] md:min-h-[200px]'
                  placeholder="Hi, I need to ..."
                  required
                />
              </div>

              <CardFooter>

                {isLoading ? (
                  <Button type="submit" disabled={isLoading} className='w-full flex items-center gap-2'>Sending<Spinner /></Button>
                ) : (
                  <Button type="submit" className='w-full'>Send</Button>
                )}

              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default BookForm