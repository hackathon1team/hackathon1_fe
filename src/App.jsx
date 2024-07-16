import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import router from './Routes/router'

function App() {
	const RouterObject = createBrowserRouter(router)

	return (
		<>
			<RouterProvider router={RouterObject} />
		</>
	)
}

export default App
