import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Button from '../UI/Button'
import Input from '../UI/Input'

const Form = (props) => {
    const [value, setValue] = useState("");
    // const URL = 'http://127.0.0.1:5000'

    // useEffect(() => {
    //     fetch(URL)
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((myJson) => {
    //             props.setTodos(myJson)
    //         });
    // }, [])

    function handleSubmit(e) {
        e.preventDefault();
        if (value) {
            props.addTodo(value);
            setValue("");
        }
    }

    return (
        <form className={props.className} onSubmit={handleSubmit}>
            <Input changed={e => setValue(e.target.value)} />
            <Button children={'submit'} />
        </form >
    );
}

Form.propTypes = {
    addTodo: PropTypes.func
}
export default Form;
