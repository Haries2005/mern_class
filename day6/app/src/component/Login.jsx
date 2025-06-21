import "./style/Login.css"

function Login(){
    return (
        <>
            <center>
                <h1 className="login">login</h1>
                <input type="text" placeholder="Enter username"/><br/>
                <input type="password" placeholder="password"/><br/>
                <button type="submit"> LOGIN </button>
            </center>
        </>
    )
}

export default Login;