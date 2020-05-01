import React from 'react';
import PlaceList from '../components/PlaceList';
import {useParams} from 'react-router-dom';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://media.timeout.com/images/101705309/image.jpg',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Thanchai Periya Kovil',
        description: 'It is one of the largest South Indian temples and an exemplary example of a fully realized Dravidian architecture',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Brihadeeswarar_Kovil.jpg',
        address: 'Membalam Rd, Balaganapathy Nagar, Thanjavur, Tamil Nadu 613007, India',
        location: {
            lat: 10.7829727,
            lng: 79.1296792
        },
        creator: 'u2'
    },
    {
        id: 'p3',
        title: 'Mahabalipuram',
        description: 'It’s known for its temples and monuments built by the Pallava dynasty in the 7th and 8th centuries. The seafront Shore Temple comprises 3 ornate granite shrines.',
        imageUrl: 'https://www.earthismysterious.com/wp-content/uploads/2020/01/Five-Rathas-Mahabalipuram.jpg',
        address: 'Mamallapuram, Tamil Nadu 613007, India',
        location: {
            lat: 12.6223265,
            lng: 80.1736327
        },
        creator: 'u3'
    }
]
const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedplaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return(
        <PlaceList items={loadedplaces}/>
    )
}

export default UserPlaces;