import express from "express";
import { createServer } from "node:http";

import next from "next";
import { Server } from "socket.io";
import { parse } from "url";

import fs from "node:fs";
import { PngImg as PNG } from "png-img";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;

const nextApp = next({ dev, hostname, port });
const handle = nextApp.getRequestHandler();

const image = new PNG(fs.readFileSync("nostatic/img.png"));

const app = express();
const server = createServer(app);

const io = new Server(server);

app.use(express.static("nostatic"));

app.use(async (req, res) => {
	try {
		await handle(req, res, parse(req.url, true));
	} catch (error) {
		console.error(error);
		res.statusCode = 500;
		res.end("Internal Server Error");
	}
});

 //const months = ["#00FF33", "#FFFFFF"];
io.on("connection", socket => {

    socket.on("set", args => {
            //colors = getRandomInt(1);

		const size = image.size();
		if (!args || args.x == null || args.y == null || args.x > (size.width - 1)|| args.y > (size.height - 1) || !args.color || typeof args.x !== "number" || typeof args.y !== "number" || typeof args.color !== "string") {
			return;
		}
      args.color = args.color
		io.sockets.emit("set", args);

		image.set(args.x, args.y, args.color);//"#00FF33")//args.color);
		image.save("nostatic/img.png");
	});
});

server.once("error", error => {
	console.error(error);
	process.exit(1);
});

nextApp.prepare().then(() => {
	server.listen(3000, () => {
		console.log(
			`ready - started custom server on http://${hostname}:${port}`
		);
	});
});
