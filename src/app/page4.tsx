"use client";

import { Canvas } from "@/components/Canvas";
import { HelpButton } from "@/components/HelpButton";
import { SimpleColorPicker } from "@/components/SimpleColorPicker";
import { socket } from "@/lib/socket";
import { useRef, useState } from "react";

export default function Home() {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [cX, setCX] = useState(0);
	const [cY, setCY] = useState(0);
	const [scale, setScale] = useState(1);

	const colorRef = useRef<HTMLInputElement>(null);

	return (<>
		<h1>Shh, the canvas is sleeping!</h1><br><h5>Dont wake it up!</h5>
		</>
	
	);
}
