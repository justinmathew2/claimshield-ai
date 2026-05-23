# ClaimShield AI 🚀

AI-powered Insurance Claim Risk Intelligence Platform built using **Google Cloud, Vertex AI, FastAPI, Next.js, RAG pipelines, and Explainable AI**.

Built for **DeployFest 2026** hosted by Google Developer Groups Cloud Bengaluru.

---

# 🌟 Overview

ClaimShield AI is an enterprise-grade AI investigation platform designed to identify high-risk insurance claims using real-world insurance datasets and AI-driven risk analysis.

The platform combines:

* AI-powered risk intelligence
* Retrieval-Augmented Generation (RAG)
* Explainable AI reasoning
* Human-in-the-loop workflows
* AI observability and monitoring

to create a trustworthy insurance claim investigation system.

---

# ✨ Features

## 🔍 AI Risk Analysis

* Detects potentially risky insurance claims
* Generates dynamic risk scores
* Identifies suspicious policy patterns

## 🧠 Vertex AI Integration

* AI-generated explainable claim investigations
* Human-readable fraud insights
* Context-aware reasoning

## 📚 RAG Pipeline

* Grounded AI responses
* Retrieval-based investigation context
* Reduced hallucinations

## 👨‍💼 Human-in-the-loop Workflow

* Manual review workflows
* Escalate or approve claims
* Enterprise-style investigation flow

## 📈 AI Observability

* Investigation logs
* AI execution tracking
* Agent activity monitoring

## ☁️ Cloud Deployment

* Backend deployed on Google Cloud Run
* Publicly accessible live demo
* Scalable serverless infrastructure

---

# 🏗️ Architecture

```text
Frontend (Next.js + TailwindCSS)
        ↓
FastAPI Backend
        ↓
Risk Analysis Engine
        ↓
RAG Retrieval Pipeline
        ↓
Vertex AI / Gemini
        ↓
Explainable AI Insights
        ↓
Observability Logs + Human Review
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
* RAG Pipeline

---

# 📊 Dataset

The project uses a real-world car insurance claim prediction dataset containing:

* Policy tenure
* Vehicle age
* Customer attributes
* Claim history
* Population density
* Claim status

The system uses this data to generate risk scores and AI-powered investigations.

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

# ☁️ Deploying to Cloud Run

## Backend Deployment

```bash
gcloud run deploy claimshield-backend \
--source . \
--region us-central1 \
--allow-unauthenticated \
--memory 1Gi
```

## Frontend Deployment

```bash
gcloud run deploy claimshield-frontend \
--source . \
--region us-central1 \
--allow-unauthenticated \
--memory 1Gi
```

---

# 🎯 Mission Alignment

This project directly addresses the DeployFest challenge requirements:

✅ Task-executing AI agents
✅ RAG-grounded reasoning
✅ Explainable AI outputs
✅ AI observability and telemetry
✅ Human oversight workflows
✅ Live cloud deployment
✅ Vertex AI integration

---

# 🔮 Future Enhancements

* Real-time streaming claim ingestion
* BigQuery integration
* Advanced fraud ML models
* Multi-agent orchestration
* Vector database integration
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
