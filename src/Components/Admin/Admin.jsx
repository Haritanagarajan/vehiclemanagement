// import React from 'react'
// import loginimage from '../Assets/loginimage.jpg';
// import '../Styles/Register.css';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';

// const Admin = () => {

//     const [BrandName, setbrandName] = useState();
//     const [BranndImage, setBranndImage1] = useState();
//     const naviagte = useNavigate();
//     const [files, setfiles] = useState();

//     const fileupload = (e) => {
//         console.log(e.target.files)
//         setfiles(e.target.files[0])
//         setbrandName(e.target.files[0].name)
//     }

//     // const formData = new FormData();
//     // formData.append('Brandid1', BrandName1);
//     // formData.append('BrandName1', BrandName1);
//     // formData.append('files', files);
    
//     const handleUpload = async (e) => {
//         e.preventDefault();
//         if (Object.keys != null) {
//             const newUser = {
//                 Brandid:0,
//                 BrandName:BrandName,
//                 BranndImage:BranndImage,
//                 files:files
//             };
//             try {
//                 console.log(newUser)
//                 const response = await axios.post("https://localhost:7229/api/ImageUpload/Post", newUser, {
//                     headers: {
//                         'Content-Type': 'application/json',
//                     }
//                 })
//                 const result = await response.data;
//                 if (result.Status === 200) {
//                     toast.success("file  uploaded")
//                 }
//             } catch (error) {
//                 console.log(error);
//                 throw error;
//             }
//         }
//     }



//     console.log("BrandName1", BrandName);
//     console.log("files", files);



//     return (
//         <>
//             <div class="container">
//                 <div className='row justify-content-center'>
//                     <div class="col-6">
//                         <h2 id='register' class="mt-3 pt-5 pb-3">Car Brand Upload</h2>
//                         <form class="form-horizontal">

//                             <div class="form-group registerform">
//                                 <label class="control-label col-sm-2" for="Username">BrandName:</label>
//                                 <div class="col-sm-10">
//                                     <input type="text" class="form-control" id="Username" placeholder="Enter brandName" name="BrandName1"  value={BrandName} onChange={(e) => setBranndImage1(e.target.value)} required />
//                                 </div>
//                             </div>


//                             <div class="form-group registerform">
//                                 <label class="control-label col-sm-2" for="BrandImageName">BrandImageName:</label>
//                                 <div class="col-sm-10">
//                                     <input type="text" class="form-control" id="BrandImageName" placeholder="Enter brandimageName" name="BranndImage1" value={BranndImage} onChange={(e) => setBranndImage1(e.target.value)} required />
//                                 </div>
//                             </div>

//                             <div class="form-group registerform" >
//                                 <label class="control-label col-sm-2" for="Contact">File Upload:</label>
//                                 <div class="col-sm-10">
//                                     <input type="file" class="form-control" id="files" placeholder="Upload yor brand image " name="files" onChange={fileupload} required />
//                                 </div>
//                             </div>

//                             <div class="form-group mt-3 registerform">
//                                 <div class="col-sm-offset-2 col-sm-10">
//                                     <button type="button" class="btn submit" onClick={handleUpload}>Upload</button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                     <div class="col-lg-6 d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block   ">
//                         <p style={{ fontStyle: 'italic' }}>Upload images for Car Brand</p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Admin