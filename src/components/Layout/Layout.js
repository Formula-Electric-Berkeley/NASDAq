import React, { useRef } from 'react';
import { Layout, Model } from 'flexlayout-react';
import 'flexlayout-react/style/dark.css';
import GraphLine from '../Lib/GraphLine/GraphLine';
import Gauge from '../Lib/Gauge/Gauge';
import Selector from './Selector';
import SerialMonitor from '../Views/SerialMonitor/SerialMonitor';

var json = {
    "global": {
        "tabEnableFloat": true,
        "tabSetMinWidth": 100,
        "tabSetMinHeight": 100,
        "borderMinSize": 100
    },
    "borders": [
        {
            "type": "border",
            "location": "bottom",
            "children": [
                {
                    "type": "tab",
                    "id": "#9294e836-a731-4b5c-af6b-fc846f9746ce",
                    "name": "CONNECT STATUS",
                    "component": "grid",
                    "enableClose": false,
                    "icon": "icons/signal.svg"
                },
                {
                    "type": "tab",
                    "id": "#47dcf2fe-a1ca-43f9-b062-afdbdb8390de",
                    "name": "SERIAL MONITOR",
                    "component": "SerialMonitor",
                    "enableClose": false,
                    "icon": "icons/terminal.svg"
                }
            ]
        }
    ],
    "layout": {
        "type": "row",
        "id": "#8e1badf6-eca0-4bda-95ea-21fdced44190",
        "children": [
            {
                "type": "row",
                "id": "#41619668-859e-410f-89b5-6609cfb91ccf",
                "weight": 58.57358907266485,
                "children": [
                    {
                        "type": "tabset",
                        "id": "#7e54492e-9da9-436d-8277-f49595ca1be0",
                        "weight": 27.653301886792452,
                        "children": [
                            {
                                "type": "tab",
                                "id": "#b9273023-2061-43c4-a1d0-67f7880e1c85",
                                "name": "Temperature",
                                "component": "GraphTemp"
                            }
                        ]
                    },
                    {
                        "type": "tabset",
                        "id": "#6797bff9-9b04-4ee7-95c2-0f68f350b480",
                        "weight": 27.653301886792452,
                        "children": [
                            {
                                "type": "tab",
                                "id": "#2217c858-0a5a-498b-bf89-0aaaf96ad682",
                                "name": "Voltate",
                                "component": "GraphVoltage"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "row",
                "id": "#7a64fa52-7d6a-48a0-8369-d4c412a4ed36",
                "weight": 16.595850237255043,
                "children": [
                    {
                        "type": "tabset",
                        "id": "#58882a52-1a25-49fa-8d34-f1678260158f",
                        "weight": 17.976190476190474,
                        "children": [
                            {
                                "type": "tab",
                                "id": "#6b0834e3-2c16-411a-ba99-dbd81b1372b8",
                                "name": "Temperature",
                                "component": "Gauge"
                            }
                        ]
                    },
                    {
                        "type": "tabset",
                        "id": "#94694a20-3892-42d8-ae66-fb060f7183c0",
                        "weight": 17.976190476190474,
                        "children": [
                            {
                                "type": "tab",
                                "id": "#92fb98ce-f167-407a-b1ca-f2dc4ff50da0",
                                "name": "Voltage",
                                "component": "Gauge"
                            }
                        ],
                        "active": true
                    }
                ]
            }
        ]
    }
}

var json_old = {
    "global": {
        "tabEnableFloat": true,
        "tabSetMinWidth": 100,
        "tabSetMinHeight": 100,
        "borderMinSize": 100
    },
    "borders": [
        {
            "type": "border",
            "location": "bottom",
            "children": [
                {
                    "type": "tab",
                    "id": "#9294e836-a731-4b5c-af6b-fc846f9746ce",
                    "name": "CONNECT STATUS",
                    "component": "grid",
                    "enableClose": false,
                    "icon": "icons/signal.svg"
                },
                {
                    "type": "tab",
                    "id": "#47dcf2fe-a1ca-43f9-b062-afdbdb8390de",
                    "name": "SERIAL MONITOR",
                    "component": "SerialMonitor",
                    "enableClose": false,
                    "icon": "icons/terminal.svg"
                },
            ]
        }
    ],
    "layout": {
        "type": "row",
        "id": "#8e1badf6-eca0-4bda-95ea-21fdced44190",
        "children": [
            {
                "type": "row",
                "id": "#41619668-859e-410f-89b5-6609cfb91ccf",
                "weight": 57.37968144313995,
                "children": [
                    {
                        "type": "tabset",
                        "id": "#7e54492e-9da9-436d-8277-f49595ca1be0",
                        "weight": 55.306603773584904,
                        "children": [
                            {
                                "type": "tab",
                                "id": "#b9273023-2061-43c4-a1d0-67f7880e1c85",
                                "name": "----------",
                                "component": "GraphTemp"
                            }
                        ]
                    },
                    {
                        "type": "row",
                        "id": "#c5437d41-8c0b-42e5-b17a-394da2420e86",
                        "weight": 44.693396226415096,
                        "children": [
                            {
                                "type": "tabset",
                                "id": "#ab3c15c2-7d10-4050-9e09-9031c50afd42",
                                "weight": 50,
                                "children": [
                                    {
                                        "type": "tab",
                                        "id": "#2217c858-0a5a-498b-bf89-0aaaf96ad682",
                                        "name": "----------",
                                        "component": "GraphVoltage"
                                    }
                                ]
                            },
                            {
                                "type": "tabset",
                                "id": "#f617edbc-ef17-45e5-910e-b2674965b95d",
                                "weight": 50,
                                "children": [
                                    {
                                        "type": "tab",
                                        "id": "#ef1feb14-fad6-4854-bef5-0962a0ab27a1",
                                        "name": "----------",
                                        "component": "Graph"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "row",
                "id": "#7a64fa52-7d6a-48a0-8369-d4c412a4ed36",
                "weight": 17.789757866779947,
                "children": [
                    {
                        "type": "tabset",
                        "id": "#58882a52-1a25-49fa-8d34-f1678260158f",
                        "weight": 35.95238095238095,
                        "children": [
                            {
                                "type": "tab",
                                "id": "#6b0834e3-2c16-411a-ba99-dbd81b1372b8",
                                "name": "----------",
                                "component": "Gauge"
                            }
                        ],
                        "active": true
                    },
                    {
                        "type": "tabset",
                        "id": "#2da4fd2c-212f-4076-998e-a2d9fef1309c",
                        "weight": 33.57142857142857,
                        "children": [
                            {
                                "type": "tab",
                                "id": "#05e57456-6597-46fd-8a86-c32984b16778",
                                "name": "----------",
                                "component": "Gauge"
                            }
                        ]
                    },
                    {
                        "type": "tabset",
                        "id": "#9dfff6e1-668e-405f-a20c-ee7a59bf0c11",
                        "weight": 30.47619047619047,
                        "children": [
                            {
                                "type": "tab",
                                "id": "#92fb98ce-f167-407a-b1ca-f2dc4ff50da0",
                                "name": "----------",
                                "component": "Gauge"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const model = Model.fromJson(json);

const Landing = () => {

    const layoutRef = useRef();
    let nextGridIndex = 1;

    const onRenderTabSet = (node, renderValues) => {
        renderValues.stickyButtons.push(
            <img src="icons/add.svg"
                alt="Add"
                key="Add button"
                title="Add Tab (using onRenderTabSet callback, see Demo)"
                style={{ width: "1.1em", height: "1.1em" }}
                className="flexlayout__tab_toolbar_button"
                onClick={() => onAddFromTabSetButton(node)}
            />);
    }

    const onAddFromTabSetButton = (node) => {
        (layoutRef.current).addTabToTabSet(node.getId(), {
            component: "Selector",
            name: "----------",
        });

    }

    const factory = (node) => {
        // console.log(model.toJson());
        var component = node.getComponent();

        if (component === "SerialMonitor") {
            return <SerialMonitor/>;
        }

        if (component === "Selector") {
            return <Selector/>;
        }

        if (component === "Graph") {
            return <GraphLine colorHex={"#eb9550"} />;
        }

        if (component === "GraphTemp") {
            return <GraphLine colorHex={"#fed100"} dataSource={"TEMP"} />;
        }

        if (component === "GraphVoltage") {
            return <GraphLine colorHex={"#0aefff"} dataSource={"VOLTAGE"} />;
        }

        if (component === "Gauge") {
            return <Gauge value={85} units={"MPH"} />;
        }

        if (component === "Graph") {
            return <h1>Graph</h1>;
        }
    }

    return (
        <div>
            <Layout
                ref={layoutRef}
                model={model}
                factory={factory}
                onRenderTabSet={onRenderTabSet}
            />
        </div>
    );
};

export default Landing;
