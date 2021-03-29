import * as d3 from "d3";

const KordofanGiraffe = () => {
	const height = 800;
	const width = 800;

	const svg = d3.create("svg");

	const xpart = height / 5;
	const ypart = width / 5;
	let circles = [];
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
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

	//cells TODO to jest zbędne wystarczy tło na całe svg
	svg.append("g")
		.attr("fill", "#a6865e")
		.attr("pointer-events", "all")
		.selectAll("path")
		.data(circles)
		.join("path")
		.attr("d", (_d, i) => voronoi.renderCell(i));

	var defs = svg.append("defs");

	for (let i = 0; i < circles.length; i++) {
		defs.append("radialGradient")
			.attr("id", i)
			.selectAll("stop")
			.data([
				{ offset: "0%", color: "#846948" },
				{ offset: "100%", color: "#a6865e" },
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
			.attr("r", 100)
			.attr("cx", circles[i].x)
			.attr("cy", circles[i].y)
			.attr("clip-path", `url(#clipPath${i})`)
			.style("fill", `url('#${i}')`);
	}

	function dupa(i) {
		const NUM_POINTS = 80;
		const path = document.createElementNS(
			"http://www.w3.org/2000/svg",
			"path"
		);
		const d = voronoi.renderCell(i);
		path.setAttribute("d", d);
		const len = path.getTotalLength();
		let points = [];

		for (let i = 0; i < NUM_POINTS; i++) {
			let pt = path.getPointAtLength((i * len) / (NUM_POINTS - 1));

			if (i >= 5 && i <= 75) {
				pt.x += Math.random() * (3 + 3) - 3;
				pt.y += Math.random() * (3 + 3) - 3;
			}

			points.push([pt.x, pt.y]);
		}
		return points;
	}

	//mesh
	svg.append("g")
		.attr("fill", "none")
		.attr("stroke", "#e4d5ab")
		.selectAll("path")
		.data(circles)
		.join("polygon")
		.attr("points", (_d, i) => dupa(i))
		.attr("stroke-width", () => Math.random() * (30 - 20) + 20);

	return svg.node();
};

export default KordofanGiraffe;
