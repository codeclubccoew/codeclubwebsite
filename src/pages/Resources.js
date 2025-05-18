import React, { useState, useEffect, useRef } from "react";

const blogs = [
  {
    id: 1,
    title: "AI Agents; Transforming the world",
    link: "https://medium.com/@anushka.jagdale/ai-agents-the-invisible-helpers-transforming-our-world-4cb471a241ea?source=friends_link&sk=1bc68d300a2f96ba05a663598c2b6826",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*mW1L7wTdm4-QRUX_zxOXsw.png",
  },
  {
    id: 2,
    title: "What are AI agents?",
    link: "https://medium.com/@priyalnema009/what-are-ai-agents-really-12d32bfa28d7",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*PbuMjoQ_87AFBo7gBVcXNA.jpeg",
  },
  {
    id: 3,
    title: "Practical Use of Quantum Computing",
    link: "https://medium.com/@arpita.wankhade/practical-industry-landscape-of-quantum-computing-ba882174379e",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*670Z4bPzqDVS0hcQpe3YOg.png",
  },
];

const Resources = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const resourcesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-up-visible");
        } else {
          entry.target.classList.remove("fade-up-visible");
        }
      },
      { threshold: 0.3 }
    );

    const target = resourcesRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  const moveLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length);
  };

  const moveRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
  };

  const styles = {
    body: {
      fontFamily: "Arial, sans-serif",
      background: "#0B0C10",
      margin: 0,
      padding: "20px",
      minHeight: "100vh",
      color: "#C5C6C7",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    heading: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#66FCF1",
      marginBottom: "60px",
      textAlign: "center",
    },
    wrapper: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "30px",
      width: "100%",
      maxWidth: "1200px",
    },
    carouselSection: {
      flex: "1 1 300px",
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
      padding: "0 10px",
    },
    navBtn: {
      background: "#45A29E",
      color: "#0B0C10",
      border: "none",
      padding: "10px 15px",
      fontSize: "22px",
      cursor: "pointer",
      borderRadius: "5px",
      transition: "0.3s",
    },
    cardsContainer: {
      position: "relative",
      width: "400px",
      height: "480px",
      perspective: "1200px",
    },
    cardBase: {
      width: "300px",
      height: "100%",
      borderRadius: "10px",
      background: "#1F2833",
      color: "#C5C6C7",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "15px",
      fontSize: "18px",
      fontWeight: "bold",
      position: "absolute",
      textDecoration: "none",
      transition: "transform 0.5s ease, opacity 0.5s ease, box-shadow 0.3s ease",
      border: "2px solid transparent",
      overflow: "hidden",
      textAlign: "center",
    },
    blogImage: {
      width: "100%",
      height: "280px", // elongated image
      objectFit: "scale-down",
      borderRadius: "8px",
      marginBottom: "10px",
    },
    clickText: {
      fontSize: "18px", // grown text
      color: "#66FCF1",
      textDecoration: "underline",
      marginTop: "6px", // tighter to image
      fontWeight: "600", // more bold
    },
    blogTitle: {
      fontSize: "16px",
      fontWeight: "500",
      margin: "10px 0 5px 0",
      color: "#66FCF1",
    },
    blogLink: {
      color: "#45A29E",
      fontSize: "14px",
      textDecoration: "underline",
      marginTop: "auto",
    },
    resourcesSection: {
      flex: "1 1 300px",
      background: "#1F2833",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0 0 12px rgba(102, 252, 241, 0.15)",
      minWidth: "260px",
      maxWidth: "400px",
      color: "#C5C6C7",
      overflow: "hidden",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    resourcesHeading: {
      color: "#66FCF1",
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "12px",
      textAlign: "left",
    },
    resourcesDescription: {
      fontSize: "15px",
      lineHeight: "1.6",
      marginBottom: "18px",
      textAlign: "left",
    },
    resourceList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    resourceItem: {
      background: "#0B0C10",
      padding: "10px",
      borderRadius: "8px",
      marginBottom: "10px",
      boxShadow: "0 2px 5px rgba(102, 252, 241, 0.2)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    resourceTitle: {
      fontSize: "16px",
      fontWeight: "500",
    },
  };

  return (
    <>
      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 1.6s ease, transform 1.6s ease;
        }
        .fade-up-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .resourceItem:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(102, 252, 241, 0.5);
        }
      `}</style>

      <div style={styles.body}>
        <div style={styles.heading}>Our Medium Blogs</div>

        <div style={styles.wrapper}>
          <div style={styles.carouselSection}>
            <div style={styles.navButtons}>
              <button style={styles.navBtn} onClick={moveLeft}>←</button>
              <button style={styles.navBtn} onClick={moveRight}>→</button>
            </div>

            <div style={styles.cardsContainer}>
              {blogs.map((blog, i) => {
                const position = (i - currentIndex + blogs.length) % blogs.length;
                const isVisible =
                  position === currentIndex ||
                  (position === (currentIndex + 1) % blogs.length) ||
                  (position === (currentIndex - 1 + blogs.length) % blogs.length);

                if (!isVisible) return null;

                const offset = (position - currentIndex + blogs.length) % blogs.length;
                const translateX = offset === 0 ? 0 : offset === 1 ? 140 : -140;
                const scale = offset === 0 ? 1 : 0.92;
                const zIndex = offset === 0 ? 3 : 1;
                const opacity = offset === 0 ? 1 : 0.7;
                const boxShadow =
                  offset === 0
                    ? "0 0 25px #66FCF1, 0 0 45px #66FCF1"
                    : "0 0 8px rgba(102, 252, 241, 0.2)";

                return (
                  <div
                    key={blog.id}
                    style={{
                      ...styles.cardBase,
                      transform: `translateX(${translateX}px) scale(${scale})`,
                      zIndex,
                      opacity,
                      boxShadow,
                    }}
                  >
                    <img src={blog.image} alt="Blog" style={styles.blogImage} />
                    <div style={styles.blogTitle}>{blog.title}</div>
                    <a href={blog.link} target="_blank" rel="noopener noreferrer" style={styles.blogLink}>
                      Click here to know more
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            style={styles.resourcesSection}
            ref={resourcesRef}
            className="fade-up"
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px rgba(102, 252, 241, 0.5)";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 12px rgba(102, 252, 241, 0.15)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <center><h2 style={styles.resourcesHeading}>Resources</h2></center>
            <p style={styles.resourcesDescription}>
              This section provides handpicked guides and references that can help you, whether you're preparing for internships, hackathons or placements. To reach more readers, these tips have you covered!
            </p>
            <ul style={styles.resourceList}>
              <li className="resourceItem" style={styles.resourceItem}>
                <a href="https://drive.google.com/file/d/1at0iDKsLnAHbjUPq6jKIquYZ-Ryp9CAn/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" style={styles.resourceTitle}>
                  Guide 1: The Ultimate FY-SY Roadmap
                </a>
              </li>
              <li className="resourceItem" style={styles.resourceItem}>
                <a href="https://drive.google.com/your-guide2-link" target="_blank" rel="noopener noreferrer" style={styles.resourceTitle}>
                  Guide 2: GitHub Shortcuts( Coming out Soon!)
                </a>
              </li>
              <li className="resourceItem" style={styles.resourceItem}>
                <a href="https://docs.google.com/spreadsheets/d/1SKhnoQcOaeMj9gVEGRe34-THt7qN3vJ3gNLIM20CIMM/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={styles.resourceTitle}>
                  Guide 3: DSA Sheets
                </a>
              </li>
              <li className="resourceItem" style={styles.resourceItem}>
                <a href="https://drive.google.com/your-guide4-link" target="_blank" rel="noopener noreferrer" style={styles.resourceTitle}>
                  Guide 4: Opportunities Sheets
                </a>
              </li>
            </ul>


          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;