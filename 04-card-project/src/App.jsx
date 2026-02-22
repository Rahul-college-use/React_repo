import React from 'react';
// import app from 'app.css'
import Card from './components/Card';
const App = () => {

  const jobOpenings =
    [
      {
        bandLogo: "https://www.bing.com/th/id/OIP.DoYuESoRecI9l-vyqdrEnQHaE-?w=222&h=152&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        nameOfCompany: "Google",
        dataPosted: "5 days ago",
        poat: "Software Engineer",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$60/hr",
        location: "Bangalore, India"
      },
      {
        bandLogo: "https://www.bing.com/th/id/OIP.9udbiaYj5XUSaewReLvvPAHaHa?w=191&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        nameOfCompany: "Meta (Facebook)",
        dataPosted: "2 weeks ago",
        poat: "Frontend Developer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$85/hr",
        location: "Delhi, India"
      },
      {
        bandLogo: "https://www.bing.com/th/id/OIP.RbDmmt0F982-5AzJmXvXtAHaHa?w=187&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        nameOfCompany: "Amazon",
        dataPosted: "3 days ago",
        poat: "Cloud Support Engineer",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$55/hr",
        location: "Hyderabad, India"
      },
      {
        bandLogo: "https://www.bing.com/th/id/OIP.3it2aYi15bnxjE3n1pakWAHaHa?w=187&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        nameOfCompany: "Apple",
        dataPosted: "1 week ago",
        poat: "iOS Developer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$90/hr",
        location: "Cupertino, USA"
      },
      {
        bandLogo: "https://www.bing.com/th/id/OIP.tnBrElaA8T9bZrERry2kAQHaFj?w=231&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        nameOfCompany: "Netflix",
        dataPosted: "10 days ago",
        poat: "Backend Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$120/hr",
        location: "Los Angeles, USA"
      },
      {
        bandLogo: "https://www.bing.com/th/id/OIP.0Eb1VUFSOSpcwYlahbfHLAHaHa?w=200&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        nameOfCompany: "Microsoft",
        dataPosted: "4 weeks ago",
        poat: "Data Scientist",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$70/hr",
        location: "Noida, India"
      },
      {
        bandLogo: "https://www.bing.com/th/id/OIP.RcutyMAI-280fQ2wxY3JfgHaEK?w=226&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        nameOfCompany: "Tesla",
        dataPosted: "2 days ago",
        poat: "Embedded Systems Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$95/hr",
        location: "Austin, USA"
      },
      {
        bandLogo: "https://www.bing.com/th/id/OIP.os-mIevdcbSaegyhFvNfxwHaHa?w=195&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        nameOfCompany: "OpenAI",
        dataPosted: "1 week ago",
        poat: "AI Research Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$150/hr",
        location: "San Francisco, USA"
      },
      {
        bandLogo: "https://www.bing.com/th/id/OIP.2sgwviB7q789nRDlTLtiEAHaGB?w=194&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        nameOfCompany: "Intel",
        dataPosted: "6 days ago",
        poat: "Hardware Engineer",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$65/hr",
        location: "Bangalore, India"
      },
      {
        bandLogo: "https://www.bing.com/th/id/OIP.dHg437yXVU72WmLjjsP-qgHaEo?w=266&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        nameOfCompany: "Samsung",
        dataPosted: "3 weeks ago",
        poat: "Android Developer",
        tag1: "Part Time",
        tag2: "Junior Level",
        pay: "$45/hr",
        location: "Seoul, South Korea"
      }
    ];


  return (
    <>
      <div className="parent">
        {jobOpenings.map(function (ele) {
          return <Card bandLogo={ele.bandLogo} nameOfCompany={ele.nameOfCompany} dataPosted={ele.dataPosted} post={ele.poat} tag1={ele.tag1} tag2={ele.tag2} pay={ele.pay} location={ele.location} />
        })}
      </div>

    </>
  );
}

export default App;
