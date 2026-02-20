import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Toaster } from 'sonner';

function App() {
  return (
    <>
      <Toaster position="top-center" expand={true} richColors />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
