import React, { useState, useEffect } from "react";
import { Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { BsDisplay } from "react-icons/bs";
import { CgColorBucket } from "react-icons/cg";
import "./Login.css"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;



function Login() {
    const initialValues = {
        emailOrUsername: "",
        password: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors, formValues, isSubmit]);

    const validate = (values) => {
        const errors = {};
        if (!values.emailOrUsername) {
            errors.emailOrUsername = "Email or Username is required!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        }
        return errors;
    };

    return (
      <>
        <form>
            <h3>Login Here</h3>

            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Email or Phone" id="username" />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" />

            <button>Log In</button>
            <div className="social">
                <div className="go"><i className="fab fa-google"></i> Google</div>
                <div className="fb"><i className="fab fa-facebook"></i> Facebook</div>
            </div>
        </form>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </>
    );
}

export default Login;
