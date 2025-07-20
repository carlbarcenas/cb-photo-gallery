function MainCard({image, location, shotSettings, date, subText}) {
    const mainCardStyle = {
        image: image,
        location: location,
        shotSettings: shotSettings,
        date: date,
        subText: subText
    }


}

function SubCard({image}) {
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
        <SubCard image='/DSCF0174.JPG'/>
    )
}

export default Gallery;