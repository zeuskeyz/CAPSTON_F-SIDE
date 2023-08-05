
export default function KPICarousel({user}) {

    return (
        <>
            <div id="slide-controllers" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {user.targets?.map((item, index) => { return (<button key={index} type="button" data-bs-target="#slide-controllers" data-bs-slide-to={index} className={ index === 0 ? 'active': ''}></button>) })}
                </div>

                <div className="carousel-inner">

                    {
                        user?.targets?.map((item, index) => {
                            
                            return (
                                <div key={index} className="carousel-item active">
                                    <div key={index} className="card targets my-3" style={{background:'transparent'}}>
                                        <div className="card-body mb-5 pb-5 text-center" style={{color:'#4BC89E'}}>
                                            <h2 className="lead display-4 fw-bold mt-3">{item.name.toUpperCase()}</h2>
                                            <h3 className="card-text my-3">TARGET : {item.target}</h3>
                                        </div>
                                    </div>

                                    <div className="carousel-caption d-none d-md-block text-dark my-3" style={{color:'#4BC89E'}}>
                                        <p>Some representative placeholder content for the 4th slide.</p>
                                    </div>
                                </div>
                            )
                            
                        })
                    }

                </div>

                <button className="carousel-control-prev me-5" type="button" data-bs-target="#slide-controllers" data-bs-slide="prev" >
                    {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                    <span className="me-3" style={{color:'#ADFF2F', font:'small'}}>PREV</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#slide-controllers" data-bs-slide="next">
                    {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                    <span className="ms-3" style={{color:'#ADFF2F', font:'small'}}>NEXT</span>
                </button>
            </div>
        </>
    )
}

