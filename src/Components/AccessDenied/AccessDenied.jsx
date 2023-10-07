
import React from 'react'
import '../Styles/AccessDenied.css';
export const AccessDenied = () => {
    return (
        <>
            <div className='d-flex justify-content-center container-fluid accessDenies pt-5'>
                <div class="  ">
                    <h1 className="" style={{ color: 'red' }}><code>Access Denied</code></h1>
                    <hr className="w3-border-white w3-animate-left" style={{ margin: 'auto', width: '50%' }} />
                    <h6 className="text-white">You dont have permission to view this site Login to Continue.</h6>
                    <h3 className="w3-center w3-animate-zoom">🚫🚫🚫🚫</h3>
                    <h6 className="w3-center w3-animate-zoom" style={{ color: 'red', textDecoration: 'underline' }}>error code:403 forbidden</h6>
                </div>
            </div>
        </>
    )
}
