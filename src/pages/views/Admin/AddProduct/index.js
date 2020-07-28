import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import { GlobalContext } from '../../../../context/GlobalState';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const AddProduct = props => {
    const { addEmployee, employees } = useContext(GlobalContext);

    return (
        <div>
            Add Product
        </div>
    )
}

AddProduct.propTypes = {

}

export default AddProduct
