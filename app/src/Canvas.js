import React, {useEffect} from "react";
import {useCanvas} from "./CanvasContext";

const Canvas = () => {
    const {
        canvasRef,
        prepareCanvas,
    } = useCanvas();

    useEffect(() => {
        prepareCanvas();
    }, []);

    return (
        <canvas
        ref={canvasRef}
        />
    );
}

export default Canvas;
