function Home() {
    return (
        <div>
        <div className='home-index' style={{
      backgroundImage: `url('${process.env.PUBLIC_URL}/images/homePage.png')`,
    //   backgroundPosition: "bottom",
    //   backgroundSize: "fill"
    }}>
            <h1 className='tagline'>Hi, I'm Jack</h1>   
        </div>
        </div>
    )
}
export default Home

