// SignUpForm.tsx
import React, { use } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpFormData, signUpSchema } from './schema';

import Button from '@/components/button';
import FormField from '@/components/form-field';
import UploadAvatar from '../upload-avatar';
import { useNavigate } from 'react-router';
import { useTicket } from '@/context/ticket-context';

const SignUpForm: React.FC = () => {
  const { setTicket } = useTicket();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    setTicket(data);
    navigate('/ticket');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mx-auto max-w-md space-y-6 flex flex-col items-center justify-center mt-12"
    >
      <UploadAvatar setValue={setValue} error={errors.avatar?.message} />

      <FormField
        register={register('fullName')}
        label="Full Name"
        placeholder="John Doe"
        error={errors.fullName?.message}
      />
      <FormField
        register={register('email')}
        label="Email Address"
        placeholder="example@email.com"
        type="email"
        error={errors.email?.message}
      />
      <FormField
        register={register('github')}
        label="GitHub Username"
        placeholder="@yourusername"
        error={errors.github?.message}
      />

      <Button type="submit">Generate My Ticket</Button>
    </form>
  );
};

export default SignUpForm;
