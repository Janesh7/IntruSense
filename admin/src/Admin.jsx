import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput, MDBCard } from 'mdb-react-ui-kit';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './Admin.css';
import Logo from './Logo.jpg';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (email === 'admin' && password === 'password') {
      // Redirect to new page
      navigate('/dashboard');
    } else {
      setErrorMessage('Invalid credentials');
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100 bg-slate-300'>
      <MDBCard className='mt-4 p-4 mb-4' style={{ maxHeight: '90vh' }}>
        <MDBContainer className='my-5 gradient-form d-flex flex-column'>
          <MDBRow>
            <MDBCol sm='12' md='6' className='mb-4 mb-md-0'>
              <div className='d-flex flex-column h-100'>
                <div className='mx-auto text-center mb-5'>
                  <img src={Logo} alt='logo' style={{ width: '250px', maxWidth: '100%' }} />
                  <h4 className='mt-3'>We are IntruSense</h4>
                </div>
                <p>Please login to your account</p>
                <MDBInput
                  wrapperClass='mb-3'
                  label='Username'
                  id='form1'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                  wrapperClass='mb-3'
                  label='Password'
                  id='form2'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errorMessage && <p className='text-danger'>{errorMessage}</p>}
                <div className='text-center mt-4 mb-5'>
                  <MDBBtn className='w-100 gradient-custom-2' onClick={handleLogin}>
                    Sign in
                  </MDBBtn>
                  <a className='text-muted' href='#!'>
                    Forgot password?
                  </a>
                </div>
                <div className='d-flex flex-row align-items-center justify-content-center'>
                  <p className='mb-0'>Don't have an account?</p>
                  <MDBBtn outline className='mx-2' color='danger'>
                    Create Account
                  </MDBBtn>
                </div>
              </div>
            </MDBCol>
            <MDBCol sm='12' md='6'>
              <div className='d-flex flex-column justify-content-center h-100 gradient-custom-2'>
                <div className='text-white p-4'>
                  <h4 className='mb-4'>We are more than just a company</h4>
                  <p className='small text-justify'>
                    Our innovative system offers unparalleled intrusion detection, ensuring the utmost safety for your
                    spaces. With state-of-the-art facial recognition technology, IntruSense provides accurate and efficient
                    identification of authorized individuals, keeping unwanted trespassers at bay. But that's not all. We
                    go beyond just facial recognition, incorporating robust cybersecurity measures to safeguard your
                    sensitive data and protect against cyber threats. Experience peace of mind knowing that IntruSense is
                    your trusted guardian, delivering precision security and comprehensive cybersecurity in one seamless
                    package.
                  </p>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBCard>
    </div>
  );
};

const DashboardPage = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
    </div>
  );
};

const Admin = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default Admin;
