import React from "react";
import RecentLearningsTable from "../components/dashboard/RecentLearningsTable"
import LearningsSummary from "../components/dashboard/LearningsSummary"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <LearningsSummary></LearningsSummary>
      <RecentLearningsTable></RecentLearningsTable>
    </div>
  )
}

export default Dashboard