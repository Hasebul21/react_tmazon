import React, { useState, useEffect } from 'react';

const EditEvent = () => {
    const [event, setEvent] = useState({});

    useEffect(() => {
        // Fetch event data from API or database
        // and set it to the event state
        // Example:
        // fetch('/api/events/123')
        //   .then(response => response.json())
        //   .then(data => setEvent(data));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEvent(prevEvent => ({
            ...prevEvent,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send updated event data to API or database
        // Example:
        // fetch('/api/events/123', {
        //   method: 'PUT',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(event)
        // })
        //   .then(response => response.json())
        //   .then(data => {
        //     // Handle success or error response
        //   });
    };

    return (
        <div>
            <h1>Edit Event</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Event Name:
                    <input
                        type="text"
                        name="name"
                        value={event.name || ''}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Event Date:
                    <input
                        type="date"
                        name="date"
                        value={event.date || ''}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditEvent;