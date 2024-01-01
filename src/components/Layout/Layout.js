import React, { useRef } from 'react';
import { Layout, Model } from 'flexlayout-react';
import 'flexlayout-react/style/dark.css';
import GraphLine from '../Lib/GraphLine/GraphLine';
import Gauge from '../Lib/Gauge/Gauge';

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
                    "name": "TEXT 1",
                    "component": "grid",
                    "enableClose": false,
                    "icon": "images/bar_chart.svg"
                },
                {
                    "type": "tab",
                    "id": "#47dcf2fe-a1ca-43f9-b062-afdbdb8390de",
                    "name": "TEXT 2",
                    "component": "grid",
                    "enableClose": false,
                    "icon": "images/terminal.svg"
                },
                {
                    "type": "tab",
                    "id": "#20ae7664-48da-4f79-b63f-20766cc93f5e",
                    "name": "TEXT 3",
                    "component": "json"
                }
            ]
        },
    ],
    layout: {
        type: "row",
        weight: 100,
        children: [
            {
                type: "row",
                weight: 50,
                children: [
                    {
                        type: "tabset",
                        weight: 50,
                        children: [
                            {
                                type: "tab",
                                name: "----------",
                                component: "Graph",
                            }
                        ]
                    },
                    {
                        type: "tabset",
                        weight: 50,
                        children: [
                            {
                                type: "tab",
                                name: "----------",
                                component: "Graph",
                            }
                        ]
                    }
                ]
            },
            {
                type: "row",
                weight: 50,
                children: [
                    {
                        type: "tabset",
                        weight: 50,
                        children: [
                            {
                                type: "tab",
                                name: "----------",
                                component: "Graph",
                            }
                        ]
                    },
                    {
                        type: "tabset",
                        weight: 50,
                        children: [
                            {
                                type: "tab",
                                name: "----------",
                                component: "Gauge",
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
        if (node._attributes.id === "#58616339-1440-4048-a048-114306773179") {
            renderValues.stickyButtons.push(
                <img src="images/add.svg"
                    alt="Add"
                    key="Add button"
                    title="Add Tab (using onRenderTabSet callback, see Demo)"
                    style={{ width: "1.1em", height: "1.1em" }}
                    className="flexlayout__tab_toolbar_button"
                    onClick={() => onAddFromTabSetButton(node)}
                />);
        }
    }

    const onAddFromTabSetButton = (node) => {
        (layoutRef.current).addTabToTabSet(node.getId(), {
            component: "Graph",
            name: "GRAPH " + nextGridIndex++
        });
    }

    const factory = (node) => {
        var component = node.getComponent();

        if (component === "Graph") {
            return <GraphLine colorHex={"#0aefff"} />;
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
