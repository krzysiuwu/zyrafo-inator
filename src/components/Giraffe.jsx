import Voronoi from "../voronoi"

function Giraffe (props) {
    var svg = Voronoi(props.species)
    return (
        <svg dangerouslySetInnerHTML={{__html: svg.innerHTML}} className="ddd" />
    )
}

export default Giraffe