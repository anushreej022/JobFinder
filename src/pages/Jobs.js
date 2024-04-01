import React from 'react';
import Cards from './Cards/Cards'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import JobPosting from '../images/job_posting.jpg';

function Jobs() {
  const jobPosts = [
    {
    id: 1,
    title: "Full Stack Developer",
    description: 'Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.',
    lastUpdated: 'Last updated 2 days ago',
    applyLink: 'https://example.com/apply/full-stack-developer',
    },
    {
    id: 2,
    title: 'Digital Marketing Specialist',
    description: 'Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.',
    lastUpdated: 'Last updated 1 day ago',
    applyLink: 'https://example.com/apply/digital-marketing-specialist',
    },
    {
    id: 3,
    title: 'UX/UI Designer',
    description: 'Shape engaging user experiences and create visually captivating designs. Work alongside cross-functional teams to turn ideas into reality.',
    lastUpdated: 'Last updated 4 hours ago',
    applyLink: 'https://example.com/apply/ux-ui-designer',
    },
    {
    id: 4,
    title: 'Data Scientist',
    description: 'Leverage advanced analytics and machine learning to uncover insights from vast data sets. Proficiency with Python and R is a must.',
    lastUpdated: 'Last updated 3 days ago',
    applyLink: 'https://example.com/apply/data-scientist',
    },
    {
    id: 5,
    title: 'Customer Support Representative',
    description: 'Deliver unparalleled customer service and support. Exceptional communication skills and a knack for solving problems are key.',
    lastUpdated: 'Last updated 6 hours ago',
    applyLink: 'https://example.com/apply/customer-support-representative',
    }
  ];

  var cardStyle = {
    margin: "80px",
    padding: 0
  };

  var cardBody = {
    color:"blue"
  };

  return (
    <div>
      <br />
      <h1 className="text-center">JOBS</h1>'
      <br />
      <Card className="text-center" style={cardStyle}>
        <Card.Header>Featured Jobs for You</Card.Header>
        <Card.Body>
          <Card.Title>Software Engineer Intern</Card.Title>
          <Card.Text>
            You’ll work alongside the best and the brightest engineering talent in the industry. We have opportunities in a wide range of areas including development, design, search, platform, test, quality, big data, front end and back end. As a core participant of your team, you’ll estimate engineering efforts, design your changes, implement and test your changes, push to live, and triage production issues. You need to be dynamic, collaborative, and curious as we build new experiences, improve existing products, and develop distributed systems powering the world’s largest e-commerce and payments websites at a scale only a few companies can match.
          </Card.Text>
          <Button variant="primary">Apply Now</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Job Posted: 2 days ago</Card.Footer>
      </Card>
      <br /><br /><br />
      <h2>Recent Jobs:</h2>
      <Row xs={1} md={2} className="g-4" style={cardStyle}>
        {jobPosts.map((jobPosts) => (
          <Col>
            <Card border="success" style={cardBody}>
              <Card.Img variant="top" src={JobPosting} />
              <Card.Body>
                <Card.Title>{jobPosts.title}</Card.Title>
                <Card.Text>
                  {jobPosts.lastUpdated}
                </Card.Text>
                <Card.Text>
                  {jobPosts.description}
                </Card.Text>
                <Button variant="primary" href={jobPosts.applyLink}>Apply Now</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <Cards id='Jobs'></Cards>
    </div>
  )
}

export default Jobs;