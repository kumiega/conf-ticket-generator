import { Outlet } from 'react-router';
import Background from './background';
import Footer from './footer';
import Logo from './logo';

const AppLayout: React.FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="container max-w-[72rem] mx-auto flex-1 p-8 flex flex-col">
          <div className="mx-auto max-w-fit mb-8">
            <Logo />
          </div>
          <main className="flex-1 flex flex-col justify-center">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
      <Background />
    </>
  );
};

export default AppLayout;
