import React from "react";
import "./style/main.scss";

const Main = () => {
    const filterElement = [
        {
            name: "brightness",
        },
        {
            name: "grayscale",
        },
        {
            name: "sepia",
        },
        {
            name: "saturate",
        },
        {
            name: "contrast",
        },
        {
            name: "hueRotate",
        },
    ];
    return (
        <div>
            <div className="image_editor">
                <div className="card">
                    <div className="card_header">
                        <h1>Image Editor</h1>
                    </div>
                    <div className="card_body">
                        <div className="sidebar">
                            <div className="side_body">
                                <div className="filter_section">
                                    <p>Filters</p>
                                    <div className="filter_key">
                                        {filterElement.map((v, index) => (
                                            <button key={index}>
                                                {v.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
