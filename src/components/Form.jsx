import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import sendEmail from "@/pages/api/send-email";
import styles from "@/styles/Home.module.css";
import { AiOutlineSend } from "react-icons/ai";
import Sppinner from "@/components/Sppinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function BasicExample() {
  const [values, setValues] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [showMe, setNotShowme] = useState(false);
  const [resultRegex ,setResultRegex]=useState(false)
  const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  ;

  // function to send email if this params is ok so show me a tost 
  const handler = async (e) => {
    e.preventDefault();
 
    try {
      const req = await sendEmail(values.email, values.subject, values.message);
      if (req.status === 200) {
        setNotShowme(false)
        toast.success('Email sent!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          setValues({
            email: "",
            subject: "",
            message: "",
          })
      }else{
        toast.error('There  was are an error, please try again later !', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  const handlerInputs = (e) => {
    console.log(regex.test(e.target.value))
    // if(regex.test(values)=== false){ 
    //   toast.error(' please try again later !', {
    //     position: "bottom-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     });
    // }else{
    //   let result = regex.test(values)
    //   setResultRegex(result)
    //   console.log(resultRegex)
    //   setValues({ ...values, [e.target.name]: e.target.value });
    //   handler()
    // }
   
  
  };
  
  return (
    <div className="container container-form mt-4 mb-4">
      <h1 className={`${styles.titleSkill} text-center`}>Contact me</h1>
      <Form onSubmit={()=> handlerInputs()}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"

            placeholder="Enter email"
            onChange={(e) => handlerInputs(e)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Subject"
            name="subject"
            onChange={(e) =>  handlerInputs(e)}
          />
        </Form.Group>
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            name="message"
            onChange={(e) =>  handlerInputs(e)}
          />
        </FloatingLabel>
        <Button
          variant="primary"
          type="submit"
          className="mt-2 items-center"
          
        >
       <p className="mb-0">
  {showMe === false ? <AiOutlineSend/> : <Sppinner value={resultRegex} />}
</p>
        </Button>
  
      </Form>
<ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>
  );
}

export default BasicExample;
