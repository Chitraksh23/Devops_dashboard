import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

function App() {
  const [pods, setPods] = useState([]);
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    axios.get("/api/pods").then((res) => setPods(res.data));
    axios.get("/api/nodes").then((res) => setNodes(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Pods in Cluster</h2>
      <ul>
        {pods.map((pod, i) => (
          <li key={i}>{pod.name} ({pod.namespace}) - {pod.status}</li>
        ))}
      </ul>
      <h2>Nodes in Cluster</h2>
      <Bar
        data={{
          labels: nodes.map(n => n.name),
          datasets: [{
            label: 'Node Count',
            data: nodes.map(() => 1),
            backgroundColor: "rgba(75,192,192,0.6)"
          }]
        }}
      />
    </div>
  );
}

export default App;
