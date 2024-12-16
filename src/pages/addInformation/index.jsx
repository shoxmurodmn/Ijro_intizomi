import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaUserPlus,
  FaUserCheck,
  FaPaperclip,
  FaSave,
  FaTrashAlt,
} from "react-icons/fa";
import "./stayled.css"; // CSS faylini import qilish
import { DateRangePicker } from "rsuite";
import Create from "../../components/create";
import "./stayled.css"

const TaskForm = () => {
  const [dueDate, setDueDate] = useState(null);
  const [taskContent, setTaskContent] = useState("");

  const handleSave = () => {
    // console.log("Saved:", { dueDate, taskContent });
    // Qo'shimcha logika qo'shing (API chaqirish yoki state boshqaruvi uchun)
  };

  const handleClear = () => {
    setDueDate(null);
    setTaskContent("");
  };

  return (
    <div>
        <div className="box_top">
          <div className="paragrf"> Shaxsiy topshiriq yaratish</div>
          <p className="paragrf_discription">
            {" "}
            Shaxsiy topshiriqlarni yaratish va ularga ijrochilarni belgilash{" "}
          </p>
        </div>

      <div className="task-form-container">

        <div className="form-group">
          <label>Bajarish muddati</label>
          <DateRangePicker placeholder="Select Date Range" />
        </div>
        <div className="form-group">
          <label>Topshiriq mazmuni</label>
          <textarea
            value={taskContent}
            onChange={(e) => setTaskContent(e.target.value)}
            rows="5"
            placeholder="Topshiriqni yozing"
            className="task-textarea"
          />
        </div>
        {/* -----------button----- */}

        <div className="button_info">
          <div className="action-buttons">
            <Create
              te
              className="add-btn coloradd"
              props="Ijrochi qo'shish"
              icons={<FaUserPlus />}
            >
              Ijrochi qo'shish
            </Create>
            <Create
              className="add-btn color_supervisor"
              props="Nazoratchi qo'shish"
              icons={<FaUserCheck />}
            ></Create>
            <label type="file" form="file" className="add-btn colorFile">
              <FaPaperclip />
              Fayl biriktirish
              <input type="file" style={{display:"none"}} name="file" id="" />
            </label>

            
          </div>
          {/* -----------button//////----- */}

          <div className="action-buttons">
            <button onClick={handleSave} className="save-btn">
              <FaSave />
              Saqlash
            </button>
            <button onClick={handleClear} className="clear-btn">
              <FaTrashAlt />
              Tozalash
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
