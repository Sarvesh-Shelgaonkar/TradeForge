import React, { useState } from "react";

function PricingTables() {
  const [activeTab, setActiveTab] = useState("Equity");

  // Data for the pricing tables
  const pricingData = {
    Equity: {
      headers: [
        "Equity Delivery",
        "Equity Intraday",
        "F&O - Futures",
        "F&O - Options",
      ],
      rows: [
        {
          label: "Brokerage",
          "Equity Delivery": "Zero Brokerage",
          "Equity Intraday":
            "0.03% or Rs. 20/executed order whichever is lower",
          "F&O - Futures": "0.03% or Rs. 20/executed order whichever is lower",
          "F&O - Options": "Flat Rs. 20 per executed order",
        },
        {
          label: "STT/CTT",
          "Equity Delivery": "0.1% on buy & sell",
          "Equity Intraday": "0.025% on the sell side",
          "F&O - Futures": "0.02% on the sell side",
          "F&O - Options": (
            <ul className="list-unstyled small mb-0">
              {" "}
              {/* Added mb-0 for no bottom margin */}
              <li>
                0.125% of the intrinsic value on options that are bought and
                exercised
              </li>
              <li>0.1% on sell side (on premium)</li>
            </ul>
          ),
        },
        {
          label: "Transaction  charges",
          "Equity Delivery": (
            <ul className="list-unstyled small mb-0">
              {" "}
              {/* Added mb-0 for no bottom margin */}
              <li>NSE: 0.00297%</li>
              <li>BSE: 0.00375%</li>
            </ul>
          ),
          "Equity Intraday": (
            <ul className="list-unstyled small mb-0">
              {" "}
              {/* Added mb-0 for no bottom margin */}
              <li>NSE: 0.00297%</li>
              <li>BSE: 0.00375%</li>
            </ul>
          ),
          "F&O - Futures": (
            <ul className="list-unstyled small mb-0">
              {" "}
              {/* Added mb-0 for no bottom margin */}
              <li>NSE: 0.00173%</li>
              <li>BSE: 0</li>
            </ul>
          ),
          "F&O - Options": (
            <ul className="list-unstyled small mb-0">
              {" "}
              {/* Added mb-0 for no bottom margin */}
              <li>NSE: 0.03503% (on premium)</li>
              <li>BSE: 0.0325% (on premium)</li>
            </ul>
          ),
        },
        {
          label: "GST",
          "Equity Delivery":
            "18% on (brokerage + SEBI charges + transaction charges)",
          "Equity Intraday":
            "18% on (brokerage + SEBI charges + transaction charges)",
          "F&O - Futures":
            "18% on (brokerage + SEBI charges + transaction charges)",
          "F&O - Options":
            "18% on [brokerage SEBI charges + transaction charges]",
        },
        {
          label: "SEBI charges",
          "Equity Delivery": "₹10/crore",
          "Equity Intraday": "₹10/crore",
          "F&O - Futures": "₹10/crore",
          "F&O - Options": "₹10/crore",
        },
        {
          label: "Stamp charges",
          "Equity Delivery": "0.015% or ₹1500/crore on buy side",
          "Equity Intraday": "0.003% or ₹300/crore on buy side",
          "F&O - Futures": "0.002% or ₹200/crore on buy side",
          "F&O - Options": "0.003% or ₹300/crore on buy side",
        },
      ],
    },
    Currency: {
      headers: ["Currency Futures", "Currency Options"],
      rows: [
        {
          label: "Brokerage",
          "Currency Futures":
            "0.03% or Rs. 20/executed order whichever is lower",
          "Currency Options": "Flat Rs. 20 per executed order",
        },
        {
          label: "STT/CTT",
          "Currency Futures": "No STT/CTT",
          "Currency Options": "No STT/CTT",
        },
        {
          label: "Transaction charges",
          "Currency Futures": (
            <ul className="list-unstyled small mb-0">
              {" "}
              {/* Added mb-0 for no bottom margin */}
              <li>NSE: 0.0009%</li>
              <li>BSE: 0.0002%</li>
            </ul>
          ),
          "Currency Options": (
            <ul className="list-unstyled small mb-0">
              {" "}
              {/* Added mb-0 for no bottom margin */}
              <li>NSE: 0.03503% (on premium)</li>
              <li>BSE: 0.0325% (on premium)</li>
            </ul>
          ),
        },
        {
          label: "GST",
          "Currency Futures":
            "18% on (brokerage + SEBI charges + transaction charges)",
          "Currency Options":
            "18% on (brokerage + SEBI charges + transaction charges)",
        },
        {
          label: "SEBI charges",
          "Currency Futures": "₹10/crore",
          "Currency Options": "₹10/crore",
        },
        {
          label: "Stamp charges",
          "Currency Futures": "0.0001% or ₹10/crore on buy side",
          "Currency Options": "0.0001% or ₹10/crore on buy side",
        },
      ],
    },
    Commodity: {
      headers: ["Commodity Futures", "Commodity Options"],
      rows: [
        {
          label: "Brokerage",
          "Commodity Futures":
            "0.03% or Rs. 20/executed order whichever is lower",
          "Commodity Options": "Flat Rs. 20 per executed order",
        },
        {
          label: "STT/CTT",
          "Commodity Futures": "0.001% on sell side",
          "Commodity Options": "0.05% on sell side (on premium)",
        },
        {
          label: "Transaction charges",
          "Commodity Futures": "0.0026%",
          "Commodity Options": "0.0026%",
        },
        {
          label: "GST",
          "Commodity Futures":
            "18% on (brokerage + SEBI charges + transaction charges)",
          "Commodity Options":
            "18% on (brokerage + SEBI charges + transaction charges)",
        },
        {
          label: "SEBI charges",
          "Commodity Futures": "₹10/crore",
          "Commodity Options": "₹10/crore",
        },
        {
          label: "Stamp charges",
          "Commodity Futures": "0.002% or ₹200/crore on buy side",
          "Commodity Options": "0.003% or ₹300/crore on buy side",
        },
      ],
    },
  };

  const currentTableData = pricingData[activeTab];

  return (
    // To ensure Bootstrap styling works, make sure to include Bootstrap CSS in your HTML file if not already present.
    // For example, in the <head> section:
    // <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" xintegrity="sha384-..." crossorigin="anonymous">
    <div className="container text-center">
      <style>
        {`
          .tab-button {
            position: relative;
            padding: 0 0.9rem; /* Added horizontal padding */
            padding-bottom: 0.5rem; /* Space for the underline */
            border: none !important; /* Ensure no border from default button styles */
            background: none !important; /* Ensure no background from default button styles */
            transition: color 0.3s ease-in-out; /* Only color transition needed */
            cursor: pointer; /* Indicate it's clickable */
            font-size: 1.5rem; /* Increased font size for tabs */
            font-weight: 500; /* Adjust font weight if needed */
            text-decoration: none; /* Ensure no underline unless active/hover */
            color: #6c757d; /* Default muted color for inactive tabs */
          }

          .tab-button.active-tab {
            color: #0d6efd !important; /* Blue color for active tab */
            border-bottom: none !important; /* Ensure no border on the button itself for the blue line */
          }

          .tab-button.active-tab::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: -2px; /* Position slightly below the tab button to sit on the grey line */
            height: 2px; /* Thickness of the blue underline */
            background-color: #0d6efd; /* Blue color */
            border-radius: 1px; /* Rounded ends */
          }

          /* Ensure inactive tabs are muted and active tab is blue on hover */
          .tab-button:not(.active-tab) {
             color: #6c757d; /* Inactive tabs are muted */
          }
          .tab-button:not(.active-tab):hover {
            color: #0d6efd; /* Inactive tabs turn blue on hover */
          }
          .tab-button.active-tab:hover {
            color: #0d6efd !important; /* Active tab stays blue on hover */
          }

          /* Wrapper for tab buttons that will have the general horizontal line */
          .tabs-wrapper-with-line {
            border-bottom: 1px solid #e0e0e0; /* Subtle grey horizontal line */
            padding-bottom: 0; /* Ensures the border is right at the bottom of the buttons' area */
            margin-bottom: 1.5rem; /* Space between line and table */
            position: relative; /* Needed for positioning ::after elements */
          }

          /* Custom styling for table to control borders precisely as per image */
          .custom-table {
            border-collapse: collapse; /* Crucial for controlling individual cell borders */
            width: 100%; /* Ensure it takes full width */
            border: 1px solid #dee2e6; /* Outer border */
            font-size: 1.1rem;
          }

          .custom-table th,
          .custom-table td {
            border-bottom: 1px solid #dee2e6; /* All horizontal internal borders */
            border-left: none; /* Remove all internal vertical left borders */
            border-right: none; /* Remove all internal vertical right borders */
            padding: 0.8rem;
          }

          /* Specific style for the header bottom border */
          .custom-table thead th {
            border-bottom: 2px solid #dee2e6; /* Stronger line below header row */
            padding: 1rem;
          }

          /* Remove bottom border for the last row of the table */
          .custom-table tbody tr:last-child td {
            border-bottom: none;
          }

          /* Ensure the first and last column of the table (outer edges) have borders */
          .custom-table th:first-child,
          .custom-table td:first-child {
            border-left: 1px solid #dee2e6;
            text-align: left;
          }

          .custom-table th:last-child,
          .custom-table td:last-child {
            border-right: 1px solid #dee2e6;
          }

          .custom-table th {
            text-align: left !important;
          }
        `}
      </style>
      <div className="container p-4 rounded mt-4" style={{ maxWidth: "90%" }}>
        <div className="d-flex justify-content-start tabs-wrapper-with-line ">
          {["Equity", "Currency", "Commodity"].map((tab) => (
            <button
              key={tab}
              className={`me-3 tab-button ${
                activeTab === tab ? "active-tab" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="table-responsive">
          <table className="table table-striped rounded custom-table">
            <thead className="table-light">
              <tr>
                <th
                  scope="col"
                  className="text-start text-muted text-uppercase small"
                ></th>
                {currentTableData.headers.map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="text-start text-muted text-uppercase small"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentTableData.rows.map((row) => (
                <tr key={row.label}>
                  <td className="text-nowrap small fw-bold text-dark align-top text-start">
                    {row.label}
                  </td>
                  {currentTableData.headers.map((header) => (
                    <td
                      key={header}
                      className="small text-secondary align-top text-start"
                    >
                      {row[header]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PricingTables;
