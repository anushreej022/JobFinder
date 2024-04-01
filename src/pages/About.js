import React from "react";
import Cards from "./Cards/Cards";

function About() {
    return (
        <div className="wrapper">
            <header className="py-5 bg-light border-bottom mb-4">
            <div className="container">
                <div className="text-center my-5">
                    <h1 className="fw-bolder">About Us</h1>
                    <p className="lead mb-0">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </header>
            <div className="row aboutPannel">
                <div className="col-4">
                    <div class="card">
                        <div class="card-header">Quote</div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                <footer class="blockquote-footer">
                                    Generated From{" "}
                                    <cite title="Source Title">Lorem Ipsum</cite>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div class="card">
                        <div class="card-header">Quote</div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                <footer class="blockquote-footer">
                                    Generated From{" "}
                                    <cite title="Source Title">Lorem Ipsum</cite>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div class="card">
                        <div class="card-header">Quote</div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                <footer class="blockquote-footer">
                                    Generated From{" "}
                                    <cite title="Source Title">Lorem Ipsum</cite>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
            <Cards id="About"></Cards>
        </div>
    );
}

export default About;