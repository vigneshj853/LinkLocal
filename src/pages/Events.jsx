import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Events() {
    const navigate=useNavigate();
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const events = [
        {
            name: "Live Music Festival",
            category: "Music",
            date: "October 12, 2026",
            location: "Kochi, Kerala"
        },
        {
            name: "Community Fitness Day",
            category: "Fitness",
            date: "October 18, 2026",
            location: "Trivandrum, Kerala"
        },
        {
            name: "Tech Innovation Workshop",
            category: "Technology",
            date: "October 25, 2026",
            location: "Kochi, Kerala"
        },
        {
            name: "Art and Culture Meetup",
            category: "Art & Culture",
            date: "November 2, 2026",
            location: "Kollam, Kerala"
        }
    ];

    const filteredEvents = events.filter((event) => {
        const matchesSearch = event.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" || event.category === category;

        return matchesSearch && matchesCategory;
    });

    return (
        <main className="events-page">
            <div className="events-header">
                <p className="section-tag">DISCOVER YOUR COMMUNITY</p>

                <h1>Explore Events</h1>

                <p>
                    Find exciting events and connect with people near you.
                </p>
            </div>

            <div className="event-filters">
                <input
                    type="text"
                    placeholder="Search events..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="All">All Categories</option>
                    <option value="Music">Music</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Technology">Technology</option>
                    <option value="Art & Culture">Art & Culture</option>
                </select>
            </div>

            <div className="events-list">
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((event, index) => (
                        <div className="event-item" key={index}>
                            <span className="event-category">
                                {event.category}
                            </span>

                            <h2>{event.name}</h2>

                            <p>📅 {event.date}</p>

                            <p>📍 {event.location}</p>

                            <button
                                className="event-btn"
                                onClick={() => navigate("/event-details", {
                                state: event
                                })}
                                >
                                 View Details →
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No events found.</p>
                )}
            </div>
        </main>
    );
}

export default Events;