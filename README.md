# ClaimShield AI 🚀

AI-powered Insurance Claim Risk Intelligence Platform built using **Google Cloud, Vertex AI, FastAPI, Next.js, RAG-inspired retrieval workflows, and MCP-inspired multi-agent orchestration**.

Built for **DeployFest 2026** hosted by Google Developer Groups Cloud Bengaluru.

---

# 🌟 Overview

ClaimShield AI is an enterprise-grade AI investigation platform designed to identify high-risk insurance claims using real-world insurance datasets and AI-driven risk analysis.

The platform combines:

* AI-powered risk intelligence
* MCP-inspired multi-agent orchestration
* Retrieval-grounded AI reasoning
* Explainable AI workflows
* Human-in-the-loop approvals
* AI observability and monitoring

to create a trustworthy insurance claim investigation system.

---

# ✨ Features

## 🧠 MCP-Inspired Multi-Agent Workflow

The platform uses modular AI agents coordinated through an orchestration layer:

* MCP Orchestrator Agent
* Risk Analysis Agent
* RAG Retrieval Agent
* Vertex AI Reasoning Agent
* Observability Agent

This architecture improves:

* modularity
* explainability
* workflow tracking
* enterprise scalability

---

## 🔍 AI Risk Analysis

* Detects potentially risky insurance claims
* Generates dynamic risk scores
* Identifies suspicious policy patterns

---

## 📚 Retrieval-Grounded Reasoning

* Retrieves enterprise insurance investigation context
* Grounds AI-generated responses
* Reduces hallucinations
* Enables trustworthy AI workflows

---

## 🤖 Vertex AI Integration

* AI-generated explainable investigations
* Human-readable claim insights
* Context-aware reasoning using Gemini

---

## 👨‍💼 Human-in-the-loop Workflow

* Manual review workflows
* Escalate or approve claims
* Enterprise-style investigation flow

---

## 📈 AI Observability

* Investigation logs
* AI execution tracking
* Workflow visibility
* Agent activity monitoring

---

## ☁️ Cloud Deployment

* Backend deployed on Google Cloud Run
* Frontend deployed on Google Cloud Run
* Public live demo
* Scalable serverless architecture

---

# 🏗️ System Architecture

```text id="arch1"
Frontend (Next.js + TailwindCSS)
        ↓
MCP Orchestrator Layer
        ↓
Risk Analysis Agent
        ↓
RAG Retrieval Agent
        ↓
Vertex AI Reasoning Agent
        ↓
Observability Layer
        ↓
Human Approval Workflow
```

---

# ⚙️ AI Workflow

```text id="arch2"
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
Observability logs workflow execution
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

```text id="livefront"
https://claimshield-frontend-905201834317.us-central1.run.app
```

## Backend API

```text id="liveback"
https://claimshield-backend-905201834317.us-central1.run.app
```

---

# ⚡ Running Locally

## Clone Repository

```bash id="local1"
git clone <your-repo-url>
cd claimshield-ai
```

---

# Backend Setup

```bash id="local2"
cd backend
```

Create virtual environment:

```bash id="local3"
python -m venv venv
```

Activate environment:

### Windows

```bash id="local4"
venv\Scripts\activate
```

Install dependencies:

```bash id="local5"
pip install -r requirements.txt
```

Run backend:

```bash id="local6"
uvicorn main:app --reload
```

Backend runs at:

```text id="local7"
http://localhost:8000
```

---

# Frontend Setup

```bash id="local8"
cd frontend
```

Install dependencies:

```bash id="local9"
npm install
```

Run frontend:

```bash id="local10"
npm run dev
```

Frontend runs at:

```text id="local11"
http://localhost:3000
```

---

# ☁️ Deploying to Google Cloud Run

## Backend Deployment

```bash id="deploy1"
gcloud run deploy claimshield-backend \
--source . \
--region us-central1 \
--allow-unauthenticated \
--memory 1Gi
```

---

## Frontend Deployment

```bash id="deploy2"
gcloud run deploy claimshield-frontend \
--source . \
--region us-central1 \
--allow-unauthenticated \
--memory 1Gi
```

---

# 🎯 DeployFest Mission Alignment

This project directly addresses the DeployFest challenge requirements:

✅ MCP-inspired AI agent orchestration
✅ Task-executing AI agents
✅ Retrieval-grounded reasoning
✅ Explainable AI outputs
✅ AI observability and telemetry
✅ Human oversight workflows
✅ Live cloud deployment
✅ Vertex AI integration

---

# 🔮 Future Enhancements

* Real-time streaming claim ingestion
* BigQuery integration
* Advanced ML fraud detection
* Vector database retrieval
* Multi-agent orchestration expansion
* SOC/SIEM integration
* Real-time monitoring dashboards

---

# 👥 Team

Built during DeployFest 2026 by:

* Justin P Mathew (Team AIChampX)
* Varada M V (Team AIChampX)

---

# 📌 Disclaimer

This project is a hackathon prototype built for educational and demonstration purposes.
