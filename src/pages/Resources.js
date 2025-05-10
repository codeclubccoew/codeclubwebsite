import React, { useState } from "react";

const blogs = [
  { id: 1, title: "Main Blog", link: "https://medium.com/@yourarticle1" },
  { id: 2, title: "Blog 2", link: "https://medium.com/@yourarticle2" },
  { id: 3, title: "Blog 3", link: "https://medium.com/@yourarticle3" },
  { id: 4, title: "Blog 4", link: "https://medium.com/@yourarticle4" },
  { id: 5, title: "Blog 5", link: "https://medium.com/@yourarticle5" },
];

const Resources = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length);
  };

  const moveRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
  };

  // Inline styles
  const styles = {
    body: {
      fontFamily: "Arial, sans-serif",
      background: "#0B0C10",
      margin: 0,
      padding: 0,
      height: "100vh",
      color: "#C5C6C7",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    heading: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#66FCF1",
      marginBottom: "20px",
    },
    wrapper: {
      display: "flex",
      width: "100%",
      height: "80vh",
    },
    carouselSection: {
      width: "60%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      flexDirection: "column",
    },
    navButtons: {
      position: "absolute",
      width: "100%",
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex",
      justifyContent: "space-between",
      zIndex: 10,
    },
    navBtn: {
      background: "#45A29E",
      color: "#0B0C10",
      border: "none",
      padding: "15px 20px",
      fontSize: "24px",
      cursor: "pointer",
      borderRadius: "5px",
      transition: "0.3s",
    },
    cardsContainer: {
      position: "relative",
      width: "400px",
      height: "500px",
      perspective: "1200px",
    },
    cardBase: {
      width: "100%",
      height: "100%",
      borderRadius: "10px",
      background: "#1F2833",
      color: "#C5C6C7",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "18px",
      fontWeight: "bold",
      position: "absolute",
      textDecoration: "none",
      transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out, box-shadow 0.3s ease-in-out",
      boxShadow: "0 4px 10px rgba(102, 252, 241, 0.3)",
      border: "2px solid transparent",
    },
    resourcesSection: {
      width: "40%",
      background: "#1F2833",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    resourcesHeading: {
      color: "#66FCF1",
      marginBottom: "20px",
    },
  };

  return (
    <div section id="resources" style={styles.body}>
      <div style={styles.heading}>📖 Our Medium Blogs</div>

      <div style={styles.wrapper}>
        {/* Left Carousel */}
        <div style={styles.carouselSection}>
          <div style={styles.navButtons}>
            <button style={styles.navBtn} onClick={moveLeft}>←</button>
            <button style={styles.navBtn} onClick={moveRight}>→</button>
          </div>

          <div style={styles.cardsContainer}>
            {blogs.map((blog, i) => {
              const position = (i - currentIndex + blogs.length) % blogs.length;
              if (position > 2 && position < blogs.length - 2) return null; // hide distant cards

              const scale = 1 - Math.min(position, blogs.length - position) * 0.1;
              const translateX = (position <= 2 ? -70 * position : 70 * (blogs.length - position));
              const zIndex = 5 - Math.min(position, blogs.length - position);
              const opacity = 1 - Math.min(position, blogs.length - position) * 0.2;

              return (
                <a
                  key={blog.id}
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...styles.cardBase,
                    transform: `scale(${scale}) translateX(${translateX}px)`,
                    zIndex,
                    opacity,
                  }}
                >
                  {blog.title}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Resources */}
        <div style={styles.resourcesSection}>
          <h2 style={styles.resourcesHeading}>Resources</h2>
          <p>📘 Guide 1: How to write better blogs</p>
          <p>📘 Guide 2: Content marketing tips</p>
          <p>📘 Guide 3: Best SEO strategies</p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
