function Home() {
    const categories = [
        {
            icon: "🎵",
            name: "Music",
            description: "Concerts, performances and music lovers"
        },
        {
            icon: "⚽",
            name: "Sports",
            description: "Play, compete and stay active"
        },
        {
            icon: "🎮",
            name: "Gaming",
            description: "Gaming events and tournaments"
        },
        {
            icon: "💻",
            name: "Technology",
            description: "Workshops, coding and innovation"
        },
        {
            icon: "🎨",
            name: "Art & Culture",
            description: "Explore creativity and culture"
        },
        {
            icon: "🧘",
            name: "Fitness",
            description: "Health, fitness and wellness"
        }
    ];

    return (
        <main>
            {/* HERO SECTION */}

            <section className="hero">
                <div className="hero-content">
                    <p className="hero-tag">
                        YOUR COMMUNITY, YOUR CONNECTION
                    </p>

                    <h1>
                        Discover Local.
                        <br />
                        <span>Connect People.</span>
                        <br />
                        Build Community.
                    </h1>

                    <p className="hero-description">
                        Discover exciting events, meet like-minded people,
                        and build meaningful connections in your local community.
                    </p>

                    <div className="hero-buttons">
                        <button className="primary-btn">
                            Explore Events →
                        </button>

                        <button className="secondary-btn">
                            Create Event +
                        </button>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="visual-card">
                        <h3>Find Your Community</h3>
                        <p>Connect. Participate. Belong.</p>
                    </div>
                </div>
            </section>

            {/* CATEGORIES SECTION */}

            <section className="categories-section">
                <div className="section-heading">
                    <p className="section-tag">EXPLORE YOUR INTERESTS</p>

                    <h2>Find Your Community</h2>

                    <p>
                        Discover activities and events that match your interests.
                    </p>
                </div>

                <div className="categories-grid">
                    {categories.map((category, index) => (
                        <div className="category-card" key={index}>
                            <div className="category-icon">
                                {category.icon}
                            </div>

                            <h3>{category.name}</h3>

                            <p>{category.description}</p>

                            <button className="category-btn">
                                Explore →
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Home;