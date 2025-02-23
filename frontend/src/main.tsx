import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {RouterProvider} from "react-router-dom";
import router from '../src/routers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="row">
<RouterProvider router={router} />
</div>

  </StrictMode>,
)
