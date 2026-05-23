# ClaimShield AI 🚀

AI-powered Insurance Claim Risk Intelligence Platform built using **Google Cloud, Vertex AI, FastAPI, Next.js, Retrieval-Grounded AI, and MCP-inspired multi-agent orchestration**.

Built for **DeployFest 2026** hosted by Google Developer Groups Cloud Bengaluru.

---

# 🌟 Overview

ClaimShield AI is an enterprise-grade AI investigation platform designed to identify high-risk insurance claims using real-world insurance datasets and AI-driven risk analysis.

The platform combines:

* AI-powered risk intelligence
* MCP-inspired multi-agent orchestration
* Retrieval-grounded reasoning
* Explainable AI workflows
* Human-in-the-loop approvals
* AI observability and monitoring

to create a scalable and trustworthy insurance claim investigation system.

---

# ✨ Key Features

## 🧠 MCP-Inspired Multi-Agent Architecture

The platform uses modular AI agents coordinated through an orchestration layer:

* MCP Orchestrator Agent
* Risk Analysis Agent
* RAG Retrieval Agent
* Vertex AI Reasoning Agent
* Observability Agent

This architecture improves:

* modularity
* workflow visibility
* explainability
* enterprise scalability

---

## 🔍 AI Risk Intelligence

* Detects potentially risky insurance claims
* Generates dynamic risk scores
* Identifies suspicious policy patterns
* Supports enterprise investigation workflows

---

## 📚 Retrieval-Grounded AI

* Retrieves insurance investigation context
* Grounds AI-generated reasoning
* Reduces hallucinations
* Improves trustworthiness of AI outputs

---

## 🤖 Vertex AI Integration

* AI-generated explainable investigations
* Human-readable claim insights
* Context-aware reasoning using Gemini

---

## 👨‍💼 Human-in-the-loop Workflow

* Manual approval workflows
* Escalation handling
* AI-assisted decision support
* Enterprise review process simulation

---

## 📈 AI Observability

* Investigation logs
* Agent execution tracking
* Workflow visibility
* AI activity monitoring

---

## ☁️ Cloud-Native Architecture

* Frontend deployed on Google Cloud Run
* Backend deployed on Google Cloud Run
* Dataset stored securely in Google Cloud Storage
* Fully live public deployment

---

# 🏗️ System Architecture

```text
Frontend (Next.js + TailwindCSS)
        ↓
Cloud Run Frontend
        ↓
FastAPI Backend
        ↓
MCP Orchestrator Layer
   ↙        ↓         ↘
Risk      RAG      Vertex AI
Agent     Agent      Agent
        ↓
Observability Layer
        ↓
Human Approval Workflow
        ↓
Google Cloud Storage Dataset
```

---

# ⚙️ AI Workflow

```text
User selects policy
        ↓
MCP Orchestrator initializes workflow
        ↓
Risk Analysis Agent calculates risk score
        ↓
RAG Retrieval Agent fetches grounded context
        ↓
Vertex AI generates explainable insights
        ↓
Observability Layer logs execution flow
        ↓
Human reviewer approves or escalates claim
```

---

# 🛠️ Tech Stack

## Frontend

* Next.js
* TypeScript
* Tailwind CSS
* Axios

## Backend

* FastAPI
* Python
* Pandas

## AI & Cloud

* Vertex AI / Gemini
* Google Cloud Run
* Google Cloud Storage
* MCP-inspired orchestration
* Retrieval-grounded reasoning

---

# 📊 Dataset

The project uses a real-world car insurance claim prediction dataset containing:

* Policy tenure
* Vehicle age
* Customer attributes
* Claim history
* Population density
* Claim status

The system uses this data to generate:

* dynamic risk scores
* explainable AI insights
* enterprise investigation workflows

---

# 🚀 Live Demo

## Frontend

```text
https://claimshield-frontend-905201834317.us-central1.run.app
```

## Backend API

```text
https://claimshield-backend-905201834317.us-central1.run.app
```

---

# ⚡ Running Locally

## Clone Repository

```bash
git clone <your-repo-url>
cd claimshield-ai
```

---

# Backend Setup

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate environment:

### Windows

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run backend:

```bash
uvicorn main:app --reload
```

Backend runs at:

```text
http://localhost:8000
```

---

# Frontend Setup

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:3000
```

---

# ☁️ Deploying to Google Cloud Run

## Backend Deployment

```bash
gcloud run deploy claimshield-backend \
--source . \
--region us-central1 \
--allow-unauthenticated \
--memory 1Gi
```

---

## Frontend Deployment

```bash
gcloud run deploy claimshield-frontend \
--source . \
--region us-central1 \
--allow-unauthenticated \
--memory 1Gi
```

---

# 🎯 DeployFest Mission Alignment

This project directly addresses the DeployFest challenge requirements:

✅ Google Cloud-native deployment
✅ Vertex AI integration
✅ Live public deployment
✅ MCP-inspired AI orchestration
✅ Task-executing AI agents
✅ Retrieval-grounded reasoning
✅ Explainable AI outputs
✅ AI observability and telemetry
✅ Human oversight workflows

---

# 🔮 Future Enhancements

* Real-time claim ingestion
* BigQuery integration
* Advanced fraud detection ML models
* Vector database retrieval
* Expanded multi-agent orchestration
* Real-time monitoring dashboards
* Enterprise SIEM/SOC integration

---

# 👥 Team

Built during DeployFest 2026 by:

* Justin P Mathew (Team AIChampX)
* Varada M V (Team AIChampX)

---

# 📌 Disclaimer

This project is a hackathon prototype built for educational and demonstration purposes.
