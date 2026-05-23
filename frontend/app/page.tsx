"use client"

import { useEffect, useState } from "react"
import axios from "axios"

export default function Home() {

  const [data, setData] = useState<any[]>([])
  const [logs, setLogs] = useState<any[]>([])
  const [selectedAnalysis, setSelectedAnalysis] =
    useState<any>(null)

  const [loading, setLoading] = useState(false)

  // ==========================================
  // FETCH POLICIES
  // ==========================================

  const fetchPolicies = async () => {

    try {

      const res = await axios.get(
        "http://localhost:8000/policies"
      )

      setData(res.data)

    } catch (error) {

      console.error(error)

    }
  }

  // ==========================================
  // ANALYZE POLICY
  // ==========================================

  const analyzePolicy = async (
    policyId: string
  ) => {

    try {

      setLoading(true)

      const res = await axios.get(
        `http://localhost:8000/analyze/${policyId}`
      )

      setSelectedAnalysis(res.data)

      const logRes = await axios.get(
        "http://localhost:8000/logs"
      )

      setLogs(logRes.data)

      setLoading(false)

    } catch (error) {

      console.error(error)
      setLoading(false)

    }
  }

  // ==========================================
  // INITIAL LOAD
  // ==========================================

  useEffect(() => {

    fetchPolicies()

  }, [])

  // ==========================================
  // RISK COUNTS
  // ==========================================

  const highRisk = data.filter(
    item => item.risk_level === "HIGH"
  ).length

  const mediumRisk = data.filter(
    item => item.risk_level === "MEDIUM"
  ).length

  const lowRisk = data.filter(
    item => item.risk_level === "LOW"
  ).length

  // ==========================================
  // UI
  // ==========================================

  return (

    <div className="min-h-screen bg-black text-white p-8">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-6xl font-bold text-red-500">
            ClaimShield AI
          </h1>

          <p className="text-gray-400 mt-2">
            Vertex AI-powered Insurance Claim Risk Intelligence Platform
          </p>

        </div>

        <div className="bg-zinc-900 px-6 py-4 rounded-xl border border-zinc-700">

          <p className="text-gray-400 text-sm mb-2">
            Powered By
          </p>

          <div className="flex gap-3 text-sm">

            <span className="bg-red-500 px-3 py-1 rounded-full">
              Vertex AI
            </span>

            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full">
              FastAPI
            </span>

            <span className="bg-green-500 px-3 py-1 rounded-full">
              RAG
            </span>

          </div>

        </div>

      </div>

      {/* METRICS */}

      <div className="grid grid-cols-4 gap-6 mb-10">

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">

          <p className="text-gray-400">
            Policies Loaded
          </p>

          <h2 className="text-5xl font-bold mt-2">
            {data.length}
          </h2>

        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-red-500">

          <p className="text-gray-400">
            High Risk Policies
          </p>

          <h2 className="text-5xl font-bold text-red-500 mt-2">
            {highRisk}
          </h2>

        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-yellow-500">

          <p className="text-gray-400">
            Medium Risk
          </p>

          <h2 className="text-5xl font-bold text-yellow-400 mt-2">
            {mediumRisk}
          </h2>

        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-green-500">

          <p className="text-gray-400">
            Low Risk
          </p>

          <h2 className="text-5xl font-bold text-green-400 mt-2">
            {lowRisk}
          </h2>

        </div>

      </div>

      {/* AGENTS */}

      <div className="flex gap-4 mb-10 flex-wrap">

        <div className="bg-zinc-900 p-4 rounded-xl flex items-center gap-3 border border-zinc-700">

          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>

          Risk Analysis Agent ACTIVE

        </div>

        <div className="bg-zinc-900 p-4 rounded-xl flex items-center gap-3 border border-zinc-700">

          <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>

          RAG Retrieval Agent ACTIVE

        </div>

        <div className="bg-zinc-900 p-4 rounded-xl flex items-center gap-3 border border-zinc-700">

          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

          Vertex AI Agent ACTIVE

        </div>

      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-2 gap-8">

        {/* LEFT PANEL */}

        <div>

          <h2 className="text-4xl font-bold mb-6">
            Insurance Policies
          </h2>

          <div className="grid gap-6 max-h-[1000px] overflow-y-scroll pr-2">

            {data.map((item, index) => (

              <div
                key={index}
                className={`
                  bg-zinc-900
                  p-6
                  rounded-2xl
                  border
                  transition
                  hover:scale-[1.01]

                  ${
                    item.risk_level === "HIGH"
                      ? "border-red-500"
                      : item.risk_level === "MEDIUM"
                      ? "border-yellow-500"
                      : "border-green-500"
                  }
                `}
              >

                <div className="flex justify-between items-center">

                  <h2 className="text-3xl font-bold">
                    {item.policy_id}
                  </h2>

                  <span
                    className={`
                      px-4 py-1 rounded-full text-sm font-bold

                      ${
                        item.risk_level === "HIGH"
                          ? "bg-red-500"
                          : item.risk_level === "MEDIUM"
                          ? "bg-yellow-500 text-black"
                          : "bg-green-500"
                      }
                    `}
                  >
                    {item.risk_level}
                  </span>

                </div>

                <div className="mt-5 space-y-3 text-gray-300">

                  <p>
                    Policy Tenure:
                    {" "}
                    {item.policy_tenure.toFixed(2)}
                  </p>

                  <p>
                    Car Age:
                    {" "}
                    {item.age_of_car}
                  </p>

                  <p>
                    Historical Claim:
                    {" "}
                    {item.claim_status}
                  </p>

                  <p className="text-red-400 font-semibold">
                    Risk Score:
                    {" "}
                    {item.risk_score}
                  </p>

                </div>

                <button
                  onClick={() =>
                    analyzePolicy(item.policy_id)
                  }
                  className="mt-6 bg-red-600 hover:bg-red-700 transition px-5 py-3 rounded-xl font-semibold"
                >
                  Analyze Risk
                </button>

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT PANEL */}

        <div>

          <h2 className="text-4xl font-bold mb-6">
            AI Investigation
          </h2>

          <div className="bg-zinc-900 rounded-2xl p-6 min-h-[1000px] border border-zinc-800">

            {loading ? (

              <div className="space-y-8">

                <div className="animate-pulse text-yellow-400 text-xl">

                  Initializing AI investigation...

                </div>

                <div className="animate-pulse border-l-2 border-red-500 pl-4 py-2">

                  Risk Analysis Agent processing policy...

                </div>

                <div className="animate-pulse border-l-2 border-yellow-500 pl-4 py-2">

                  Retrieving enterprise claim policies...

                </div>

                <div className="animate-pulse border-l-2 border-green-500 pl-4 py-2">

                  Vertex AI generating explainable insights...

                </div>

              </div>

            ) : selectedAnalysis ? (

              <div>

                {/* POLICY HEADER */}

                <div className="flex justify-between items-center mb-8">

                  <h2 className="text-5xl font-bold">
                    {selectedAnalysis.customer.policy_id}
                  </h2>

                  <span
                    className={`
                      px-5 py-2 rounded-full text-lg font-bold

                      ${
                        selectedAnalysis.risk.risk_level === "HIGH"
                          ? "bg-red-500"
                          : selectedAnalysis.risk.risk_level === "MEDIUM"
                          ? "bg-yellow-500 text-black"
                          : "bg-green-500"
                      }
                    `}
                  >
                    {selectedAnalysis.risk.risk_level}
                  </span>

                </div>

                {/* RISK SCORE */}

                <div className="mb-8">

                  <p className="text-red-400 text-3xl font-bold">

                    Risk Score:
                    {" "}
                    {selectedAnalysis.risk.risk_score}

                  </p>

                </div>

                {/* REASONS */}

                <div className="mb-10">

                  <h3 className="font-bold text-2xl mb-4">
                    Risk Reasons
                  </h3>

                  <ul className="list-disc ml-6 text-gray-300 space-y-3">

                    {selectedAnalysis.risk.reasons.map(
                      (reason: string, i: number) => (

                        <li key={i}>
                          {reason}
                        </li>

                      )
                    )}

                  </ul>

                </div>

                {/* AI INSIGHT */}

                <div className="mb-10">

                  <h3 className="font-bold text-2xl mb-4">
                    Vertex AI Insight
                  </h3>

                  <div className="bg-black p-6 rounded-2xl border border-zinc-700">

                    <p className="text-gray-300 whitespace-pre-wrap leading-8">
                      {selectedAnalysis.insight}
                    </p>

                  </div>

                </div>

                {/* ACTIONS */}

                <div className="flex gap-4 mb-10">

                  <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-xl font-semibold">

                    Escalate Investigation

                  </button>

                  <button className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-xl font-semibold">

                    Approve Claim

                  </button>

                </div>

                {/* OBSERVABILITY */}

                <div>

                  <h3 className="font-bold text-2xl mb-5">
                    AI Observability
                  </h3>

                  <div className="space-y-5 max-h-[350px] overflow-y-scroll pr-2">

                    {logs.slice().reverse().map(
                      (log, index) => (

                        <div
                          key={index}
                          className="border-l-2 border-red-500 pl-5 py-2"
                        >

                          <h4 className="font-semibold text-lg">
                            {log.step}
                          </h4>

                          <p className="text-sm text-gray-400 mt-1">
                            {log.timestamp}
                          </p>

                        </div>

                      )
                    )}

                  </div>

                </div>

              </div>

            ) : (

              <div className="flex items-center justify-center h-full">

                <div className="text-center">

                  <h3 className="text-3xl font-bold mb-4">
                    AI Investigation Center
                  </h3>

                  <p className="text-gray-400 text-lg">
                    Select a policyholder to start AI investigation.
                  </p>

                  <div className="mt-10 space-y-3 text-left">

                    <div>
                      ✓ Explainable AI
                    </div>

                    <div>
                      ✓ RAG Grounded Reasoning
                    </div>

                    <div>
                      ✓ Human-in-the-loop Decisions
                    </div>

                    <div>
                      ✓ AI Observability Tracking
                    </div>

                    <div>
                      ✓ Enterprise Policy Intelligence
                    </div>

                  </div>

                </div>

              </div>

            )}

          </div>

        </div>

      </div>

    </div>
  )
}