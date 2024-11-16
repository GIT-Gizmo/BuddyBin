'use client'

import { useState } from 'react'
import toast from 'react-hot-toast';

import { CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Spinner from '@/components/Spinner';

const BookForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    time: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    state: '',
    service: '',
    description: ''
  });

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/booking', {
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
          time: '',
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          address: '',
          state: '',
          service: '',
          description: ''
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

      <div className="py-16 flex flex-col items-center justify-center bg-white">
        <Card className="w-[90vw] md:w-[80vw] lg:w-[60vw] transition-all duration-1000 ease-out md:hover:-translate-y-3">

          <CardHeader>

            <CardDescription>&quot;Booking a professional is as easy as flipping a switch&quot;</CardDescription>

          </CardHeader>

          <CardContent className="w-full">
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='space-y-2'>
                <Label>Time Select</Label>

                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className='flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 [&>span]:line-clamp-1'
                  required >
                  <Label>Time Select</Label>
                  <option disabled selected value="">
                    ----
                  </option>

                  <option value="Morning 8am - 12pm" className='py-4 w-4 opacity-50'>
                    Morning 8am - 12pm
                  </option>

                  <option value="Afternoon 12pm - 5pm" className='py-4 hover:bg-[#2020201A] opacity-50'>
                    Afternoon 12pm - 5pm
                  </option>
                </select>
              </div>

              <div className='grid md:grid-cols-2 gap-4'>
                <div className="space-y-2">
                  <Label>First Name:</Label>

                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Last Name:</Label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-4'>
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

                <div className='space-y-2'>
                  <Label>Phone Number:</Label>
                  <Input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="080 123 456 7890"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Home Address:</Label>

                <Input
                  type="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="123 Main Street, Ikeja, Lagos"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>State:</Label>

                <Input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Lagos State"
                  required
                />
              </div>

              <div className='space-y-2'>
                <Label> Class of Service:</Label>

                <Input
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  placeholder="Cleaning"
                  required
                />
              </div>


              <div className='space-y-2'>
                <Label>Brief description of services:</Label>

                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className='min-h-[100ppx]'
                  placeholder="I need ..."
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