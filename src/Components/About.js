import React from "react"
import Nav from "./Nav"
import NavBar from "./NavBar"
import Footer from "./Footer"

function About() {
    return(
        <div className="aboutPage">
            <Nav />
            <NavBar />
            <div className="textBox">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Est sit amet facilisis magna etiam tempor orci. Nec feugiat nisl pretium fusce id. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Porta nibh venenatis cras sed. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Amet purus gravida quis blandit turpis. Sed odio morbi quis commodo odio.</p>
                <br/>
                <p>Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Velit laoreet id donec ultrices tincidunt arcu non sodales. Sapien eget mi proin sed libero enim sed faucibus. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Vel fringilla est ullamcorper eget nulla facilisi. A cras semper auctor neque. Vitae ultricies leo integer malesuada nunc vel. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Arcu odio ut sem nulla pharetra diam sit amet nisl. Nulla porttitor massa id neque aliquam vestibulum morbi. Auctor neque vitae tempus quam pellentesque nec nam. Feugiat vivamus at augue eget arcu dictum.</p>    
            </div>
            <Footer position="bottom"/>
        </div>
    )
}

export default About