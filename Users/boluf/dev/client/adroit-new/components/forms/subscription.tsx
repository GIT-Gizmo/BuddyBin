'use client'

import { useState } from 'react'
import toast from 'react-hot-toast';

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog"
import Spinner from '@/components/Spinner';

type PriceFormProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  className: string;
};

const PriceForm: React.FC<PriceFormProps> = ({ open, setOpen }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    plan: '',
    phone: '',
    email: '',
    address: '',
  });

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(data.message);
        setFormData({ fullName: '', email: '', plan: '', phone: '', address: '', });
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred!', {
        icon: '⚠️',
      });
    } finally {
      setIsLoading(false); // Hide spinner
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>

        <DialogContent className="sm:max-w-[425px]">

          <form onSubmit={handleSubmit} className='space-y-4'>

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

            <div>
              <Label>Subscription Plan </Label>

              <select
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                className='flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 [&>span]:line-clamp-1'
                required >
                <option disabled selected value="">
                  Pick a plan
                </option>

                <option value="Basic Plan" className='py-4 opacity-50'>
                  Basic Plan
                </option>

                <option value="Standard Plan" className='py-4 opacity-50'>
                  Standard Plan
                </option>

                <option value="Premium Plan" className='py-4 opacity-50'>
                  Premium Plan
                </option>
              </select>
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

            <DialogFooter>

              {isLoading ? (
                <Button type="submit" disabled={isLoading} className='w-full flex items-center gap-2'>Sending<Spinner /></Button>
              ) : (
                <Button type="submit" className='w-full'>Send</Button>
              )}

            </DialogFooter>

          </form>

        </DialogContent>

      </Dialog>
    </>
  )
}

export default PriceForm