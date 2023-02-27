import "./index.css"
import LinkIcon from "../linkIcon"

/**
 * A component which create the left side nav
 * @returns (
 *  <SideNav />
 * )
 */
const SideNav = () => {

    const iconList = ['meditation.png', 'nage.png', 'velo.png', 'font.png']

    return (
        <aside className="side-nav">
            <div className="side-nav-icon">
                {iconList.map((e, index) => {
                    return (
                        <LinkIcon source={e} key={index} />
                    )
                })}
            </div>
            <div className="copyright">
                <p>Copyright SportSee 2020</p>
            </div>
        </aside>
    )
}

export default SideNav