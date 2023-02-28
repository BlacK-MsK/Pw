import "./Navbar.css";

function Navbar(){
    return(
        <header className="navbar-parent section-scroll">
            <nav class="navbar fixed-left navbar-expand-lg navbar-dark navbar-nav"> 
                <div class="collapse navbar-collapse links-container" id="navbarNav">
                    <ul class="navbar-nav d-flex justify-content-center w-100">
                        <li class="nav-item"><a class="nav-link link" href="#">GitHub<sup>01</sup></a></li>
                        <li class="nav-item"><a class="nav-link link" href="#">LINKEDIN<sup>02</sup></a> </li>
                        <li class="nav-item"><a class="nav-link link" href="#">Leetcode<sup>03</sup></a></li>
                    </ul>
                </div> 
            </nav>
        </header>
    );
}

export default Navbar;