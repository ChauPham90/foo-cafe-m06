import React, { useState } from "react";
import Form from "./Form";

const SubmitForm = pros => {
    function handleSubmit(e) {
        e.preventDefault();

    }
    function addData() {
        pros.addTodo(pros.value);
        pros.setValue("");
    }
    return (
        <Form
            className="input"
            value={pros.value}
            onChange={e => pros.setValue(e.target.value)}
            onSubmit={handleSubmit}
            addDaTa={addData}
        />
    );
};

export default SubmitForm;
