import React from "react";
import { useQuery } from "react-query";
import "../../styles/components/dashboard.css";

import { getLearnings } from "../../api/learnings"



const Table = () => {
  const { data, isLoading, isError } = useQuery('learnings', getLearnings);

  const header = [
    "ID", "Title", "Source",
    "Start Date", "Most Recent Update", "Status"
  ];

  return (
    <div className="dtable rltable">
      <div className="dtable-title">Recent Learnings</div>
      {
        (isLoading || isError) ?
        isLoading ? (<div>Loading...</div>) : (<div>Failed to fetch from Server...</div>)

        : <table className="rlt-table">
            <RecentLearningsHeader headers={ header }></RecentLearningsHeader>
            <RecentLearningsItems
              headers={ header }
              data={ data }
            ></RecentLearningsItems>
          </table>
      }
    </div>
  )
}

const RecentLearningsItems = ({headers, data}) => {
  
  return (
    <tbody>
      {
        data && data.map((item, i) => {
          return (
            <tr key={i} className="rlitem">
              <td className="rli rli-id">{item.id}</td>
              <td className="rli">{item.title}</td>
              <td className="rli">{item.source}</td>
              <td className="rli">{item.startDate}</td>
              <td className="rli">{item.mostRecentUpdate}</td>
              <td className="rli">{item.status}</td>
            </tr>
          )
        })
      }
    </tbody>
  );
}

const RecentLearningsHeader = (props) => {
  const headers = props.headers;

  return (
    <thead>
      <tr className="headers">
        { headers.map((header) => <th className="header" key={header}>{header}</th>) }
      </tr>
    </thead>
  );
}

export default Table