import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TextLinkExample() {
  return (
    <Navbar  style={{backgroundColor:'#EAE0DA',fontSize:20, heigth :100}}   >
      <Container >
        <Navbar.Brand style={{fontSize:25,color:'black'}}href="#home">My Portfolio</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mohamed Laaribi</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;