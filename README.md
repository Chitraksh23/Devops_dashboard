# DevOps Dashboard

A full-stack DevOps Dashboard application that visualizes live Kubernetes cluster data (pods and nodes) deployed on AWS EKS using Terraform.

## 🛠️ Tech Stack

| Layer      | Technology           |
|------------|----------------------|
| Frontend   | React, Chart.js      |
| Backend    | Flask (Python)       |
| Infra      | AWS EKS (Terraform)  |
| Deployment | Kubernetes (YAML)    |
| Containers | Docker               |

---

## 📸 Features

- 📊 Visualize Kubernetes pods and nodes
- 📡 Flask backend using official Kubernetes Python client
- 🎨 React frontend with bar charts for live metrics
- ⚙️ Deployed on EKS provisioned by Terraform

---

## 📁 Project Structure

```
devops-dashboard/
├── terraform/          # Terraform IaC for EKS cluster
├── backend/            # Flask API with K8s metrics
├── frontend/           # React + Chart.js dashboard
├── k8s/                # Kubernetes manifests
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/devops-dashboard.git
cd devops-dashboard
```

### 2. Deploy AWS EKS with Terraform
```bash
cd terraform
terraform init
terraform apply -auto-approve
aws eks update-kubeconfig --name devops-dashboard-cluster
kubectl get nodes
```

---

### 3. Build and Push Docker Images
```bash
# Backend
cd backend
docker build -t your-dockerhub-username/devops-backend:latest .
docker push your-dockerhub-username/devops-backend:latest

# Frontend
cd ../frontend
docker build -t your-dockerhub-username/devops-frontend:latest .
docker push your-dockerhub-username/devops-frontend:latest
```

---

### 4. Deploy to EKS
```bash
cd ../k8s
kubectl apply -f backend-deployment.yaml
kubectl apply -f frontend-deployment.yaml
```

---

### 5. Access the Dashboard

```bash
kubectl get svc frontend
```

Open the EXTERNAL-IP in your browser.

---

## 📌 Future Improvements

- Add Ingress + TLS (cert-manager)
- CI/CD with GitHub Actions
- Horizontal Pod Autoscaling
- Role-based authentication for dashboard access

---

## 📃 License

MIT License

---

Built with ❤️ for Cloud, DevOps, and Observability.

