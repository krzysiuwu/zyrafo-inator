import ReticulatedGiraffe from "../giraffes/ReticulatedGiraffe"
import WestAfricanGiraffe from "../giraffes/WestAfricanGiraffe"

function Giraffe (props) {
    switch(props.species){
        case 0:
            var svg = ReticulatedGiraffe()
            break;
        case 1:
            var svg = WestAfricanGiraffe()
            break;
    }
    return (
        <svg dangerouslySetInnerHTML={{__html: svg.innerHTML}} className="ddd" />
    )
}

export default Giraffe