from flask import Flask, jsonify
from kubernetes import client, config
import os

app = Flask(__name__)

# Load K8s config
if os.getenv("KUBERNETES_SERVICE_HOST"):
    config.load_incluster_config()
else:
    config.load_kube_config()

v1 = client.CoreV1Api()

@app.route("/pods")
def list_pods():
    pods = v1.list_pod_for_all_namespaces(watch=False)
    pod_list = [{"name": pod.metadata.name, "namespace": pod.metadata.namespace, "status": pod.status.phase} for pod in pods.items]
    return jsonify(pod_list)

@app.route("/nodes")
def list_nodes():
    nodes = v1.list_node()
    node_list = [{"name": node.metadata.name, "status": node.status.conditions[-1].type} for node in nodes.items]
    return jsonify(node_list)

@app.route("/")
def index():
    return "DevOps Dashboard Backend API"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
