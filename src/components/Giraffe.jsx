import ReticulatedGiraffe from "../giraffes/ReticulatedGiraffe"
import WestAfricanGiraffe from "../giraffes/WestAfricanGiraffe"
import NubianGiraffe from "../giraffes/NubianGiraffe"
import KordofanGiraffe from "../giraffes/KordofanGiraffe"
import AngolanGiraffe from "../giraffes/AngolanGiraffe"

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
        case 3:
            svg = KordofanGiraffe()
            break;
        case 4:
            svg = AngolanGiraffe()
            break;
        default:
            svg = ReticulatedGiraffe()
    }
    return (
        <svg dangerouslySetInnerHTML={{__html: svg.innerHTML}} className="ddd" viewBox="100, 100, 600, 600" />
    )
}

export default Giraffe