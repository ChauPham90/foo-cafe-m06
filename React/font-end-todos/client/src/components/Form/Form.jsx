import React, { useState } from "react";
import PropTypes from 'prop-types';
import Button from '../UI/Button'
import Input from '../UI/Input'

const Form = (pros) => {
    const [value, setValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (value) {
            pros.addTodo(value);
            setValue("");
        }
    }

    return (
        <form className={pros.className} onSubmit={handleSubmit}>
            <Input changed={e => setValue(e.target.value)} />
            <Button children={'submit'} />
        </form >
    );
}

Form.propTypes = {
    addTodo: PropTypes.func
}
export default Form;
