import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Register from "./Register";
import Login
 from "./Login";
 function App() {
    return ( 
        <div className='container-fluid'>
     <Routes>  
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard />} /> {/* Define the route for Dashboard */}
            
   </Routes> 
   <ToastContainer />


</div> 
      

     );
 }
 
 export default App;