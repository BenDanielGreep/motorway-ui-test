import React, { useEffect, useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
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
            <Col  xs={6} md={4}>
      {
        images && images.map(img => (
          // <div key={img.id} >
          //   <img src={`${img.url}.jpg`} alt=''/>
          //   <img src={`${img.user.profile_image}.webp`} alt=''/>
          // </div>
              <div key={img.id}>
                <Image src={`${img.url}.jpg`} rounded fluid />
                <Image alt={`${img.user.profile_image}`} src={'https://avatars.dicebear.com/v2/male/:seed.svg'} thumbnail fluid />
              </div>
          ))
        }
            </Col>
          </Row>

    </Container>
    
  );
}


export default App;
