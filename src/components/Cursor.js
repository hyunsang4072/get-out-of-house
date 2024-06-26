import { useState } from "react";

export default function Cursor() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });
    return (
        <div
            onPointerMove={e => {
                setPosition({
                    x: e.clientX,
                    y: e.clientY
                });
            }}
            style={{
                position: 'absolute',
                // position: 'relative',
                width: '100vw',
                height: '100vh',
                top: '0',
                left: '0'
            }}>
            <div style={{
                position: 'absolute',
                backgroundColor: 'red',
                borderRadius: '50%',
                transform: `translate(${position.x}px, ${position.y}px)`,
                left: -10,
                top: -10,
                width: 20,
                height: 20,
                zIndex: 1000 // Ensure the cursor stays on top
            }} />
        </div>
    );
}
