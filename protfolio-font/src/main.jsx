import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './router/router.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './contrext/AuthProvider.jsx'


const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
     <QueryClientProvider client={queryClient}>
     <RouterProvider router={router}></RouterProvider>
   </QueryClientProvider>
</AuthProvider>
  </StrictMode>,
)
