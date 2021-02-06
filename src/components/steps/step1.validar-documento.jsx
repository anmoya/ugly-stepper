import React, { useState } from "react";

const ValidarDocumento = () => {
  const [values, setValues] = useState({
    numeroGuia: 0,
    isValid: false,
  });
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Hola");
        }}
      >
        <input
          type="text"
          onChange={(e) => setValues({ ...values, numeroGuia: e.target.value })}
        />
      </form>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
};

export default ValidarDocumento;
