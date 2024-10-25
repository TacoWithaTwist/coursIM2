import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import SubjectPage from './pages/SubjectPage';
export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: ':subject',
          element: <SubjectPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
