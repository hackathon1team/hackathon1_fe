import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import router from './Routes/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { Suspense } from 'react';

function App() {
    const RouterObject = createBrowserRouter(router);
    let queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                suspense: true,
            },
        },
    });

    return (
        <Suspense fallback={<h1>...loading</h1>}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={RouterObject} />
            </QueryClientProvider>
        </Suspense>
    );
}

export default App;
