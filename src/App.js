import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Accomodation from './pages/Accomodation';
import Error from './pages/Error';




import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Accueil />
	},
	{
		path: "/accomodation/:id",
		element: <Accomodation />   
	},
	{
		path: '/Apropos',
		element: <Apropos />
	},
	{
		path: '/Error',
		element: <Error />
	},
    {
        path: "*",
		element: <Navigate to="/Error" replace />
    }
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;