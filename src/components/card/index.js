import './index.css'

const CustomCards = ({cardData}) => {

    if(cardData !== null) {

        // setup all variable we need
        const data = cardData.data.keyData
        const colors = ['#FF0000', '#4AB8FF1A', '#F9CE23', '#FD51811A']
        const imagesDirectory = '../../assets/images/'
        const units = ['kCal', 'g', 'g', 'g']
        const urls = [`${imagesDirectory}energy.png`, `${imagesDirectory}chicken.png`, `${imagesDirectory}apple.png`, `${imagesDirectory}cheeseburger.png`]
        const text = ['Calories', 'Proteines', 'Glucides', 'Lipides']

        // create the array i'll need
        let usableData = []
        let i = 0
        for(const property in data) {
            usableData.push({
                value: data[property],
                color: colors[i],
                url: urls[i],
                unit: units[i],
                text: text[i]
            })
            i++
        }
    
        return (
            <div className='customCard-wrapper'>
                {usableData.map((e, index) => {
                    return (
                        <div key={index} className="card"> 
                            <div className='img-container' style={{ backgroundColor: e.color}}>
                            </div>
                            <div className='card-desc'>
                                <p className='card-desc-value'>{e.value + e.unit}</p>
                                <p className='card-desc-name'>{e.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default CustomCards