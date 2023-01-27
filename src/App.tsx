import { ReactFlow, MiniMap, Controls, Background } from "reactflow";
import "./styles.css";

export default function App() {
  const nodes = [
    {
      id: "1",
      data: {
        label: "query_database"
      },
      position: {
        x: 0,
        y: 0
      }
    },
    {
      id: "2",
      data: {
        label: "query_artifact"
      },
      position: {
        x: 100,
        y: 0
      }
    },
    {
      id: "3",
      data: {
        label: "classifier_1"
      },
      position: {
        x: 300,
        y: -200
      }
    },
    {
      id: "4",
      data: {
        label: "classifier_2"
      },
      position: {
        x: 300,
        y: -200
      }
    },
    {
      id: "5",
      data: {
        label: "classifier_3"
      },
      position: {
        x: 300,
        y: -200
      }
    },
    {
      id: "7",
      data: {
        label: "predict_ensemble"
      },
      position: {
        x: 300,
        y: -200
      }
    },
    {
      id: "8",
      data: {
        label: "predict_ensemble_artifact"
      },
      position: {
        x: 300,
        y: -200
      }
    },
    {
      id: "9",
      data: {
        label: "save_pred_to_db"
      },
      position: {
        x: 300,
        y: -200
      }
    }
  ];

  const edges = [
    {
      id: "edge-1",
      source: "1",
      target: "2"
    },
    {
      id: "edge-2",
      source: "2",
      target: "3"
    },
    {
      id: "edge-2",
      source: "2",
      target: "4"
    },
    {
      id: "edge-2",
      source: "2",
      target: "5"
    }
  ];

  const onNodesChange = () => {
    console.log("onNodesChange called");
  };

  const onConnect = () => {
    console.log("onConnect called");
  };

  const onEdgesChange = () => {
    console.log("onEdgesChange");
  };

  const onInit = () => {
    console.log("onInit called");
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={onInit}
          fitView
          attributionPosition="top-right"
          //nodeTypes={nodeTypes}
        >
          <MiniMap zoomable pannable />
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </div>
  );
}
