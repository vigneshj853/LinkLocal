import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        console.log("Email:", email);
        console.log("Password:", password);

        alert("Login form submitted!");
    };

    return (
        <main className="auth-page">
            <div className="auth-card">
                <h1>Welcome Back</h1>

                <p>Login to your LinkLocal account</p>

                <form onSubmit={handleLogin}>
                    <label>Email Address</label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit" className="auth-btn">
                        Login
                    </button>
                </form>

                <p className="auth-footer">
                    Don't have an account? Register here.
                </p>
            </div>
        </main>
    );
}

export default Login;