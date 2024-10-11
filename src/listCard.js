import React from 'react';
import Card from './Card';
import { Container } from 'react-bootstrap';

const ListCard = () => {
    return (
        <div >
            <Container>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </Container>
            
        </div>
    );
};

export default ListCard;