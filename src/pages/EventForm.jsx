import { useState } from "react";

const EventForm = ({ onAddEvent }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.date || !formData.location || !formData.category || !formData.description) {
      return alert("All fields are required!");
    }

    onAddEvent(formData);

    setFormData({
      title: "",
      date: "",
      location: "",
      category: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <h3>Add New Event</h3>

      <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
      <input type="date" name="date" value={formData.date} onChange={handleChange} />
      <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />

      <select name="category" value={formData.category} onChange={handleChange}>
      <option value="" disabled>Select Category</option> 
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>

      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange}></textarea>

      <button type="submit" className="submit-btn">Add Event</button>
    </form>
  );
};

export default EventForm;
