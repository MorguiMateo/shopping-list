import useAuthStore from "../store/authStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const error = useAuthStore(state => state.error);
    const login = useAuthStore(state => state.login);

    const navigate = useNavigate();

    //SyntheticEvent<T> es el wrapper de React sobre los eventos nativos del DOM, y aplica a cualquier tipo de evento de formulario.
    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
        if (login({ email, password })) {
            navigate("/shopping-list");
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
}

export default LoginPage;