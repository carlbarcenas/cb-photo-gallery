function MainCard({ image, location, shotSettings, date, subText }) {
    const mainCardStyle = {
        image: image,
        location: location,
        shotSettings: shotSettings,
        date: date,
        subText: subText
    }

    return (
        <div className='main-card'>
            <img src={image} alt="Main Gallery" />
            <div className="photo-info">
                <div className="left">
                    <h2>{location}</h2>
                    <p>{subText}</p>
                </div>
                <div className="right">
                    <h2>{shotSettings}</h2>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    )
}

function SubCard({ image }) {
    const subCardStyle = {
        image: image
    }

    return (
        <div>
            <img src={image}></img>
            <p>test</p>
        </div>
    )
}

function Gallery() {
    return (
        <div className='gallery'>
            <MainCard
                image='/DSCF0174.JPG'
                location='San Francisco, CA'
                shotSettings='23mm f/2.0, ISO 200, 1/125s'
                date='2023-10-01'
                subText='A beautiful day in the city.'
            />
        </div>
    )
}

export default Gallery;