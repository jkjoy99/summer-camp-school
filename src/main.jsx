import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// ..
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-screen-xl mx-auto">
  <React.StrictMode>
    <AuthProvider>
      <div className="max-w-screen-xl mx-auto">
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
          <RouterProvider router={router} />
          </HelmetProvider>
        </QueryClientProvider>
      </div>
    </AuthProvider>
  </React.StrictMode>
</div>
)

AOS.init();