import ReticulatedGiraffe from "../giraffes/ReticulatedGiraffe"
import WestAfricanGiraffe from "../giraffes/WestAfricanGiraffe"
import NubianGiraffe from "../giraffes/NubianGiraffe"
import KordofanGiraffe from "../giraffes/KordofanGiraffe"
import AngolanGiraffe from "../giraffes/AngolanGiraffe"
import SouthAfricanGiraffe from "../giraffes/SouthAfricanGiraffe"
import RothschildsGiraffe from "../giraffes/RothschildsGiraffe"

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
        case 5:
            svg = SouthAfricanGiraffe()
            break;
        case 6:
            svg = RothschildsGiraffe()
            break;
        default:
            svg = ReticulatedGiraffe()
    }
    return (
        <svg dangerouslySetInnerHTML={{__html: svg.innerHTML}} className="Giraffe" viewBox="100, 100, 600, 600" />
    )
}

export default Giraffe