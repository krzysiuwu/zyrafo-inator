import * as d3 from "d3";

const RothschildsGiraffe = () => {
	const height = 800;
	const width = 800;

	const svg = d3.create("svg");

	const xpart = height / 4;
	const ypart = width / 4;
	let circles = [];
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			circles.push({
				x:
					Math.random() * ((i + 1) * xpart * 0.9 - i * xpart * 1.1) +
					i * xpart * 1.1,
				y:
					Math.random() * ((j + 1) * ypart * 0.9 - j * ypart * 1.1) +
					j * ypart * 1.1,
			});
		}
	}

	let voronoi = d3.Delaunay.from(
		circles,
		(d) => d.x,
		(d) => d.y
	).voronoi([0, 0, width, height]);

	const shades = ["#9c6a49", "#8b5f41", "#795339", "#684731"];

	let defs = svg.append("defs");

	for (let i = 0; i < circles.length; i++) {
		defs.append("linearGradient")
			.attr("id", i)
			.selectAll("stop")
			.data([
				{
					offset: "0%",
					color: shades[Math.floor(Math.random() * shades.length)],
				},
				{
					offset: "30%",
					color: shades[Math.floor(Math.random() * shades.length)],
				},
				{
					offset: "60%",
					color: shades[Math.floor(Math.random() * shades.length)],
				},
				{
					offset: "100%",
					color: shades[Math.floor(Math.random() * shades.length)],
				},
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
			.attr("spreadMethod", "reflect")
			.style("fill", `url('#${i}')`);
	}

	function RaggedLines(i) {
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

			pt.x += Math.random() * (3 + 3) - 3;
			pt.y += Math.random() * (3 + 3) - 3;

			if (Math.random() < 1.5 / 100) {
				pt.x += Math.random() * (17 + 17) - 17;
				pt.y += Math.random() * (17 + 17) - 17;
			}

			points.push([pt.x, pt.y]);
		}
		return points;
	}

	//mesh
	svg.append("g")
		.attr("fill", "none")
		.attr("stroke", "#ffe3cb")
		.selectAll("path")
		.data(circles)
		.join("polygon")
		.attr("points", (_d, i) => RaggedLines(i))
		.attr("stroke-width", () => Math.random() * (20 - 10) + 10);

	return svg.node();
};

export default RothschildsGiraffe;
