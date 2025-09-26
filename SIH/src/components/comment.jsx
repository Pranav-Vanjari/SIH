import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // import to read state
import "./comment.css";

const initialComments = [
  // 🏞️ Community Parks
  {
    Author: "Aarav Sharma",
    Comment: "The new parks have really improved community life. Families now have clean and safe spaces to relax.",
    Sentiment: "Positive",
    Topic: "Community Parks",
    Date: "Sep 26, 2025",
    Status: "Published",
  },
  {
    Author: "Ritu Nair",
    Comment: "Maintenance is poor. The swings are broken and lights don’t work properly after dark.",
    Sentiment: "Negative",
    Topic: "Community Parks",
    Date: "Sep 26, 2025",
    Status: "Published",
  },
  {
    Author: "Ankit Deshmukh",
    Comment: "The idea of more parks is fine, but I don’t see any new ones being developed nearby yet.",
    Sentiment: "Neutral",
    Topic: "Community Parks",
    Date: "Sep 26, 2025",
    Status: "Published",
  },

  // 🚗 Traffic
  {
    Author: "Sneha Patel",
    Comment: "The new traffic management plan has reduced congestion during office hours. Great job!",
    Sentiment: "Positive",
    Topic: "Traffic",
    Date: "Sep 26, 2025",
    Status: "Published",
  },
  {
    Author: "Rahul Verma",
    Comment: "Traffic is getting worse every day. Signals don’t work properly, and people keep violating rules.",
    Sentiment: "Negative",
    Topic: "Traffic",
    Date: "Sep 26, 2025",
    Status: "Published",
  },
  {
    Author: "Kavya Singh",
    Comment: "Traffic flow seems the same as before. Maybe it’ll take time to notice changes.",
    Sentiment: "Neutral",
    Topic: "Traffic",
    Date: "Sep 26, 2025",
    Status: "Published",
  },

  // 📚 Public Library
  {
    Author: "Rohan Mehta",
    Comment: "The upgraded library is excellent — digital access and quiet study zones make it a perfect place for students.",
    Sentiment: "Positive",
    Topic: "Public Library",
    Date: "Sep 26, 2025",
    Status: "Published",
  },
  {
    Author: "Priya Iyer",
    Comment: "There are very few new books, and the computers often don’t work. Needs better management.",
    Sentiment: "Negative",
    Topic: "Public Library",
    Date: "Sep 26, 2025",
    Status: "Published",
  },
  {
    Author: "Manish Goyal",
    Comment: "Library hours are decent. Nothing great, nothing bad — it’s okay for basic needs.",
    Sentiment: "Neutral",
    Topic: "Public Library",
    Date: "Sep 26, 2025",
    Status: "Published",
  },

  // 🎓 Education Funding
  {
    Author: "Tanya Gupta",
    Comment: "More funds for schools mean better infrastructure and quality teachers. Definitely a positive change.",
    Sentiment: "Positive",
    Topic: "Education Funding",
    Date: "Sep 26, 2025",
    Status: "Published",
  },
  {
    Author: "Amit Joshi",
    Comment: "Funds are announced but never properly used. Schools in rural areas still lack basic facilities.",
    Sentiment: "Negative",
    Topic: "Education Funding",
    Date: "Sep 26, 2025",
    Status: "Published",
  },
  {
    Author: "Shreya Kulkarni",
    Comment: "The funding policy looks fine on paper. Let’s wait to see how it’s implemented.",
    Sentiment: "Neutral",
    Topic: "Education Funding",
    Date: "Sep 26, 2025",
    Status: "Published",
  },

  // 💰 Tax Increase
  {
    Author: "Vikram Reddy",
    Comment: "I understand the need for higher taxes if it’s used for better infrastructure and welfare programs.",
    Sentiment: "Positive",
    Topic: "Tax Increase",
    Date: "Sep 26, 2025",
    Status: "Published",
  },
  {
    Author: "Pooja Agarwal",
    Comment: "Tax burden on middle-class families is already high. Another hike makes life more difficult.",
    Sentiment: "Negative",
    Topic: "Tax Increase",
    Date: "Sep 26, 2025",
    Status: "Published",
  },
  {
    Author: "Kunal Malhotra",
    Comment: "Taxes keep changing every year. I’ve stopped keeping track now.",
    Sentiment: "Neutral",
    Topic: "Tax Increase",
    Date: "Sep 26, 2025",
    Status: "Published",
  },

  // 🎉 Community Events
  {
    Author: "Sana Sheikh",
    Comment: "Local events like cultural fests and marathons bring people together. It’s great for bonding!",
    Sentiment: "Positive",
    Topic: "Community Events",
    Date: "Sep 26, 2025",
    Status: "Published",
  },
  {
    Author: "Ritesh Nair",
    Comment: "Sometimes these events block roads and cause inconvenience. Planning could be better.",
    Sentiment: "Negative",
    Topic: "Community Events",
    Date: "Sep 26, 2025",
    Status: "Published",
  },
  {
    Author: "Divya Sharma",
    Comment: "These events are okay, but I only attend occasionally. Nothing too special.",
    Sentiment: "Neutral",
    Topic: "Community Events",
    Date: "Sep 26, 2025",
    Status: "Published",
  },

  // 🚌 Public Transit
  {
    Author: "Aditya Menon",
    Comment: "Bus services have improved a lot — cleaner, more punctual, and easier to track through apps.",
    Sentiment: "Positive",
    Topic: "Public Transit",
    Date: "Sep 26, 2025",
    Status: "Published",
  },
  {
    Author: "Mitali Dey",
    Comment: "Buses are still overcrowded during peak hours. Authorities should increase the frequency.",
    Sentiment: "Negative",
    Topic: "Public Transit",
    Date: "Sep 26, 2025",
    Status: "Published",
  },
  {
    Author: "Rajesh Pawar",
    Comment: "Transit service is average — some routes are good, others still need attention.",
    Sentiment: "Neutral",
    Topic: "Public Transit",
    Date: "Sep 26, 2025",
    Status: "Published",
  },

  // 🌱 Environmental Policy
  {
    Author: "Meera Krishnan",
    Comment: "The new green initiatives show the government is serious about sustainability. Very encouraging!",
    Sentiment: "Positive",
    Topic: "Environmental Policy",
    Date: "Sep 26, 2025",
    Status: "Published",
  },
  {
    Author: "Deepak Chauhan",
    Comment: "Policies look good on paper but there’s little enforcement. Pollution levels are still high.",
    Sentiment: "Negative",
    Topic: "Environmental Policy",
    Date: "Sep 26, 2025",
    Status: "Published",
  },
  {
    Author: "Isha Patel",
    Comment: "Environmental rules seem balanced, but let’s see if they’re followed consistently.",
    Sentiment: "Neutral",
    Topic: "Environmental Policy",
    Date: "Sep 26, 2025",
    Status: "Published",
  }
]
;

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
  "Board of Directors",
  "Investor Relations",
  "Compliance Officer",
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
