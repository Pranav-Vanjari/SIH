import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // import to read state
import "./comment.css";

const initialComments = [
  {
    Author: "Jane Doe",
    Comment: "This new park is a wonderful addition to our community. My children love the new...",
    Sentiment: "Positive",
    Topic: "Community Parks",
    Date: "Jul 20, 2024",
    Status: "Published",
  },
  {
    Author: "John Smith",
    Comment: "The traffic situation on Main Street is becoming unbearable. We need better traf...",
    Sentiment: "Negative",
    Topic: "Traffic",
    Date: "Jul 19, 2024",
    Status: "Published",
  },
  {
    Author: "Emily White",
    Comment: "The proposal for the new library seems well-thought-out. However, I’m concerned ...",
    Sentiment: "Neutral",
    Topic: "Public Library",
    Date: "Jul 19, 2024",
    Status: "Draft",
  },
  {
    Author: "Michael Brown",
    Comment: "I am thrilled about the increased funding for local schools. This will greatly b...",
    Sentiment: "Positive",
    Topic: "Education Funding",
    Date: "Jul 18, 2024",
    Status: "Published",
  },
  {
    Author: "Sarah Green",
    Comment: "Why are our taxes going up again? This is unacceptable for working families ...",
    Sentiment: "Negative",
    Topic: "Tax Increase",
    Date: "Jul 18, 2024",
    Status: "Published",
  },
];

const topics = [
  "All Topics",
  "Community Parks",
  "Traffic",
  "Public Library",
  "Education Funding",
  "Tax Increase",
  "Community Events",
  "Public Transit",
  "Environmental Policy",
];

const sentiments = ["All Sentiments", "Positive", "Negative", "Neutral"];
const statuses = ["All Drafts", "Published", "Draft"];

const Comments = () => {
  const location = useLocation();
  const passedSentiment = location.state?.sentiment || "All Sentiments"; // read passed sentiment

  const [data, setData] = useState(initialComments);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All Topics");
  const [selectedSentiment, setSelectedSentiment] = useState(passedSentiment);
  const [selectedStatus, setSelectedStatus] = useState("All Drafts");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  useEffect(() => {
    let filteredData = [...initialComments];

    // Apply filters
    if (selectedTopic !== "All Topics")
      filteredData = filteredData.filter(c => c.Topic === selectedTopic);

    if (selectedSentiment !== "All Sentiments")
      filteredData = filteredData.filter(c => c.Sentiment === selectedSentiment);

    if (selectedStatus !== "All Drafts")
      filteredData = filteredData.filter(c => c.Status === selectedStatus);

    // Apply search
    if (searchTerm) {
      filteredData = filteredData.filter(
        c =>
          c.Author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.Comment.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sorting for Author and Date
    if (sortConfig.key === "Author" || sortConfig.key === "Date") {
      filteredData.sort((a, b) => {
        if (sortConfig.key === "Date") {
          const dateA = new Date(a.Date);
          const dateB = new Date(b.Date);
          return sortConfig.direction === "asc" ? dateA - dateB : dateB - dateA;
        }
        const aVal = a.Author.toLowerCase();
        const bVal = b.Author.toLowerCase();
        if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    setData(filteredData);
  }, [searchTerm, selectedTopic, selectedSentiment, selectedStatus, sortConfig]);

  const handleSort = key => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
    setSortConfig({ key, direction });
  };

  const getSortIcon = key => (sortConfig.key === key ? (sortConfig.direction === "asc" ? "▲" : "▼") : "▲");

  return (
    <div className="comments-container">
      <h1>Comments</h1>
      <p>Sortable and filterable list of recent comments.</p>

      <div className="controls">
        <input
          className="search-bar"
          type="text"
          placeholder="Search comments..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <div className="filters">
          <select value={selectedStatus} onChange={e => setSelectedStatus(e.target.value)}>
            {statuses.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select value={selectedTopic} onChange={e => setSelectedTopic(e.target.value)}>
            {topics.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <select value={selectedSentiment} onChange={e => setSelectedSentiment(e.target.value)}>
            {sentiments.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("Author")}>
              Author <span className="sort-arrow">{getSortIcon("Author")}</span>
            </th>
            <th>Comment</th>
            <th>Sentiment</th>
            <th>Topic</th>
            <th onClick={() => handleSort("Date")}>
              Date <span className="sort-arrow">{getSortIcon("Date")}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((c, idx) => (
            <tr key={idx}>
              <td className="author-cell">
                <span className="avatar">{c.Author.split(" ").map(n => n[0]).join("")}</span>
                <span>{c.Author}</span>
              </td>
              <td>{c.Comment}</td>
              <td><span className={`sentiment ${c.Sentiment.toLowerCase()}`}>{c.Sentiment}</span></td>
              <td>{c.Topic}</td>
              <td>{c.Date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Comments;
