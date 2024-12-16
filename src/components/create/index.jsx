import React, { useState } from "react";
import {  Toggle, SelectPicker, Modal } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./style.css"; // CSS faylni import qilish
import UserSelector from "./test";


const EmployeeModal = ({ open, onClose }) => {
  
  const [selectedEmployee, setSelectedEmployee] = useState("");

  const employees = [
    { label: "Xodim 1", value: "employee1" },
    { label: "Xodim 2", value: "employee2" },
    { label: "Xodim 3", value: "employee3" }, { label: "Xodim 1", value: "employee1" },
    { label: "Xodim 5", value: "employee2" },
    { label: "Xodim 6", value: "employee3" }, { label: "Xodim 1", value: "employee1" },
    { label: "Xodim 7", value: "employee2" },
    { label: "Xodim 8", value: "employee3" }, { label: "Xodim 1", value: "employee1" },
    { label: "Xodim 9", value: "employee2" },
    { label: "Xodim 3", value: "employee3" },
  ];

  return (
    <Modal open={open} onClose={onClose} size="sm">
      <Modal.Header>
        <Modal.Title>Xodimlarni tanlang</Modal.Title>
      </Modal.Header>
      <div className="modal-container">
        
        <div>
          <UserSelector
            data={employees}
            value={selectedEmployee}
            onChange={setSelectedEmployee}
            className="select-picker"
            placeholder="Xodimning ismi"
          />
        </div>
      </div>
      <Modal.Footer className="modal-footer">
        <button className="primary-button" onClick={() => alert("Saqlash")}>
          Saqlash
        </button>
        <button className="subtle-button" onClick={onClose}>
          Bekor qilish
        </button>
      </Modal.Footer>
    </Modal>
  );
};

const Create = ({props ,icons, className}) => {
  const [showModal, setShowModal] = useState(false);
  console.log("saloo", className);
  
  return (
    <div >
      <button className={className} onClick={() => setShowModal(true)} appearance="primary">
        {icons } { props}
      </button>
      <EmployeeModal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Create;
