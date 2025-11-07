import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ProfileCard({ id, name, likes, onLike }) {
  return (
    <Card className="mb-3 shadow-sm text-center">
      <Card.Body>
        <Card.Title className="h5 mb-2">{name}</Card.Title>
        <Card.Text className="mb-3">Likes: {likes}</Card.Text>
        <Button variant="primary" onClick={() => onLike(id)}>
          👍 Like
        </Button>
      </Card.Body>
    </Card>
  );
}
