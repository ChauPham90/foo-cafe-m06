import React, { useState } from "react";

const Form = ({ value, onChange, onSubmit, className }) => (
  <div>
    <form className={className} onSubmit={onSubmit}>
      <input value={value} onChange={onChange} />
      <button>click me</button>
    </form>
  </div>
);
export default Form;
