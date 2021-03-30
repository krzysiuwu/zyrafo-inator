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

	var defs = svg.append("defs");

	for (let i = 0; i < circles.length; i++) {
		defs.append("radialGradient")
			.attr("id", i)
			.selectAll("stop")
			.data([
				{ offset: "0%", color: "#7d5d36" },
				{ offset: "50%", color: "#8f6a3d" },
				{ offset: "100%", color: "#a97e49" },
			])
			.enter()
			.append("stop")
			.attr("offset", function (d) {
				return d.offset;
			})
			.attr("stop-color", function (d) {
				return d.color;
			});

		defs.append("clipPath")
			.attr("id", `clipPath${i}`)
			.append("path")
			.attr("d", voronoi.renderCell(i));

		svg.append("circle")
			.attr("r", 200)
			.attr("cx", circles[i].x)
			.attr("cy", circles[i].y)
			.attr("clip-path", `url(#clipPath${i})`)
			.style("fill", `url('#${i}')`);
	}

	//mesh
	svg.append("g")
		.attr("fill", "none")
		.attr("stroke", "#e4d5ab")
		.selectAll("path")
		.data(circles)
		.join("path")
		.attr("d", (_d, i) => voronoi.renderCell(i))
		.attr("stroke-width", () => Math.random() * (20 - 12) + 12);

	return svg.node();
};

export default NubianGiraffe;
