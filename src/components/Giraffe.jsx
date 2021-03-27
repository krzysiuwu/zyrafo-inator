import ReticulatedGiraffe from "../giraffes/ReticulatedGiraffe"
import WestAfricanGiraffe from "../giraffes/WestAfricanGiraffe"
import NubianGiraffe from "../giraffes/NubianGiraffe"

function Giraffe (props) {
    var svg
    switch(props.species){
        case 0:
            svg = ReticulatedGiraffe()
            break;
        case 1:
            svg = WestAfricanGiraffe()
            break;
        case 2:
            svg = NubianGiraffe()
            break;
        default:
            svg = ReticulatedGiraffe()
    }
    return (
        <svg dangerouslySetInnerHTML={{__html: svg.innerHTML}} className="ddd" viewBox="100, 100, 600, 600" strokeWidth="1"/>
    )
}

export default Giraffe