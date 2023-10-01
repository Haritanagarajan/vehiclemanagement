// import React from 'react'
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';

// const Admin = () => {
//     const defaultImageSrc = "src/Components/Assets/Homeimage.jpg";
//     const [brandName, setbrandName] = useState();
//     const [imageSrc, setimageSrc] = useState();
//     const [values, setValues] = useState(initialFieldValues);

//     const initialFieldValues = {
//             brandid: 0,
//             brandName: "",
//             branndImage: "",
//             imageSrc: defaultImageSrc,
//             imageFile: null,
//         };


//     const showPreview = (e) => {
//                 if (e.target.files && e.target.files[0]) {
//                     let imageFile = e.target.files[0];
//                     const reader = new FileReader();
//                     reader.onload = (x) => {
//                         setValues({
//                             ...values,
//                             imageFile,
//                             imageSrc: x.target.result,
//                         });
//                     };
//                     reader.readAsDataURL(imageFile);
//                 } else {
//                     setValues({
//                         ...values,
//                         imageFile: null,
//                         imageSrc: defaultImageSrc,
//                     });
//                 }
//             };


//     const handleUpload = async (e) => {
//         e.preventDefault();
//         if (Object.keys != null) {
//             const newUser = {
//                 brandid: 0,
//                 brandName: " ",
//                 branndImage: " ",
//                 imageSrc: defaultImageSrc,
//                 imageFile: null,
//             };
//             try {
//                 console.log(newUser)
//                 const response = await axios.post("https://localhost:7229/api/CarBrands1/PostCarBrand", newUser, {
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
//                                     <input type="text" class="form-control" id="Username" placeholder="Enter brandName" name="brandName" value={brandName} onChange={(e) => setbrandName(e.target.value)} required />
//                                 </div>
//                             </div>


//                             {/* <div class="form-group registerform">
//                                 <label class="control-label col-sm-2" for="imageSrc">imageSrc:</label>
//                                 <div class="col-sm-10">
//                                     <input type="text" class="form-control" id="imageSrc"  name="imageSrc" value={imageSrc} onChange={(e) => setimageSrc(e.target.value)} required />
//                                 </div>
//                             </div> */}

//                             <div class="form-group registerform" >
//                                 <label class="control-label col-sm-2" for="imageSrc">File Upload:</label>
//                                 <div class="col-sm-10">
//                                     {/* <input type="file" class="form-control" id="imageSrc" placeholder="Upload yor brand image " name="imageSrc" onChange={fileupload} required /> */}
//                                     <input
//                                         type="file"
//                                         accept="image/*"
//                                         className={
//                                             "form-control-file" 
//                                         }
//                                         onChange={showPreview}
//                                         id="image-uploader"
//                                     />
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





// import React, { useState, useEffect } from "react";
// const defaultImageSrc = "src/Components/Assets/Homeimage.jpg";

// const initialFieldValues = {
//     brandid: 0,
//     brandName: "",
//     branndImage: "",
//     imageSrc: defaultImageSrc,
//     imageFile: null,
// };

// export default function Admin(props) {
//     const { addOrEdit, recordForEdit } = props;

//     const [values, setValues] = useState(initialFieldValues);
//     const [errors, setErrors] = useState({});

//     useEffect(() => {
//         if (recordForEdit != null) setValues(recordForEdit);
//     }, [recordForEdit]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setValues({
//             ...values,
//             [name]: value,
//         });
//     };

//     const showPreview = (e) => {
//         if (e.target.files && e.target.files[0]) {
//             let imageFile = e.target.files[0];
//             const reader = new FileReader();
//             reader.onload = (x) => {
//                 setValues({
//                     ...values,
//                     imageFile,
//                     imageSrc: x.target.result,
//                 });
//             };
//             reader.readAsDataURL(imageFile);
//         } else {
//             setValues({
//                 ...values,
//                 imageFile: null,
//                 imageSrc: defaultImageSrc,
//             });
//         }
//     };

//     const validate = () => {
//         let temp = {};
//         temp.brandName = values.brandName == "" ? false : true;
//         temp.imageSrc = values.imageSrc == defaultImageSrc ? false : true;
//         setErrors(temp);
//         return Object.values(temp).every((x) => x == true);
//     };

//     const resetForm = () => {
//         setValues(initialFieldValues);
//         document.getElementById("image-uploader").value = null;
//         setErrors({});
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         if (validate()) {
//             const formData = new FormData();
//             formData.append("employeeID", values.brandid);
//             formData.append("employeeName", values.brandName);
//             formData.append("imageName", values.branndImage);
//             formData.append("imageFile", values.imageFile);
//             addOrEdit(formData, resetForm);
//         }
//     };

//     const applyErrorClass = (field) =>
//         field in errors && errors[field] == false ? " invalid-field" : "";

//     return (
//         <>
//             <div className="container text-center">
//                 <p className="lead">Car Brand Create</p>
//             </div>
//             <form
//                 autoComplete="off"
//                 noValidate
//                 onSubmit={handleFormSubmit}
//                 className="form"
//             >
//                 <div className="card">
//                     <div className="row">
//                         <div className="col-md-4">
//                             <img src={values.imageSrc} className="card-img-top" />
//                         </div>
//                         <div className="col-md-8">
//                             <div className="card-body">
//                                 <div className="form-group">
//                                     <input
//                                         type="file"
//                                         accept="image/*"
//                                         className={
//                                             "form-control-file" + applyErrorClass("imageSrc")
//                                         }
//                                         onChange={showPreview}
//                                         id="image-uploader"
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <input
//                                         className={"form-control" + applyErrorClass("employeeName")}
//                                         placeholder="Employee Name"
//                                         name="employeeName"
//                                         value={values.brandName}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 {/* <div className="form-group">
//                                     <input
//                                         className="form-control"
//                                         placeholder="Occupation"
//                                         name="occupation"
//                                         value={values.occupation}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div> */}
//                                 <div className="form-group text-center submit">
//                                     <button type="submit" className="btn btn-light">
//                                         Submit
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </>
//     );
// }