import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="./images/pic.jpg" />
      <Card.Body>
        <Card.Title>BRANDON!</Card.Title>
        <Card.Text>
          INFORMATION NO ONE NEEDS TO KNOW!!
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
