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
        <Container fluid>
            <Row>
                <h1>Products Categories</h1>
            </Row>

            <Row className="category-container mt-4 justify-content-center">
                <CategoryButton icon={<PhotoCameraOutlinedIcon />} title="Consumer Electronics" bgColor="#C78283" textColor="white" />
                <CategoryButton icon={<LocalHospitalOutlinedIcon />} title="Health & Beauty" bgColor="#F4EBE8" />
                <CategoryButton icon={<HomeOutlinedIcon />} title="Home & Garden" bgColor="#CCDBDC" />
                <CategoryButton icon={<WatchOutlinedIcon />} title="Accessories" bgColor="#84C0C6" />
                <CategoryButton icon={<PeopleAltOutlinedIcon />} title="Women's Clothing" bgColor="#E0ACD5" textColor="white" />
                <CategoryButton icon={<PeopleAltOutlinedIcon />} title="Men's Clothing" bgColor="steelblue" textColor="white" />
            </Row>
        </Container>
    );
}

export default Categories;