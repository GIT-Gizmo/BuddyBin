'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import toast from 'react-hot-toast';
import Balancer from 'react-wrap-balancer';

import { CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Spinner from '@/components/Spinner';
import { skillCategory } from '@/data';

interface FormData {
  firstName: string;
  lastName: string;
  date: string;
  state: string;
  address: string;
  email: string;
  whatsapp: string;
  phone: string;
  lga: string;
  skill: string;
  qualifications: string;
  experience: string;
  rating: number | '';
  language: string[];
}

const ApplyForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    date: '',
    state: '',
    address: '',
    email: '',
    whatsapp: '',
    phone: '',
    lga: '',
    skill: '',
    qualifications: '',
    experience: '',
    rating: '',
    language: [],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox' && e.target instanceof HTMLInputElement) {
      const updatedLanguages = e.target.checked
        ? [...formData.language, value]
        : formData.language.filter((lang) => lang !== value);
      setFormData({ ...formData, language: updatedLanguages });
    } else if (type === 'radio' && e.target instanceof HTMLInputElement) {
      setFormData({ ...formData, rating: parseInt(value, 10) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/application', {
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
          firstName: '',
          lastName: '',
          date: '',
          state: '',
          address: '',
          email: '',
          whatsapp: '',
          phone: '',
          lga: '',
          skill: '',
          qualifications: '',
          experience: '',
          rating: '',
          language: [],
        });
      } else {
        toast.error('Failed to send email');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while sending the email');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-16 flex flex-col items-center justify-center">
      <Card className="w-[90vw] md:w-[80vw] lg:w-[60vw]">
        <CardHeader>
          <CardDescription>
            Send in your application now to join our team of competent and experienced individuals who take pride in delivering quality jobs and detail-oriented services as we ensure 100% customer satisfaction on every job.
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          <form onSubmit={handleSubmit} className='space-y-4'>
            {/* Form Fields */}
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
            {/* Additional fields */}
            {/* ... other input fields from the original form ... */}
            <div className='flex gap-2'>
              <input
                type="checkbox"
                className='min-h-[100ppx]'
                required
              />
              <Label>I accept</Label>
            </div>
            <CardFooter>
              {isLoading ? (
                <Button type="submit" disabled={isLoading} className='w-full flex items-center gap-2'>Submitting<Spinner /></Button>
              ) : (
                <Button type="submit" className='w-full'>Send</Button>
              )}
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplyForm;
