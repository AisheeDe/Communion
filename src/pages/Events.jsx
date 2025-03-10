import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import EventForm from "./EventForm"; 
import "./EventForm.css";

const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Charity Drive", date: "2025-03-15", location: "New York", category: "Charity", description: "Help those in need." },
    { id: 2, title: "Community Prayer", date: "2025-03-20", location: "Los Angeles", category: "Religious", description: "Join us for a peaceful evening of prayer." },
  ]);

  const [filter, setFilter] = useState("All");

  const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

  const addEvent = (newEvent) => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
  };

  return (
    <div className="events-container">
      <motion.h2 
        className="title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Event Listings
      </motion.h2>

      <div className="filter-container">
        <label>Filter by Category:</label>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </div>

      <div className="event-list">
        {filteredEvents.map((event) => (
          <motion.div 
            key={event.id} 
            className="event-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: event.id * 0.1 }}
          >
            <h3>{event.title}</h3>
            <p>{event.date} - {event.location}</p>
            <p className="description">{event.description}</p>
            <span className="category">{event.category}</span>
          </motion.div>
        ))}
      </div>

      <EventForm onAddEvent={addEvent} />
    </div>
  );
};

export default Events;
