import './index.css'

const CustomCards = ({cardData}) => {

    if(cardData !== null) {

        // setup all variable we need
        const data = cardData.data.keyData
        const colors = ['#fbeaea', '#4AB8FF1A', '#faf6e5', '#FD51811A']
        const units = ['kCal', 'g', 'g', 'g']
        const urls = [require(`../../assets/images/energy.png`), require(`../../assets/images/chicken.png`), require(`../../assets/images/apple.png`), require(`../../assets/images/cheeseburger.png`)]
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
                                <img alt={e.text} src={e.url} className="img-logo" />
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