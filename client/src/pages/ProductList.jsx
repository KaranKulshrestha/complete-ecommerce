import React from 'react'
import styled from "styled-components"
import Navbar from "../components/Navbar";
import Announcemnets from "../components/Annoucements";
import Products from "../components/Products";
import Footer from '../components/Footer';
import Newsletter from "../components/Newsletter";
import {mobile} from '../responsive';

const Container = styled.div``
const Title = styled.div`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({
        width:"0px 20px",
        display:"flex",
        flexDirection:"column",
    })};
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({
        textAlign:"center",
        fontSize:"17px",
    })};
`

const Select = styled.select`
    padding: 10px;
    margin: 20px;
`
const Option = styled.option`
    font-size: 20px;
`

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcemnets />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
                <Option selected>Color</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Green</Option>
                <Option>Yellow</Option>
                <Option>Pink</Option>
            </Select>
            <Select>
                <Option selected >Size</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>
                <Option>XXXL</Option>
            </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (ASC)</Option>
                    <Option>Price (DSC)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList