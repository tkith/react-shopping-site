import React from 'react';
// Components
import CategoryButton from './CategoryButton';
// Bootstrap
import { Container, Row } from 'react-bootstrap';
// Material UI
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import WatchOutlinedIcon from '@material-ui/icons/WatchOutlined';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
// CSS
import './Categories.css';

const Categories = () => {
    return (
        <Container fluid className="ml-3">
            <Row>
                <h1>Products Categories</h1>
            </Row>

            <Row className="category-container mt-4 mr-4">
                <CategoryButton icon={<PhotoCameraOutlinedIcon />} title="Consumer Electronics" />
                <CategoryButton icon={<LocalHospitalOutlinedIcon />} title="Health & Beauty" />
                <CategoryButton icon={<HomeOutlinedIcon />} title="Home & Garden" />
                <CategoryButton icon={<WatchOutlinedIcon />} title="Accessories" />
                <CategoryButton icon={<PeopleAltOutlinedIcon />} title="Women's Clothing" />
                <CategoryButton icon={<PeopleAltOutlinedIcon />} title="Men's Clothing" />
            </Row>
        </Container>
    );
}

export default Categories;