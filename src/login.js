import './login.css';


function App() {


    return (
        
        <div className='div'>
    <header style={{padding: "50px"}}>
        <img src="images/Bee (2).png" alt="logo"/>
    </header>
    <h1>LOG IN </h1>
    <form action="" className="fullname" style={{width: "10%"}}>
        <div className='fieldset'>
    <label>
        <input type="text" required name="username" placeholder="Enter your Username"/>
    </label>
    <label>
        <input type="email" required name="email" placeholder="Enter your email"/>
    </label>
    <label>
        <input type="password" required name="password" placeholder="Enter your password"/>
    </label>
<button className="submit" style={{border: "1px solid black", width: "60%", margin: "auto", height: "6vh", paddingTop: "0px", backgroundColor: "rgb(16, 146, 189)",  borderRadius: "90px", position: "relative", top: "40px", fontSize: "3vh"}}><a href="home.html" style={{color: "black", fontWeight: "10px"}}>LOG IN</a></button>
    <p style={{paddingTop: "30px"}}>or</p>
    <p style={{paddingBottom: "0px"}}>Log In with</p>
    <div className="brands" style={{display: "flex", paddingTop: "0px"}}>
        <a href= {`https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?access_type=offline&client_id=587594460880-u53ikl5ast2sup28098ofsm9iku8vvm6.apps.googleusercontent.com&code_challenge=aFHUrI06ZztGNzz_AgWFWcX0gCLlznNgfegyKujDRlA&code_challenge_method=S256&include_granted_scopes=true&prompt=select_account%20consent&redirect_uri=https%3A%2F%2Fsso.teachable.com%2Fidentity%2Fcallbacks%2Fgoogle%2Fcallback&response_type=code&scope=email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20openid%20profile&state=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJnb29nbGUiLCJpYXQiOjE2Nzg1NjkxODQsImV4cCI6MTY3ODU3MDk4NCwianRpIjoiZWUyMDE2NTYtNDNjMy00MjJjLTkwMjgtODg5NjVmNjhiOWU0IiwiaXNzIjoic2tfOHRiZzBsY24iLCJzdWIiOiJINlVCOExkY3BBbG54X2cyYy1WUm4tQXFJWGVrUHIwSld6NktqS1BrVFpiQm9xc3JsTGNGV3BQUFRSNDZyNUFsNUZxWEFtS2wxUXhMWVJzeFc5N2hJZyJ9.lOmAOWdb1RKXwFokTp8iyDYmBpaQ4AYFEt0x6rmuc5o&service=lso&o2v=2&flowName=GeneralOAuthFlow`}><img className="img" src='images/googlelogo.jpg' alt="google"/></a>
    <a href=''><img className="img" src="images/Facebook.jpg" alt="fb"/></a>
    <a href=''><img className="img" src="images/tiktok.jpg" alt="tiktok"/></a>
    <a href=''><img className="img" src="images/spotify.png" alt="spotify"/></a>
    </div>

    <p>New to Bee Music? <a href={`signup.html`}>Sign Up</a> </p>
    </form>
</div>
</div>

);
};
export default App;