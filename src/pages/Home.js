
import React from 'react';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.png';
import image3 from '../images/image3.webp';
import image4 from '../images/image4.webp';
import image5 from '../images/image5.jpg';
import Cards from "./Cards/Cards";

function Home() {
    var cardStyle = {
      margin: "80px",
      padding: 0
    };
  
  return (
    <div>
        <header className="py-5 bg-light border-bottom mb-4">
            <div className="container">
                <div className="text-center my-5">
                    <h1 className="fw-bolder">Welcome to Home!</h1>
                    <p className="lead mb-0">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </header>
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="card mb-4">
                        <a href="#!"><img className="card-img-top" src={image1} alt="..." /></a>
                        <div className="card-body">
                            <div className="small text-muted">January 1, 2022</div>
                            <h2 className="card-title">Featured Post Title</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                            <a className="btn btn-primary" href="#!">Read more →</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card mb-4">
                                <a href="#!"><img className="card-img-top" src={image2} alt="..." /></a>
                                <div className="card-body">
                                    <div className="small text-muted">February 1, 2022</div>
                                    <h2 className="card-title h4">Post Title</h2>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a className="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <a href="#!"><img className="card-img-top" src={image3} alt="..." /></a>
                                <div className="card-body">
                                    <div className="small text-muted">March 1, 2022</div>
                                    <h2 className="card-title h4">Post Title</h2>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a className="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card mb-4">
                                <a href="#!"><img className="card-img-top" src={image4} alt="..." /></a>
                                <div className="card-body">
                                    <div className="small text-muted">April 1, 2022</div>
                                    <h2 className="card-title h4">Post Title</h2>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a className="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <a href="#!"><img className="card-img-top" src={image5} alt="..." /></a>
                                <div className="card-body">
                                    <div className="small text-muted">May 1, 2022</div>
                                    <h2 className="card-title h4">Post Title</h2>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla?</p>
                                    <a className="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav aria-label="Pagination">
                        <hr className="my-0" />
                        <ul className="pagination justify-content-center my-4">
                            <li className="page-item disabled"><a className="page-link" href="#" tabindex="-1" aria-disabled="true">Newer</a></li>
                            <li className="page-item active" aria-current="page"><a className="page-link" href="#!">1</a></li>
                            <li className="page-item"><a className="page-link" href="#!">2</a></li>
                            <li className="page-item"><a className="page-link" href="#!">3</a></li>
                            <li className="page-item disabled"><a className="page-link" href="#!">...</a></li>
                            <li className="page-item"><a className="page-link" href="#!">15</a></li>
                            <li className="page-item"><a className="page-link" href="#!">Older</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-4">
                    <div className="card mb-4">
                        <div className="card-header">Search</div>
                        <div className="card-body">
                            <div className="input-group">
                                <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">Categories</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#!">Nature</a></li>
                                        <li><a href="#!">Wildlife</a></li>
                                        <li><a href="#!">Node</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#!">JavaScript</a></li>
                                        <li><a href="#!">CSS</a></li>
                                        <li><a href="#!">React</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">Side Widget</div>
                        <div className="card-body">Connect on Facebook, Instagram, Snapchat, LinkedIn!</div>
                    </div>
                </div>
            </div>
        </div>
        <Cards id="Home"></Cards>
    </div>
  )
}

export default Home