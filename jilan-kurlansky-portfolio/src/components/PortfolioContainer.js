import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Header from "./Header";
import Contact from "./pages/Contact";


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
      <div>
        <Header />
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
     
      </div>
  );
}
