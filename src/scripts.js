import Navbar from "./components/layouts/Navbar";

function openNavbar() {
    var nav = document.getElementById('Navbar');

    if(nav.className === Navbar) {
        nav.className += 'novaNavbar';
        document.getElementById('threeline-icon').innerHTML = "&Cross;";
    }

    else {
        nav.className = 'Navbar';
        document.getElementById("threeline-icon").innerHTML = "&equiv;";
    }
}