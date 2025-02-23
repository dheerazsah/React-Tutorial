const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Dhiraj Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
                {/* <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#1169c4",
                    borderRadius: "8px"
                }}>New Blog</a> */}
            </div>
        </nav>
     );
}
 
export default Navbar;