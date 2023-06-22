import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import sendEmail from "@/pages/api/send-email";
import styles from "@/styles/Home.module.css";
import { AiOutlineSend } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import Sppinner from "./Sppinner";
import "react-toastify/dist/ReactToastify.css";

function BasicExample() {
  const [values, setValues] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [resultRegex, setResultRegex] = useState(false);

  const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  const handlerInputs = async (e) => {
    e.preventDefault();
    if (regex.test(values.email)) {
      setResultRegex(!resultRegex);
      try {
        const req = await sendEmail(
          values.email,
          values.subject,
          values.message
        );
        if (req.status === 200) {
          toast.success("Email sent!", {
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
          });
          setResultRegex(false);
        } else {
          toast.error("There was an error, please try again later!", {
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
        console.error(error);
      }
    } else {
      toast.error("Please enter a valid email address!", {
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
  };

  return (
    <div className={`container ${styles.containerForm} mt-4 mb-4`}>
      <h1 className={`${styles.titleSkill} text-center`}>Contact me</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter email"
            value={values.email}
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
            className="w-100 w-lg-50"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Subject"
            value={values.subject}
            name="subject"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
            className="w-100 w-lg-50"
          />
        </Form.Group>
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            name="message"
            value={values.message}
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
            className="w-100 w-lg-50"
          />
        </FloatingLabel>
        <Button
          variant="primary"
          type="submit"
          className="mt-2 d-flex align-items-center"
          onClick={handlerInputs}
        >
          <p className="mb-0">
            {resultRegex === false ? (
              <AiOutlineSend />
            ) : (
              <Sppinner value={resultRegex} />
            )}
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
