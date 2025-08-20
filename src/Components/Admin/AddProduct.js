// import axios from "../../axios";
// import React, { useState } from "react";
// import styled from "styled-components";
// import Header from "../Header";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Navbar";

// function AddProduct() {
//    const navigate = useNavigate();
//   const [title, setTitle] = useState("");
//   // const [imageURL, setImageURL] = useState("");
//     const [imageFile, setImageFile] = useState(null);
//      const [description, setDescription] = useState("");
//   const [price, setPrice] = useState(0);
//   const [rating, setRating] = useState(0);
//    const [products, setProducts] = useState([]);
//   const [fieldStep, setFieldStep] = useState(0);
//   const [powerInput, setPowerInput] = useState("");
// const [powerOuput, setPowerOutput] = useState("");
// const [safetyFeature, setSafetyFeature] = useState("");
//   const [userInterface, setUserUnterface] = useState("");
// const [envirmentdesign, setEnvirmentDesign] = useState("");


//   const addProduct = (e) => {
//   e.preventDefault();

//   if (!imageFile) {
//     alert("Please select an image file.");
//     return;
//   }

//   const formData = new FormData();
//   formData.append("title", title);
//   formData.append("imageURL", imageFile); 
//   formData.append("description", description);
//   formData.append("price", price);
//   formData.append("rating", rating);
//   if (fieldStep >= 1) formData.append("powerInput",powerInput);
// if (fieldStep >= 2) formData.append("powerOuput",powerOuput);
// if (fieldStep >= 3) formData.append("safetyFeature",safetyFeature);
// if (fieldStep >= 4) formData.append("userInterface",userInterface);
// if (fieldStep >= 5) formData.append("envirmentdesign",envirmentdesign);

  

//   axios
//     .post("/products/add", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     })
//     .then(() => {
//       setTitle("");
//       setImageFile(null);
//       setDescription("");
//       setPrice(0);
//       setRating(0);
      
//       alert("Product added successfully!");
//             navigate("/Main");
//     })
//     .catch((error) => alert(error.message));
// };
//  return (
//   <Container>
//       <Logo>
        
//         <img src='./LOGO.png' alt="Logo" />
//       </Logo>
//       {/* <Navbar/> */}

//       <FormContainer>
//         <h3>Add Product</h3>

//         <InputContainer>
//           <p>Title</p>
//           <input
//             type="text"
//             onChange={(e) => setTitle(e.target.value)}
//             value={title}
//           />
//         </InputContainer>
       
//         <InputContainer>
//           <p>Product Image</p>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImageFile(e.target.files[0])}
//             required
//           />
//         </InputContainer>
//          <InputContainer>
//           <p>Product Description</p>
//           <input
//             type="text"
//             onChange={(e) => setDescription(e.target.value)}
//             value={description}
//           />
//         </InputContainer>

//          <InputContainer>
//           <p>Price</p>
//           <input
//             type="number"
//             onChange={(e) => setPrice(e.target.value)}
//             value={price}
//           />
//         </InputContainer>
//         <InputContainer>
//           <p>Rating</p>
//           <input
//             type="number"
//             onChange={(e) => setRating(e.target.value)}
//             value={rating}
//           />
//         </InputContainer> 

//         <ExtraFieldToggleButton
//   type="button"
//   onClick={() => setFieldStep((prev) => prev + 1)}
//   disabled={fieldStep >= 5}
// >
//   {fieldStep === 0 && "Add Power Input Field"}
//   {fieldStep === 1 && "Add Power Output Field"}
//   {fieldStep === 2 && "Add Safety Feature Field"}
//   {fieldStep === 3 && "Add User Interface Field"}
//   {fieldStep === 4 && "Add Environmental Design Field"}
//   {fieldStep >= 5 && "All Fields Added"}
// </ExtraFieldToggleButton>

// {fieldStep >= 1 && (
//   <InputContainer>
//     <p>Power Input</p>
//     <input
//       type="text"
//       onChange={(e) => setPowerInput(e.target.value)}
//       value={powerInput}
//     />
//   </InputContainer>
// )}

// {fieldStep >= 2 && (
//   <InputContainer>
//     <p>Power Output</p>
//     <input
//       type="text"
//       onChange={(e) => setPowerOutput(e.target.value)}
//       value={powerOuput}
//     />
//   </InputContainer>
// )}

// {fieldStep >= 3 && (
//   <InputContainer>
//     <p>Safety Feature</p>
//     <input
//       type="text"
//       onChange={(e) => setSafetyFeature(e.target.value)}
//       value={safetyFeature}
//     />
//   </InputContainer>
// )}

// {fieldStep >= 4 && (
//   <InputContainer>
//     <p>User Interface</p>
//     <input
//       type="text"
//       onChange={(e) => setUserUnterface(e.target.value)}
//       value={userInterface}
//     />
//   </InputContainer>
// )}

// {fieldStep >= 5 && (
//   <InputContainer>
//     <p>Environmental Design</p>
//     <input
//       type="text"
//       onChange={(e) => setEnvirmentDesign(e.target.value)}
//       value={envirmentdesign}
//     />
//   </InputContainer>
// )}
// <Button onClick={addProduct}>Add Product</Button>
       
  
// </FormContainer>

       
//     </Container>
//   );
// }

// const Container = styled.div`
//   width: 40%;
//   min-width: 450px;
//   height: fit-content;
//   padding: 15px;
//   margin: auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Logo = styled.div`
//   width: 200px;
//   margin-bottom: 20px;
//   img {
//     width: 100%;
//   }
// `;

// const FormContainer = styled.form`
//   border: 1px solid lightgray;
//   width: 55%;
//   height: fit-content;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 15px;

//   h3 {
//     font-size: 28px;
//     font-weight: 400;
//     line-height: 33px;
//     align-self: flex-start;

//     margin-bottom: 10px;
//   }
// `;

// const InputContainer = styled.div`
//   width: 100%;
//   padding: 10px;

//   p {
//     font-size: 14px;
//     font-weight: 600;
//   }

//   input {
//     width: 95%;
//     height: 33px;
//     padding-left: 5px;
//     border-radius: 5px;
//     border: 1px solid lightgray;
//     margin-top: 5px;

//     &:hover {
//       border: 1px solid orange;
//     }
//   }
// `;

// const Button = styled.button`
//   width: 70%;
//   height: 35px;
//   background-color: #1487f3ff;
//   border: none;
//   outline: none;
//   border-radius: 10px;
//   margin-top: 30px;
// `;
// const ProductList = styled.div`
//   width: 100%;
//   margin-top: 30px;
// `;

// const ProductCard = styled.div`
//   border: 1px solid #ddd;
//   padding: 15px;
//   margin-bottom: 10px;
//   border-radius: 10px;
// `;

// const DeleteButton = styled.button`
//   margin-top: 10px;
//   background-color: red;
//   color: white;
//   border: none;
//   padding: 6px 12px;
//   border-radius: 5px;
// `;
// const ExtraFieldToggleButton = styled.button`
//   width: 50%;
//   height: 30px;
//   margin-top: 20px;
//   background-color: transparent;
//   border: 1px dashed gray;
//   border-radius: 8px;
//   cursor: pointer;
//   font-size: 14px;

//   &:hover {
//     background-color: #eee;
//   }
// `;



// export default AddProduct;

import React, { useState } from "react";
import styled from "styled-components";
import axios from "../../axios";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState(null);
  const [dynamicFields, setDynamicFields] = useState([]);

  const handleAddField = () => {
    setDynamicFields([...dynamicFields, { label: "", value: "" }]);
  };
  const handleRemoveField = (index) => {
    const updatedFields = [...dynamicFields];
    updatedFields.splice(index, 1);
    setDynamicFields(updatedFields);
  };

  const handleFieldChange = (index, fieldType, fieldValue) => {
    const updatedFields = [...dynamicFields];
    updatedFields[index][fieldType] = fieldValue;
    setDynamicFields(updatedFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("rating", rating);
    formData.append("image", image);

    // Add dynamic fields to FormData
    dynamicFields.forEach(({ label, value }) => {
      if (label && value) {
        formData.append(label, value);
      }
    });

    try {
      const res = await axios.post("/products/add", formData);
      alert("Product added successfully!");
      setTitle("");
      setDescription("");
      setPrice("");
      setRating("");
      setImage(null);
      setDynamicFields([]);
    } catch (err) {
      console.error(err);
      alert("Error while adding product");
    }
  };
 

  return (
    <Container onSubmit={handleSubmit}>
        <Logo>
        <img src="./GRIN ENERGY.png" alt="Logo" />
       </Logo>
      <h2>Add Product</h2>

      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

      <label>Price:</label>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />

      <label>Rating:</label>
      <input type="number" value={rating} step="0.1" onChange={(e) => setRating(e.target.value)} required />

      <label>Image:</label>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} required />

      <hr />

      <h3>Custom Fields</h3>
      
      {dynamicFields.map((field, index) => (
        <CustomField key={index}>
          <input style={{width:"50%",textTransform:"uppercase"}}
            type="text"
            placeholder="Field Name "
            value={field.label}
            onChange={(e) => handleFieldChange(index, "label", e.target.value.toUpperCase())}
            required
          />
          <textarea style={{width:"50%"}}
            type="textarea" row="5"
            placeholder="Value "
            value={field.value}
            onChange={(e) => handleFieldChange(index, "value", e.target.value)}
            required
          />
           <button style={{width:'9px', border:"none"}} type="button" onClick={() => handleRemoveField(index)}>❌</button>
        </CustomField>
      ))}
      <button type="button" onClick={handleAddField}>+ Add Custom Field</button>

      <SubmitButton type="submit">Add Product</SubmitButton>
      
    </Container>
  );
}

export default AddProduct;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
  margin: auto;
  padding: 20px;
`;

const CustomField = styled.div`
  display: flex;
  gap: 10px;
  input {
    flex: 1;
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  background: #0066ff;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 20px;
`;
const Logo = styled.div`
  // width: 400px;
  //  margin-bottom: 20px;
margin-inline-start:5%;
  img {
     width: 100%;
      width: 500px;
     height:100px;
   }
      @media only screen and (max-width: 767px) {
      width:90%;
    
      margin-inline-start:-30%;
      // margin: 10%;
      img {
     width: 400px;
     height:100px;
   }}
 `;

