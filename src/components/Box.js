import React, { useState} from "react";
import "./Box.css";
import Draggable from "react-draggable";

function Box() {
    const [droppedItems, setDroppedItems] = useState([]);

    const handleDragOver = (e) => {
        e.preventDefault();
    };


    const handleDrop = (e) => {

        e.preventDefault();

        const droppedItem = e.dataTransfer.getData("text/plain");

        let operation = JSON.parse(localStorage.getItem('operation'));
        if (!operation) {
            operation = [];
        }

        operation.push(droppedItem);
        localStorage.setItem('operation', JSON.stringify(operation));

        const dropArea = e.target.closest(".drop-area");
        const rect = dropArea.getBoundingClientRect();
        const dropAreaTop = rect.top + window.scrollY;

        const offsetY = e.clientY - dropAreaTop;
        const newIndex = Math.floor(offsetY / 20);

        setDroppedItems((prevItems) => {
            const updatedItems = [...prevItems];
            updatedItems.splice(newIndex, 0, droppedItem);
            return updatedItems;
        });
    };

    return (
            <div>
                <div className="drop-area" onDragOver={handleDragOver} onDrop={handleDrop}>
                    {droppedItems.length > 0 ? (
                        <div>
                            {droppedItems.map((item, index) => (
                                <div key={index}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    ) : (
                        "Drag and drop items here !!"
                    )}
                </div>
            </div>
    )
}

export default Box