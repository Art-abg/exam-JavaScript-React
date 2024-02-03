import React from "react";
import { useState } from "react";
import Modal from "./components/Modal/modal.jsx";
import Form from "./components/Form/form.jsx";

import "./App.css";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setModalVisible(false);
  };

  return (
    <div className="button">
      {!modalVisible && (
        <button onClick={() => setModalVisible(true)}>Open Modal</button>
      )}
      <Modal show={modalVisible} onClose={() => setModalVisible(false)}>
        <Form onSubmit={handleFormSubmit} />
      </Modal>
      {formData && <p>Form Data: {formData}</p>}
    </div>
  );
};

export default App;
