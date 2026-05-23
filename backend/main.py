from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

import pandas as pd
import json

from risk_engine import calculate_risk
from rag_engine import retrieve_context
from vertex_service import generate_insight
from observability import log_event

app = FastAPI()

# ==========================================
# CORS
# ==========================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================================
# LOAD DATASET
# ==========================================

df = pd.read_csv("car_insurance.csv")

# Sample policies for live demo
sample_data = df.sample(15)

# ==========================================
# HOME
# ==========================================

@app.get("/")
def home():

    return {
        "message": "ClaimShield AI Backend Running"
    }

# ==========================================
# GET POLICIES
# ==========================================

@app.get("/policies")
def get_policies():

    policies = []

    for _, row in sample_data.iterrows():

        customer = {
            "policy_id": str(row["policy_id"]),
            "policy_tenure": float(
                row["policy_tenure"]
            ),
            "age_of_car": float(
                row["age_of_car"]
            ),
            "age_of_policyholder": float(
                row["age_of_policyholder"]
            ),
            "population_density": int(
                row["population_density"]
            ),
            "claim_status": int(
                row["is_claim"]
            )
        }

        # ==========================================
        # PREVIEW RISK
        # ==========================================

        risk = calculate_risk(customer)

        customer["risk_level"] = (
            risk["risk_level"]
        )

        customer["risk_score"] = (
            risk["risk_score"]
        )

        policies.append(customer)

    return policies

# ==========================================
# ANALYZE SINGLE POLICY
# ==========================================

@app.get("/analyze/{policy_id}")
def analyze(policy_id: str):

    row = sample_data[
        sample_data["policy_id"] == policy_id
    ]

    if row.empty:

        raise HTTPException(
            status_code=404,
            detail="Policy not found"
        )

    row = row.iloc[0]

    customer = {
        "policy_id": str(row["policy_id"]),
        "policy_tenure": float(
            row["policy_tenure"]
        ),
        "age_of_car": float(
            row["age_of_car"]
        ),
        "age_of_policyholder": float(
            row["age_of_policyholder"]
        ),
        "population_density": int(
            row["population_density"]
        ),
        "claim_status": int(
            row["is_claim"]
        )
    }

    # ==========================================
    # INVESTIGATION START
    # ==========================================

    log_event(
        f"Investigation Started: {policy_id}"
    )

    # ==========================================
    # RISK ANALYSIS
    # ==========================================

    risk = calculate_risk(customer)

    log_event(
        "Risk Analysis Agent Completed"
    )

    # ==========================================
    # RAG RETRIEVAL
    # ==========================================

    context = retrieve_context(
        "claim investigation strategy"
    )

    log_event(
        "RAG Retrieval Agent Completed"
    )

    # ==========================================
    # VERTEX AI INSIGHT
    # ==========================================

    insight = generate_insight(
        customer,
        risk,
        context
    )

    log_event(
        "Vertex AI Reasoning Completed"
    )

    # ==========================================
    # FINAL RESPONSE
    # ==========================================

    return {
        "customer": customer,
        "risk": risk,
        "insight": insight
    }

# ==========================================
# OBSERVABILITY LOGS
# ==========================================

@app.get("/logs")
def logs():

    try:

        with open("logs.json") as f:
            return json.load(f)

    except:

        return []

# ==========================================
# HUMAN APPROVAL
# ==========================================

@app.post("/approve")
def approve(action: dict):

    log_event(
        f"Human Approval Submitted: {action['action']}"
    )

    return {
        "status": "approved"
    }