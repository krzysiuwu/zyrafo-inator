import Voronoi from "../voronoi"

function Giraffe (){
    var svg = Voronoi()
    return (
        <svg dangerouslySetInnerHTML={{__html: svg.innerHTML}} className="ddd" />
    )
}

export default Giraffe