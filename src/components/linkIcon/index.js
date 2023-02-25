import "./index.css"
import PropTypes from "prop-types"

const LinkIcon = ({source}) => {

    const altText = source.substring(0, source.length - 4)

    return (
        <div className="link-icon-container">
            <img src={require(`../../assets/images/${source}`)} alt={altText} className="link-icon-el"/>
        </div>
    )
}

LinkIcon.propTypes = {
    source: PropTypes.string.isRequired
}

export default LinkIcon