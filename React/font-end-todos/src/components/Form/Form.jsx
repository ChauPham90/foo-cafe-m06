import React, { useState } from "react";

const Form = ({ value, onChange, onSubmit, className, addDaTa }) => (
    <div>
        <form className={className} onSubmit={onSubmit}>
            <input value={value} onChange={onChange} />
            <button>save data</button>
        </form>
        <button onClick={addDaTa}>addData</button>
    </div>
);
export default Form;
