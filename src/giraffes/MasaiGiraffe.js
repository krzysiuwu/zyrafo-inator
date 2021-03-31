import * as d3 from "d3";

const ThornicroftsGiraffe = () => {
	const height = 800;
	const width = 800;

	const svg = d3.create("svg");

	const xpart = height / 3;
	const ypart = width / 3;
	let circles = [];
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
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

	let defs = svg.append("defs");

	for (let i = 0; i < circles.length; i++) {
		defs.append("radialGradient")
			.attr("id", i)
			.selectAll("stop")
			.data([
				{
					offset: "0%",
					color: "#574342",
				},
				{
					offset: "30%",
					color: "#574342",
				},
				{
					offset: "100%",
					color: "#3d2f2e",
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
			.attr("r", 260)
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

		let counter = 0;
		for (let j = 0; j < NUM_POINTS; j++) {
			let pt = path.getPointAtLength((j * len) / (NUM_POINTS - 1));

			if (counter >= 20) {
				let pt2 = path.getPointAtLength((j * len) / (NUM_POINTS + 5));
				if (
					Math.abs(pt.x - pt2.x) > 15 ||
					Math.abs(pt.y - pt2.y) > 15
				) {
					const x = (pt.x + pt2.x) / 2;
					const y = (pt.y + pt2.y) / 2;
					const pt3x = x + (4 / 5) * (circles[i].x - x);
					const pt3y = y + (4 / 5) * (circles[i].y - y);

					let spikepoints = [];
					for (let ddd = 0; ddd < 20; ddd++) {
						spikepoints.push(
							pt.x +
								(ddd / 20) * (pt3x - pt.x) +
								Math.random() * (3 + 3) -
								3
						);
						spikepoints.push(
							pt.y +
								(ddd / 20) * (pt3y - pt.y) +
								Math.random() * (3 + 3) -
								3
						);
					}
					let spikepoints2 = [];
					for (let ddd = 0; ddd < 20; ddd++) {
						spikepoints2.push(
							pt3x +
								(ddd / 30) * (pt2.x - pt3x) +
								Math.random() * (3 + 3) -
								3
						);
						spikepoints2.push(
							pt3y +
								(ddd / 30) * (pt2.y - pt3y) +
								Math.random() * (3 + 3) -
								3
						);
					}
					svg.append("polygon")
						.attr("points", [
							pt.x,
							pt.y,
							spikepoints,
							spikepoints2,
							pt2.x,
							pt2.y,
						])
						.attr("fill", "#ceb19f")
						.attr("stroke-width", 1)
						.attr("stroke", "#ceb19f")
						.attr("stroke-linejoin", "round");
				}
				counter = 0;
			}
			counter += 1;
			pt.x += Math.random() * (8 + 8) - 8;
			pt.y += Math.random() * (8 + 8) - 8;

			points.push([pt.x, pt.y]);
		}
		return points;
	}

	//mesh
	svg.append("g")
		.attr("fill", "none")
		.attr("stroke", "#ceb19f")
		.selectAll("path")
		.data(circles)
		.join("polygon")
		.attr("points", (_d, i) => dupa(i))
		.attr("stroke-width", 30);

	return svg.node();
};

export default ThornicroftsGiraffe;