'use client'

import { useState } from 'react'
import toast from 'react-hot-toast';
import Spinner from '@/components/Spinner';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer'

import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Payment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    amount: '',
  });

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(data.message);
        setIsHidden(!isHidden)
        setFormData({ fullName: '', email: '', amount: '' });
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

      <div
        className="flex flex-col items-center justify-center min-h-screen">
        <Card className="w-[90vw] md:w-[80vw] lg:w-[60vw]">
          <CardHeader>
            <CardTitle>Payment</CardTitle>
            <CardDescription>Select paystack to use your Bank Card.</CardDescription>
          </CardHeader>
          <CardContent className="w-full space-y-4">
            <Tabs defaultValue="bank">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="bank" className="">Bank Transfer</TabsTrigger>
                <TabsTrigger value="paystack" className="">Paystack Payment</TabsTrigger>
              </TabsList>
              <TabsContent value="bank">
                <form onSubmit={handleSubmit} className={!isHidden ? 'hidden' : ''}>
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

                  <div className="space-y-2">
                    <Label>Amount:</Label>
                    <Input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      placeholder="10,000"
                      required
                    />
                  </div>

                  <CardFooter className="mt-4 flex items-center gap-2">
                    {isLoading ? (
                      <Button type="submit" disabled={isLoading} className='w-full flex items-center gap-2'>Sending<Spinner /></Button>
                    ) : (
                      <Button type="submit" className='w-full'>Pay</Button>
                    )}
                  </CardFooter>
                </form>

                <div className={isHidden ? 'hidden' : ''}>
                  <div className="flex flex-col justify-center gap-2 min-[400px]:flex-row mt-6">
                    <div className="flex flex-col bg-gray-100 w-full p-4 rounded-md shadow-sm dark:bg-gray-800">
                      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Account Details</h2>
                      <p className="text-gray-600 mt-2 dark:text-gray-400">Account Name: ADROIT HANDYMAN SERVICE</p>
                      <p className="text-gray-600 mt-2 dark:text-gray-400">Account Number: 0629459934</p>
                      <p className="text-gray-600 mt-2 dark:text-gray-400">Bank Name: Guaranty Trust Bank</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="paystack">
                <div className='text-center w-full'>
                  <h3 className="max-w-[42rem] text-muted-foreground sm:text-lg sm:leading-8 mb-4">
                    <Balancer>
                      PAY WITH{" "}
                      <span className="font-semibold text-foreground">
                        PAYSTACK
                      </span>{" "}
                      USING YOUR BANK CARD.
                    </Balancer>
                  </h3>

                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:text-[#3B82F6] border border-solid border-transparent transition-all m-[0.5em] hover:border-[#3B82F6] hover:bg-none active:border-[#3B82F6] active:text-[#3B82F6] active:link-gradient"
                    href="https://paystack.com/pay/adroithandymanservices" target="_blank" rel="noopener noreferrer"
                  >
                    Paystack
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>

        </Card>
      </div>
    </>
  );
}

export default Payment