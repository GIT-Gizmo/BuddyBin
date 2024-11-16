'use client'

import { useState } from 'react'

import { CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const BookForm = () => {
  const [firstName, setFirstName] = useState("");

  // Update _subject value whenever firstName changes
  const handleFirstNameChange = (e: { target: { value: string; }; }) => {
    setFirstName(e.target.value);
  };

  return (
    <>

      <div className="py-16 flex flex-col items-center justify-center bg-white">
        <Card className="w-[90vw] md:w-[80vw] lg:w-[60vw] transition-all duration-1000 ease-out md:hover:-translate-y-3">

          <CardHeader>

            <CardDescription>&quot;Obtaining service price estimate is as straightforward as activating a seamless process.&quot;</CardDescription>

          </CardHeader>

          <CardContent className="w-full">
            <form action="https://formsubmit.co/9f3ef001fdc6af427cd981986b80260a" method="POST" encType="multipart/form-data" className='space-y-4'>

              <input type="hidden" name="_subject" value={`${firstName} Has Submitted A New Estimate Request Form`} /> {/* Dynamically set _subject value */}
              <input type="hidden" name="_next" value="https://adroithandymanservices.com/estimate"></input>
              <input type="hidden" name="_captcha" value="false"></input>
              <input type="hidden" name="_template" value="box"></input>

              <div className='grid md:grid-cols-2 gap-4'>
                <div className="space-y-2">
                  <Label>First Name:</Label>

                  <Input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    placeholder="John"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Last Name:</Label>
                  <Input
                    type="text"
                    name="lastName"
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
                    placeholder="john@smith.com"
                    required
                  />
                </div>

                <div className='space-y-2'>
                  <Label>Phone Number:</Label>
                  <Input
                    type="number"
                    name="phone"
                    placeholder="123-456-7890"
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
                  placeholder="123 Main St, Ikeja, Lagos"
                  required
                />
              </div>


              <div className='space-y-2'>
                <Label>Brief description of services:</Label>

                <Textarea
                  name="description"
                  placeholder="Describe your services here"
                  className='min-h-[100ppx]'
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Upload Photos:</Label>

                <Input className="file-input" type="file" multiple accept="image/*" name="photos" />
              </div>

              <CardFooter>

                <Button type="submit" className='w-full'>Send</Button>

              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default BookForm