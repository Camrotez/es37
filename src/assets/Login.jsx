import FormState from "./FormState"
function Login() {
    const { username, password, userChange, passChange } = FormState();
    const submit = (e) => {
        e.preventDefault();

        console.log(username, password);
    };
    return (
        <form onSubmit={submit} >
            <input type="text" name="username" value={username} onChange={userChange} />
            <input type="password" name="password" value={password} onChange={passChange} />
            <button type="submit">Submit</button>
        </form>
    )
}
export default Login