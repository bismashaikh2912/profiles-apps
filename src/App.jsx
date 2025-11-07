import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileCard from './components/ProfileCard.jsx';
import { profiles } from './data/profiles.js';

export default function App() {

  const [people, setPeople] = useState(profiles);
  const [name, setName] = useState('');
  const [error, setError] = useState('');


  const handleLike = (id) => {
    setPeople(ps =>
      ps.map(p =>
        p.id === id ? { ...p, likes: p.likes + 1 } : p
      )
    );
  };

  return (
    <Container className="py-4">
      <h1 className="mb-4 text-center">Profiles</h1>
      <form
      className="mb-4"
      onSubmit={(e) => {
        e.preventDefault(); 

        const trimmed = name.trim();
        const exists = people.some(
          (p) => p.name.toLowerCase() === trimmed.toLowerCase()
        );

        if (!trimmed) {
          setError('Name is required');
          return;
        }
        if (exists) {
          setError('Name must be unique');
          return;
        }

        // Add new profile
        const newProfile = { id: people.length + 1, name: trimmed, likes: 0 };
        setPeople([...people, newProfile]);

        setName('');
        setError('');
      }}
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        className={error ? 'border border-danger' : ''}
      />
      <button type="submit" className="btn btn-success ms-2">
        Add
      </button>
      {error && <div className="text-danger mt-1">{error}</div>}
    </form>

      <Row xs={1} md={2} lg={3}>
        {people.map(p => (
          <Col key={p.id}>
            {/* Pass handleLike and id to ProfileCard */}
            <ProfileCard
              id={p.id}
              name={p.name}
              likes={p.likes}
              onLike={handleLike}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
