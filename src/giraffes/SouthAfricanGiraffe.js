import * as d3 from "d3";

const SouthAfricanGiraffe = () => {
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

	var defs = svg.append("defs");

	for (let i = 0; i < circles.length; i++) {
		defs.append("radialGradient")
			.attr("id", i)
			.selectAll("stop")
			.data([
				{ offset: "0%", color: "#754b24" },
				{ offset: "100%", color: "#95602e" },
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
			.attr("r", 170)
			.attr("cx", circles[i].x)
			.attr("cy", circles[i].y)
			.attr("clip-path", `url(#clipPath${i})`)
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

		for (let j = 0; j < NUM_POINTS; j++) {
			let pt = path.getPointAtLength((j * len) / (NUM_POINTS - 1));

			if (Math.random() < 1.5 / 100) {
				let pt2 = path.getPointAtLength((j * len) / (NUM_POINTS + 5));
				if (
					Math.abs(pt.x - pt2.x) > 25 ||
					Math.abs(pt.y - pt2.y) > 25
				) {
					const x = (pt.x + pt2.x) / 2;
					const y = (pt.y + pt2.y) / 2;
					const pt3x = x + (4 / 5) * (circles[i].x - x);
					const pt3y = y + (4 / 5) * (circles[i].y - y);

					let spikepoints = [];
					for (let k = 0; k < 20; k++) {
						spikepoints.push(
							pt.x +
								(k / 20) * (pt3x - pt.x) +
								Math.random() * (3 + 3) -
								3
						);
						spikepoints.push(
							pt.y +
								(k / 20) * (pt3y - pt.y) +
								Math.random() * (3 + 3) -
								3
						);
					}
					let spikepoints2 = [];
					for (let k = 0; k < 20; k++) {
						spikepoints2.push(
							pt3x +
								(k / 30) * (pt2.x - pt3x) +
								Math.random() * (3 + 3) -
								3
						);
						spikepoints2.push(
							pt3y +
								(k / 30) * (pt2.y - pt3y) +
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
						.attr("fill", "#d4b18a");
				}
			}
			pt.x += Math.random() * (4 + 4) - 4;
			pt.y += Math.random() * (4 + 4) - 4;

			points.push([pt.x, pt.y]);
		}
		return points;
	}

	//mesh
	svg.append("g")
		.attr("fill", "none")
		.attr("stroke", "#d4b18a")
		.selectAll("path")
		.data(circles)
		.join("polygon")
		.attr("points", (_d, i) => RaggedLines(i))
		.attr("stroke-width", () => Math.random() * (25 - 10) + 10);

	return svg.node();
};

export default SouthAfricanGiraffe;
