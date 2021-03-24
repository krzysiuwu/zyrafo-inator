import * as d3 from "d3";

const Voronoi = () => {
	const height = 600;
	const width = 600;
	const radius = 32;

	const svg = d3
		.create("svg")
		.attr("viewBox", [0, 0, width, height])
		.attr("stroke-width", 2);

	const circles = d3.range(15).map(() => ({
		x: Math.random() * (width - radius * 2) + radius,
		y: Math.random() * (height - radius * 2) + radius,
	}));

	let voronoi = d3.Delaunay.from(
		circles,
		(d) => d.x,
		(d) => d.y
	).voronoi([0, 0, width, height]);

	//cels
	svg.append("g")
		.attr("fill", "#6b371f")
		.attr("pointer-events", "all")
		.selectAll("path")
		.data(circles)
		.join("path")
		.attr("d", (_d, i) => voronoi.renderCell(i));

	//mesh
	svg.append("path")
		.attr("fill", "none")
		.attr("stroke", "#ccc")
		.attr("stroke-width", 10)
		.attr("d", voronoi.render());
	return svg.node();
};

export default Voronoi;
