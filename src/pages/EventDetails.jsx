import { useLocation } from "react-router-dom";

function EventDetails() {
    const location = useLocation();
    const event = location.state;

    if (!event) {
        return <h2>Event details not available.</h2>;
    }

    return (
        <main className="details-page">
            <div className="details-card">
                <span className="event-category">
                    {event.category}
                </span>

                <h1>{event.name}</h1>

                <p>📅 {event.date}</p>

                <p>📍 {event.location}</p>

                <p>
                    Join this event and connect with people
                    in your local community.
                </p>

                <button className="event-btn">
                    Register for Event
                </button>
            </div>
        </main>
    );
}

export default EventDetails;