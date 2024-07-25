import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import router from './Routes/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

function App() {
    const RouterObject = createBrowserRouter(router);
    let queryClient = new QueryClient();

    return (
        <>
            <React.Suspense fallback={<div>...loading</div>}>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={RouterObject} />
                </QueryClientProvider>
            </React.Suspense>
        </>
    );
}

export default App;
