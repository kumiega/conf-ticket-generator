import Heading from '@/components/heading';
import Paragraph from '@/components/paragraph';
import SignUpForm from '@/components/sign-up-form';

const SignUp: React.FC = () => {
  return (
    <>
      <Heading>Your Journey to Coding Conf 2025 Starts Here!</Heading>
      <Paragraph>✨ Secure your spot at next year&apos;s biggest coding conference.</Paragraph>
      <SignUpForm />
    </>
  );
};

export default SignUp;
