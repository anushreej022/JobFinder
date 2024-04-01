import React from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Cards from "./Cards/Cards";

function Contact() {
    return (
        <div>
            <main classNameName="container-fluid alert-info" >
                <div className="row">
                    <section className="col-md-6 my-5 offset-md-3">
                        <h1 className="text-center">CONTACT US</h1>
                        <hr/>
                            <h5 className="text-center my-3">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</h5>

                            <Form>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" placeholder="Your Name"/>
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="Your Email"/>
                                </div>

                                <div className="form-group">
                                    <label>Subject</label>
                                    <input type="text" className="form-control" placeholder="Your Subject"/>
                                </div>

                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea className="form-control" rows="3" placeholder=" Your Message"></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary mt-3 btn-block rounded-pill">Send</button>

                            </Form>
                    </section>
                </div>

                <div className="row my-5">

                    <div className="col-md-4 text-center">
                        <i className="fa fa-map-marker fa-3x"></i>
                        <h5 className=" mt-3">Boston, MA</h5>
                    </div>

                    <div className="col-md-4 text-center">
                        <i className="fa fa-phone fa-3x"></i>
                        <h5 className="mt-3">+1 234 567 8923</h5>
                    </div>

                    <div className="col-md-4 text-center">
                        <i className="fa fa-envelope fa-3x"></i>
                        <h5 className="mt-3">contact@xyz.com</h5>
                    </div>

                </div>
            </main>

            <Cards id="Contact"></Cards>

        </div>
    )
}

export default Contact;