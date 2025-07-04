import Head from "next/head";
import TitleSection from "../components/TitleSection";
import styles from "../styles/About.module.css";

const TEAM = [
  { role: "President", name: "Isha Agarwal", bio: "Bio coming soon.", image: "/ia.png" },
  { role: "Vice President", name: "Riddhi Mazumder", bio: "Bio coming soon.", image: "/rm.png" },
  { role: "Director of Outreach", name: "Ananya Munukutla", bio: "Bio coming soon.", image: "/am.png" },
  { role: "Event Coordinator", name: "Pareena Bomrah", bio: "Bio coming soon.", image: "/pb.png" },
  { role: "Event Coordinator", name: "Shlok Pallod", bio: "Bio coming soon.", image: "/sp.png" },
  { role: "Event Coordinator", name: "Hiya Shyani", bio: "Bio coming soon.", image: "/hs.png" },
  { role: "Director of Content", name: "Shaksham Agarwal", bio: "Bio coming soon.", image: "/sa.png" },
  { role: "Social Media", name: "Vidyanshi Mittal", bio: "Bio coming soon.", image: "/vm.png" },
  { role: "Social Media", name: "Aarshee Dongare", bio: "Bio coming soon.", image: "/ad.png" },
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
          <p style={{ textAlign: "center", marginBottom: "2rem" }}>
            Our team is a group of dedicated, energetic, and visionary young leaders working together to empower the next generation of healthcare professionals in India.
          </p>
          <div className={styles.teamGrid}>
            {TEAM.map((member, idx) => (
              <div className={styles.teamCard} key={idx}>
                <div className={styles.teamImageWrapper}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={styles.teamImage}
                    width={120}
                    height={120}
                    style={{ borderRadius: "50%", objectFit: "cover", width: 120, height: 120 }}
                  />
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