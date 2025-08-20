import React,{useState,useEffect} from "react";
//import { Navigate } from "react-router-dom";
//import logo from "./images/fulllogo.png";
//import "./styles.css";
import Header from "./Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import { Divider } from "@material-ui/core";
// import ProductDropdown from "./ProductDropdawn"; // adjust path if needed
import Footer from "./Footer";
import axios from "../axios";
// import { FormContainer, InputContainer, Button } from "./StyledComponents";

export default function ContactUsPage() {
 

  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState([]);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [products, setProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  

    useEffect(() => {
    axios
      .get("/products/get") // Make sure your backend route is correct
      .then((res) => {
        setProducts(res.data); // Set products to state
      })
      .catch((err) => {
        console.error("Failed to fetch products", err);
      });
  }, []);

  const toggleTitle = (title) => {
    setTitle((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  const nameRegex = /^[a-zA-Z\s'.-]{2,}$/;
  const contactRegex = /^[6-9]\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!nameRegex.test(name)) {
    alert("Please enter a valid name.");
    return;
  }

  if (!contactRegex.test(contact)) {
    alert("Please enter a valid 10-digit contact number.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }
   
   if (title.length === 0) {
    alert("Please select at least one product.");
    return;
  }
if (message.trim() !== "" && message.trim().length < 10) {
  alert("If you choose to enter a message, it must be at least 10 characters.");
  return;
}

  const formData = {
    name,
    contact,
    email,
  //  title,
    message,
    title: title.join(", "),
  };

  try {
    const res = await axios.post("/enquiry/post", formData);
    if (res.status === 200) {
      setSuccess(true);
      setName("");
      setContact("");
      setEmail("");
      setTitle("");
      setMessage("");
    }
  } catch (err) {
    console.error("Failed to send enquiry:", err);
    alert("Something went wrong. Please try again.");
  }
};


const sendWhatsAppMessage = () => {
    const phoneNumber = "918788449561"; // Your WhatsApp number with country code
    const fullMessage = `Hello, my name is ${name}. ${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };



    return (

<Container>
  <StickyHeader>
    <Header/>
  </StickyHeader>
    
    <div>
        <h1><u>Contact Us</u></h1>
        <p> We'd love to hear from you. Whether you have a question about products,
          pricing, demo, or anything else, our team is ready to answer all your questions.</p>
    </div>
<Div>

    <FormContainer>
        
            <h2 style={{marginTop:'55px'}} > Reach Us </h2>
        <h3 ><strong> Address:</strong></h3>
        <p><strong>GRIN ENERGY</strong> <br></br>Baheti Layout,Behind TolKata , Hingoli Highway,Washim-444505</p>
       
   <br></br>
  <p> <strong >📞 Phone:</strong> +91-8788449561</p>
   <br></br>
   <p style={{marginTop:"-15px"}}> <strong >📧 Email:</strong> info@grinenergy.in</p>
    <br></br>
    <p style={{marginTop:"-15px",marginLeft:"33px"}}> <strong>GSTIN :</strong> 27FSAPB6518P1ZE</p>
    <Icon>
         <a href="https://maps.app.goo.gl/mLXbEEYPY76Fvd7h7" target="_blank"
  rel="noopener noreferrer"> <img src="./map.png" style={{width:'28px',marginLeft:'100px',marginTop:"30px",padding:'0.4rem'}} title="Click Here For Map"></img></a>
  
    <img src="./whatsapp.png" onClick={sendWhatsAppMessage} title="click here for whatsapp"></img>
  </Icon>
   </FormContainer>
        <FormContainer  onSubmit={handleSubmit}>
            <h2> Get In Touch</h2>
           <InputContainer>
           
           <input className="contactinput" type="name" placeholder="Enter Name" value={name}
        onChange={(e) => setName(e.target.value)}
         required>
           </input>
           </InputContainer>
            <InputContainer>
      
           <input className="contactinput" type="number" placeholder="Contact No."   value={contact}
            onChange={(e) => setContact(e.target.value)}
             required>
           </input>
           </InputContainer>
            <InputContainer>
          
           <input className="contactinput" type="email" placeholder="Enter Email"  value={email}
            onChange={(e) => setEmail(e.target.value)}
             required>
           </input>
           </InputContainer>
           
 
         <InputContainer   style={{ position: "relative", marginBottom: "10px" }}>
  <div className="contactdiv"
   onClick={() => setShowDropdown(!showDropdown)}
  >
    {title.length > 0 ? (
      title.map((t) => (
        <span
          key={t}
          style={{
            backgroundColor: "#e0f7fa",
            margin: "2px",
            padding: "2px 6px",
            borderRadius: "4px",
            fontSize: "1rem",
          }}
        >
          {t}
        </span>
      ))
    ) : (
      <span className="span">
      <strong></strong>What products are you interested in?▼
      </span>
       
    )}
  </div>

  {showDropdown && (
    <div 
      style={{
        position: "absolute",
        top: "100%",
        left: 30,
        width: "72%",
        backgroundColor: "#fff",
        // backgroundColor: "#e0f7fa",
        border: "1px solid #ccc",
        maxHeight: "180px",
        overflowY: "auto",
        zIndex: 1000,
        // boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
        borderRadius: "4px",
       
      }}
    >
      {products.map((product) => (
        <label 
          key={product._id}
          style={{
            display: "flex",
    alignItems:"flex-start",
     paddingTop:"2px",
    padding: "1px",
    // borderBottom: "1px solid #eee",
    cursor: "pointer",
    // gap: "10px",
    // fontSize: "14px",
    lineHeight: "1.2",
      textAlign: "left",
    direction: "ltr", 
          }}
        >
          <input 
            type="checkbox"
            value={product.title}
            checked={title.includes(product.title)}
            onChange={() => toggleTitle(product.title)}
              style={{ transform: "scale(1)",  margin: 10,
 
   }}
          />
           <span style={{ whiteSpace: "normal", flex: 1 ,paddingTop:"5px",}}>{product.title}</span>
        </label>
      ))}
    </div>
  )}
</InputContainer>
 <InputContainer>
  <textarea rows='5' type="name" placeholder="Message(Optional)"
    value={message}
     onChange={(e) => setMessage(e.target.value)}
    ></textarea>
       </InputContainer>
      <InputContainer>
       <Button type="submit" 
       >Send Message</Button>
    </InputContainer>
    {success && <p style={{ color: "green",textAlign:'center' }}>Message sent successfully!</p>}
        </FormContainer>
      </Div>  
        
  {/* <footer>
        <p>© 2025<strong className='grin'> GRIN ENERGY</strong>. All rights reserved.</p>
        <div>
         <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="products">Products</a>
          <a href="aboutUs">Privacy Policy</a>
        </div>
      </footer>
     */}
     <Footer/>


</Container>


  
  );
}
const Container = styled.div`
  width: 100%;
//   height: 80px;
   background-color:#f3f4f6;
//   display: flex;
  align-items: center;
  

//   justify-content:space-around;
  h1{
    margin-top:40px;
    font-size:2.5rem;
    padding-left:50px;
    padding-bottom:10px;
    font-weight: bold;
    

  }
   p{
   padding-left:50px;
   }

  @media only screen and (max-width: 767px) {
    height: 150px;
    h1{
  
   font-size:2rem;
   
  }
`;
const StickyHeader= styled.div`
 position: sticky;
  top: 0;
  z-index: 1000; 
 @media (max-width: 768px) {
    position: sticky;
  top: 0;
  z-index: 1000; 
  }`;
const Div = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content:space-evenly;
gap:2rem;
  @media only screen and (max-width: 767px) {
   width: 90%;
     justify-content: space-around;
    display:inline;
    
}
`;
const FormContainer = styled.form`
  border: 1px solid #F3F4F6;
   background-color:white;
     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 1rem;

  width: 40%;
  height:600px;
//  display:grid;
    margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
//   flex: 0.7;
  
    margin-bottom:30px;

   padding-left: 15px;
   padding-right: 15px;
//  gap:2rem;
 justify-content: center;
 flex-wrap: wrap;

  margin-top:70px;

  h2{

    text-align:center;
    //   padding-top:10px;
     
        font-size: 2rem;
    font-weight:bold;
    margin-bottom: 3rem;
   color:#03a00b;
      }
   

  h3 {
    font-size: 25px;
    font-weight: 400;
    //  line-height: 33px;
    align-self: flex-start;
     padding-left:50px;
      padding-top:-20px;
    // margin-bottom: 10px;
  }
    p{
     padding-left:50px;
      
    }
     a{
      padding-left:50px;
     
     
     }
      
     
     @media only screen and (max-width: 767px) {
   width: 70%;
    // justify-content: space-around;
     display:inline-block;
    //   padding:20px;
       margin-left:10%;
      height:auto;
       h2{
    padding-top:10px;}
    h3{
     padding-top:5px;}
}
      
     
`;
const InputContainer = styled.div`
    width: 80%;
    display: inline-block;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left:15%;

 
  

    
    
    textarea{
    font-family: serif;
    padding:4px;
     font-size: 1.2rem;
    // font-weight:bold;
    width:70%;
    height: 33px;
   margin:10px;
    border-radius: 5px;
    border: 1px solid gray;
    // margin-top: 5px;
   margin-left:30px;
    &:hover {
       border: 1px solid orange;
    }
    }
     @media only screen and (max-width: 767px) {
      width:80%;
        margin-left:9%;
 input{
  width:90%;
    height: 70%;
 font-size: 1rem;
  padding: 5px;
margin:2%;
}
   textarea{
     width:89%;
    
 font-size: 1.2rem;
  padding: 5px;
margin:2%;
   }
 select{
     width:94%;
    
 font-size: 1.2rem;
  padding: 5px;
margin:2%;
   }
     }
`;
const Button =styled. button`

padding: 5px;
width:75%;

 margin-left: 6%;
 margin-top: 30px;
 background-color: #1e3a8a;
color:white;
color: white;
font-size:1.2rem;
&:hover{
background-color: #032f8eff;}
 @media only screen and (max-width: 767px) {
      width:80%;
      margin: 10%;}
`;
const Icon = styled.div`
img{
display:inline;
margin-left:50px;
// margin-bottom:0px;
cursor: pointer;
width:50px;
background-color: #eff2f3ff;
border:3px solid #f8fbfcff ;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 1rem;
}
`
