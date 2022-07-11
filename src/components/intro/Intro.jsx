import "./intro.scss"

export default function Intro() {
  return (
    <div className='intro' id="intro">
       <div className="left">
        <div className="imgContainer">
          <img src="assets/okman.png" alt="" />
        </div>
       </div>
       <div className="right">
          <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Kedar Kambale</h1>
            <h3>Developer <span>MERN Stack</span></h3>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" className="kedar" />
          </a>
       </div>
    </div>
  )
}
