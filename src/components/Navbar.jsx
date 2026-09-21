function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <span>Link</span>Local
            </div>

            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/events">Events</a>
                <a href="/connections">People</a>
            </div>

            <div className="nav-actions">
                <a href="/login" className="login-btn">
                    Login
                </a>

                <a href="/register" className="register-btn">
                    Register
                </a>
            </div>
        </nav>
    );
}

export default Navbar;