import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { Motion, Looks, Events, Controls } from "./data";

export default function Sidebar() {
  const [selectedMenu, setSelectedMenu] = useState("motion");
  const [motionData, setMotionData] = useState([]);


  useEffect(() => {

    let arr = [];
    Motion.map((e, index) => {
      arr.push({ id: index, data: e.text, value: 0 })
    })
    setMotionData(arr)
  }, [])

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("text/plain", item);
  };

  function addStep(index, x) {
    let tmp = motionData;
    tmp[index].value = Number(x.target.value);
    setMotionData(tmp)
  }



  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };



  return (
    <>
      {/* Menu */}
      <div className="operators">
        <button
          className={`motion-operation ${selectedMenu === "motion" ? "active" : ""}`}
          onClick={() => handleMenuClick("motion")}
        >
          <div className="motion-circle"></div>
          <p>Motion</p>
        </button>
        <button
          className={`looks-operation ${selectedMenu === "looks" ? "active" : ""}`}
          onClick={() => handleMenuClick("looks")}
        >
          <div className="looks-circle"></div>
          <p>Looks</p>
        </button>
        <button
          className={`events-operation ${selectedMenu === "events" ? "active" : ""}`}
          onClick={() => handleMenuClick("events")}
        >
          <div className="events-circle"></div>
          <p>Events</p>
        </button>
        <button
          className={`controls-operation ${selectedMenu === "controls" ? "active" : ""}`}
          onClick={() => handleMenuClick("controls")}
        >
          <div className="controls-circle"></div>
          <p>Controls</p>
        </button>
      </div>

      {/* Operations */}
      <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
        {selectedMenu === "motion" && (
          <div className="Motion">
            <div className="font-bold">Motion</div>
            {motionData.map((e, index) => (
              <div
                key={e.id}
                className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
                draggable
                onDragStart={(i) => handleDragStart(i, e.data + "" + e.value, e.id)}

              >
                <div
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <p>{e.data}</p>
                  <input style={{ marginLeft: "10px", paddingLeft: "5px", color: "red", width: "50px" }} type="number" defaultValue={e.value} onChange={(event) => addStep(e.id, event)} />
                  {/* <p>{e.value}</p> */}

                </div>
              </div>
            ))}
          </div>
        )}

        {selectedMenu === "looks" && (
          <div className="Looks">
            <div className="font-bold">Looks</div>
            {Looks.map((e) => (
              <div
                key={e.text}
                className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
                draggable
                onDragStart={(i) => handleDragStart(i, e.text, e.id)}
              >
                {e.text}
              </div>
            ))}
          </div>
        )}

        {selectedMenu === "events" && (
          <div className="Events">
            <div className="font-bold">Events</div>
            {Events.map((e) => (
              <div
                key={e.text}
                className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
                draggable
                onDragStart={(i) => handleDragStart(i, e.text, e.id)}
              >
                {e.text}
              </div>
            ))}
          </div>
        )}

        {selectedMenu === "controls" && (
          <div className="Controls">
            <div className="font-bold">Controls</div>
            {Controls.map((e) => (
              <div
                key={e.text}
                className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
                draggable
                onDragStart={(i) => handleDragStart(i, e.text, e.id)}
              >
                {e.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
