function Websites() {
    return (
        <div>
        <div className='home-index' style={{
      backgroundImage: `url('${process.env.PUBLIC_URL}/images/bg.png')`,
      backgroundPosition: "bottom",
      backgroundSize: "fill"
    }}>
            <h1 className='tagline'>SITES GO HERE</h1>   
        </div>
        </div>
    )
}
export default Websites

