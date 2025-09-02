import Head from "next/head";
import TitleSection from "../components/TitleSection";
import styles from "../styles/About.module.css";

const TEAM = [
  { role: "President", name: "Isha Agarwal", bio: "Founder and Chapter President of YMA India, leading our mission to empower young medical professionals.", image: "/ia.png" },
  { role: "Vice President", name: "Advita Mahajan", bio: "Supporting the organization's growth and strategic initiatives.", image: "/am.png" },
  { role: "Director of Outreach", name: "Nishtha Hamne", bio: "Leading community engagement and partnership development.", image: null },
  { role: "Event Coordinator", name: "Yash Mittal", bio: "Organizing impactful events and programs for our community.", image: null },
  { role: "Event Coordinator", name: "Avanish Sule", bio: "Coordinating events and ensuring smooth program execution.", image: null },
  { role: "Event Coordinator", name: "Janhavi Popat", bio: "Managing event logistics and participant engagement.", image: null },
  { role: "Director of Content", name: "Avni Kulkarni", bio: "Creating compelling content and educational materials.", image: null },
  { role: "Social Media", name: "Vidyanshi Mittal", bio: "Managing our social media presence and digital communications.", image: "/vm.png" },
  { role: "Social Media", name: "Arrooh Karnani", bio: "Handling social media strategy and community engagement online.", image: null },
];

export default function TeamPage() {
  return (
    <>
      <TitleSection title="Meet the Team" subtitle="The passionate youth leading YMA India" />
      <div className={styles.container}>
        <Head>
          <title>Our Team | YMA India</title>
          <meta name="description" content="Meet the YMA India team: passionate youth leaders in healthcare." />
        </Head>
        <div className={styles.contentWrapper}>
          <p style={{ textAlign: "center", marginBottom: "2rem", fontSize: "1.1rem", lineHeight: "1.7", color: "var(--text-light)" }}>
            Our team is a group of dedicated, energetic, and visionary young leaders working together to empower the next generation of healthcare professionals in India. 
            Each member brings unique skills and perspectives to drive our mission forward.
          </p>
          <div className={styles.teamGrid}>
            {TEAM.map((member, idx) => (
              <div className={styles.teamCard} key={idx}>
                <div className={styles.teamImageWrapper}>
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className={styles.teamImage}
                      width={120}
                      height={120}
                      style={{ borderRadius: "50%", objectFit: "cover", width: 120, height: 120 }}
                    />
                  ) : (
                    <div 
                      className={styles.teamImage}
                      style={{ 
                        borderRadius: "50%", 
                        width: 120, 
                        height: 120, 
                        background: "var(--background-alt)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2rem",
                        fontWeight: "bold",
                        color: "var(--primary)"
                      }}
                    >
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <div className={styles.teamRole}>{member.role}</div>
                <div className={styles.teamName}>{member.name}</div>
                <div className={styles.teamBio}>{member.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 