function AboutMe() {
        return (
            <div>
                <div className='app-index' style={{
                    backgroundImage: `url('${process.env.PUBLIC_URL}/images/bg.png')`,
                    backgroundPosition: "bottom",
                    backgroundSize: "fill"
                }}> 
                    <h3>
                        I am a Software Engineer/Graphic Designer with experience 
                        working with small businesses, managing projects, and fast-paced 
                        environments. I am a resilient and committed self-starter with a 
                        passion for high quality clean code that promotes low latency. 
                    </h3>
                </div>
            </div>
        )
    }
    export default AboutMe