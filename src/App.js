import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import MyVerticallyCenteredModal from './components/Modal';


const App = () => {
  const [images, setImages] = useState();
  const [modalShow, setModalShow] = React.useState(false);
  const [modalImage, setModalImage] = useState('');


  useEffect(() => {
    fetch('images?limit=20')
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
                <Card.Img variant="top" src={`${img.url}.jpg`} onClick={() => (setModalShow(true), setModalImage(img))} />
                <Card.Body>
                  <Card.Text>
                    by {img.user.name} <br />
                    Location: {img.user.location || "Not Available"}
                  </Card.Text>
                  <Image className="avatar" src={`${img.user.profile_image}.webp`} />
                </Card.Body>
              </Card>
          ))
        }

          </Row>
        <MyVerticallyCenteredModal
          img={modalImage}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
    </Container>
    
  );
}


export default App;
