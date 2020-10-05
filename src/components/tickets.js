import React from 'react'
import { Card } from 'react-bootstrap';

function Tickets({ ticket }) {
	return (
		<Card>
			<Card.Body>
				<Card.Title>{ticket.title}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">{ticket.status}</Card.Subtitle>
				<Card.Text>
					{ticket.desc}
				</Card.Text>
				<Card.Text>{ticket.priority}</Card.Text>
				{/* <Card.Text>{ticket.status}</Card.Text> */}
			</Card.Body>
		</Card>
	);
}

export default Tickets;