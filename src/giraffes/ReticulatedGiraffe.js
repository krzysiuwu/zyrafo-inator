import * as d3 from "d3";

const ReticulatedGiraffe = () => {
	const height = 800;
	const width = 800;

	const svg = d3.create("svg");

	const xpart = height / 3;
	const ypart = width / 4;
	let circles = [];
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 4; j++) {
			circles.push({
				x:
					Math.random() *
						((i + 1) * xpart * 0.95 - i * xpart * 1.05) +
					i * xpart * 1.1,
				y:
					Math.random() *
						((j + 1) * ypart * 0.95 - j * ypart * 1.05) +
					j * ypart * 1.1,
			});
		}
	}

	let voronoi = d3.Delaunay.from(
		circles,
		(d) => d.x,
		(d) => d.y
	).voronoi([0, 0, width, height]);

	//cells
	svg.append("g")
		.attr("fill", "#6b371f")
		.attr("pointer-events", "all")
		.selectAll("path")
		.data(circles)
		.join("path")
		.attr("d", (_d, i) => voronoi.renderCell(i));

	//mesh
	svg.append("g")
		.attr("fill", "none")
		.attr("stroke", "#ccc")
		.attr("stroke-width", 25)
		.selectAll("path")
		.data(circles)
		.join("path")
		.attr("d", (_d, i) => voronoi.renderCell(i));

	return svg.node();
};

export default ReticulatedGiraffe;
