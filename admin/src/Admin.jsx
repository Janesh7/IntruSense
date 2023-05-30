import React from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCard
}
    from 'mdb-react-ui-kit';
import "./Admin.css"
import Logo from "./Logo.jpg";
const Admin = () => {
    return (
        <div className='flex justify-center bg-slate-300'>
            <MDBCard className='mt-5'>
                <MDBContainer className="my-5 gradient-form">

                    <MDBRow>

                        <MDBCol col='6' className="mb-5">
                            <div className="d-flex flex-column ms-5">

                                <div className="mx-auto text-center">
                                    <img src= {Logo}
                                        style={{ width: '250px' }} alt="logo" />
                                    <h4 className="mt-1 mb-5 pb-1">We are IntruSense</h4>
                                </div>

                                <p>Please login to your account</p>


                                <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' />
                                <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />


                                <div className="text-center pt-1 mb-5 pb-1">
                                    <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
                                    <a className="text-muted" href="#!">Forgot password?</a>
                                </div>

                                <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                                    <p className="mb-0">Don't have an account?</p>
                                    <MDBBtn outline className='mx-2' color='danger'>
                                        Create Account
                                    </MDBBtn>
                                </div>

                            </div>

                        </MDBCol>

                        <MDBCol col='6' className="mb-5">
                            <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                    <h4 className="mb-4">We are more than just a company</h4>
                                    <p className="small mb-0">A smart home security system that integrates facial recognition technology with cybersecurity features. Admin web portal for it.
                                    </p>
                                </div>

                            </div>

                        </MDBCol>

                    </MDBRow>

                </MDBContainer>
            </MDBCard>
        </div>
    )
}

export default Admin
