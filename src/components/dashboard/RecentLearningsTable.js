import React, { useEffect, useState } from "react";
import "./index.css";

const Table = () => {
  

  const header = [
    "ID", "Title", "Source",
    "Start Date", "Most Recent Update", "Status"
  ];

  return (
    <div className="dtable rltable">
      <div className="dtable-title">Recent Learnings</div>
      <table className="rlt-table">
        <RecentLearningsHeader headers={ header }></RecentLearningsHeader>
        <RecentLearningsItems
          headers={ header }
        ></RecentLearningsItems>
      </table>
    </div>
  )
}

const RecentLearningsItems = ({headers}) => {
  const [recentLearnings, setRecentLearnings] = useState([]);

  useEffect(() => {
    const getRecentLearnings = async () => {
      const url = "http://localhost:3001/recent-learnings";
      const response = await fetch(url)
        .catch(err => {
          console.log(err.message, url);
          setRecentLearnings([]);
        });

      if (response && response.ok) {
        const data = await response.json();
        setRecentLearnings(data);
      }
    }

    getRecentLearnings();
  }, []);

  return (
    <tbody>
      {
        recentLearnings.map((item, i) => {
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