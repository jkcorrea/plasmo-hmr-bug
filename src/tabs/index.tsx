import { createMemoryRouter, RouterProvider } from 'react-router-dom'

import TestPage from '~pages/TestPage'

import '~tailwind.css'

export const router = createMemoryRouter([
  {
    path: '/',
    element: <TestPage />,
  },
])

const App = () => {
  return (
    <div className="flex flex-col overflow-auto">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
