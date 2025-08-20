

// src/Components/ProductDetails.js
import React, { useEffect, useState } from "react";
import { navigate, useNavigate, useParams } from "react-router-dom";
import axios from "../axios";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
function ProductDetails() {
   const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/products/update/${id}`) // your backend GET by ID
      .then(res => setProduct(res.data))
      .catch(err => console.error("Error fetching product:", err));
  }, [id]);

  // if (!product) return <p>Loading...</p>;

  return (
     <Div>
    <Header/>
    <DetailsContainer>
      
      {/* <Image src={`http://localhost:8000/uploads/${product.imageURL}`} alt={product.title} />
      <Info>
        <h2>{product.title}</h2>
        <p><strong>Price:</strong> ₹{product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Rating:</strong> ⭐ {product.rating}</p>
        {product?.customFields && (
  <div className="custom-fields">
    <h3>Product Specifications:</h3>
    <ul>
      {Object.entries(product.customFields).map(([key, value]) => (
        <li key={key}>
          <strong>{key}:</strong> {value}
        </li>
      ))}
    </ul>
  </div>
)}
       
      </Info> */}


       <div className="details-container"
      //  style={{ padding: "20px"}}
       >
      {product ? (
        <div>
          
        <div className="details-header">
         <Image
            src={`http://localhost:8000${product.imageURL}`}
            alt={product.title}
              // style={{ width: "300px", height: "auto" }}
          />
          <Info>
          <div className="detailsdiv" >
          <div className="details-info" >
               <h1 className="detailsh1">{product.title}</h1>
               <p><strong style={{marginBottom:"10px"}}>Description:</strong> {product.description}</p>
          {/* <p><strong>Price:</strong> ₹{product.price}</p> */}
          <p><strong>Rating:</strong> {product.rating}</p>
            </div>
          <button className="Button" style={{ marginLeft:"16%"}} onClick={()=>{navigate("/contactus");}}>Enquiry Now</button>
          </div>
         </Info>
          

          {/* 🔽🔽 Use this to show custom fields 🔽🔽 */}
          {product.customFields && (
             <div className="spec-section"
            //  style={{ marginTop: "20px", background: "#f5f5f5", padding: "15px", borderRadius: "8px" }}
             >
              <h3>Product Specifications:</h3>
              <div className="spec-grid" >
                 {Object.entries(product.customFields).map(([key, value]) => (
                <p key={key} className="para"><strong className="parakey">{key}:</strong> {value}</p>
              ))}
              </div>
          
            </div>
          )}
        </div>
        </div>
       
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
   
    </DetailsContainer>
    <Footer/>
    </Div>
  );
}

const DetailsContainer = styled.div`
   display: flex;
  padding: 40px;
  gap: 40px;
  align-items: flex-start;
  @media (max-width: 768px) {
  flex-direction: column;
    padding: 20px;
   
  }
`;

const Image = styled.img`
   width: 500px;
   height: 600px;
   object-fit: cover;
 
`;

const Info = styled.div`
  flex: 1;
  
  h1 {
    margin-bottom: 10px;
  }
  p {
    margin: 7px;
    line-height: 1.4;
    font-family: 'Times New Roman', Times, serif;
  }
`;
const Div= styled.div`
  margin-bottom: 200px;
   position: sticky;
  top: 0;
  z-index: 1000; 
`;


export default ProductDetails;

