import React, { useEffect, useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <Container className='app' >
          <Row>

      {
        images && images.map(img => (
              <Card key={img.id} border="light">
                <Card.Img variant="top" src={`${img.url}.jpg`} />
                <Card.Body>
                  <Card.Text>
                    by {img.user.name} <br />
                    Location: {img.user.location || "Not Available"}
                  </Card.Text>
                  <Image className="avatar" src={`${img.user.profile_image}.webp`} rounded />
                </Card.Body>
              </Card>
          ))
        }

          </Row>

    </Container>
    
  );
}


export default App;
