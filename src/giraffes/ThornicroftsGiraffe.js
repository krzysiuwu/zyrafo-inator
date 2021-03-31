import * as d3 from "d3";

const ThornicroftsGiraffe = () => {
	const height = 800;
	const width = 800;

	const svg = d3.create("svg");

	const xpart = height / 6;
	const ypart = width / 5;
	let circles = [];
	for (let i = 0; i < 6; i++) {
		for (let j = 0; j < 5; j++) {
			circles.push({
				x:
					Math.random() *
						((i + 1) * xpart * 0.95 - i * xpart * 1.15) +
					i * xpart * 1.1,
				y:
					Math.random() *
						((j + 1) * ypart * 0.95 - j * ypart * 1.15) +
					j * ypart * 1.1,
			});
		}
	}

	let voronoi = d3.Delaunay.from(
		circles,
		(d) => d.x,
		(d) => d.y
	).voronoi([0, 0, width, height]);

	const shades = ["#785541", "#74523e", "#634636"];

	let defs = svg.append("defs");

	for (let i = 0; i < circles.length; i++) {
		defs.append("radialGradient")
			.attr("id", i)
			.selectAll("stop")
			.data([
				{
					offset: "0%",
					color: shades[Math.floor(Math.random() * shades.length)],
				},
				{
					offset: "20%",
					color: shades[Math.floor(Math.random() * shades.length)],
				},
				{
					offset: "40%",
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

		for (let j = 0; j < NUM_POINTS; j++) {
			let pt = path.getPointAtLength((j * len) / (NUM_POINTS - 1));

			if (Math.random() < 1 / 100) {
				let pt2 = path.getPointAtLength((j * len) / (NUM_POINTS - 5));
				if (
					Math.abs(pt.x - pt2.x) > 15 ||
					Math.abs(pt.y - pt2.y) > 15
				) {
					const randomx = Math.random() * (10 + 10) - 10;
					const randomy = Math.random() * (10 + 10) - 10;
					const x = (pt.x + pt2.x) / 2;
					const y = (pt.y + pt2.y) / 2;
					const pt3x = x + (4 / 5) * (circles[i].x - x);
					const pt3y = y + (4 / 5) * (circles[i].y - y);
					svg.append("polygon")
						.attr("points", [
							pt.x,
							pt.y,
							pt2.x,
							pt2.y,
							pt3x + randomx,
							pt3y + randomy,
						])
						.attr("fill", "none")
						.attr("stroke-width", 3)
						.attr("stroke", "#dac2b7")
						.attr("stroke-linejoin", "round");

					svg.append("polygon")
						.attr("points", [
							pt.x,
							pt.y,
							pt2.x,
							pt2.y,
							pt3x + randomx,
							pt3y + randomy,
						])
						.attr("fill", "#dac2b7");
				}
			}
			pt.x += Math.random() * (2 + 2) - 1;
			pt.y += Math.random() * (2 + 2) - 1;

			points.push([pt.x, pt.y]);
		}
		return points;
	}

	//mesh
	svg.append("g")
		.attr("fill", "none")
		.attr("stroke", "#dac2b7")
		.selectAll("path")
		.data(circles)
		.join("polygon")
		.attr("points", (_d, i) => dupa(i))
		.attr("stroke-width", () => Math.random() * (20 - 10) + 10);

	return svg.node();
};

export default ThornicroftsGiraffe;
