import * as d3 from "d3";

const NubianGiraffe = () => {
	const height = 800;
	const width = 800;

	const svg = d3.create("svg");

	const xpart = height / 5;
	const ypart = width / 4;
	let circles = [];
	for (let i = 0; i < 5; i++) {
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
		.attr("fill", "#a97e49")
		.attr("pointer-events", "all")
		.selectAll("path")
		.data(circles)
		.join("path")
		.attr("d", (_d, i) => voronoi.renderCell(i));

	//mesh
	svg.append("g")
		.attr("fill", "none")
		.attr("stroke", "#e4d5ab")
		.selectAll("path")
		.data(circles)
		.join("path")
		.attr("d", (_d, i) => voronoi.renderCell(i))
		.attr("stroke-width", () => Math.random() * (20 - 10) + 10);

	return svg.node();
};

export default NubianGiraffe;
