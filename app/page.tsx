import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={styles.card}>
          <h1>CrabBot</h1>
          <p>
            A simple bot for creating weekly availability schedules for your
            group.
          </p>
        </div>
        <a
          href="https://discord.com/api/oauth2/authorize?client_id=1107959476109193256&permissions=380105018368&scope=bot"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>
            Add to Server <span>-&gt;</span>
          </h4>
        </a>
      </div>

      <div className={styles.footer}>
        <a
          href="https://github.com/soap-less/crabbot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p style={{ textDecoration: "underline" }}>How does it work?</p>
          <p>Made with {"<3"} by @soapful.</p>
        </a>
      </div>

      <div className={styles.logoContainer}>
        <Image
          src="https://cdn.wikimg.net/en/splatoonwiki/images/e/eb/S3_Tableturf_Battle_card_Crab_Tank.png"
          alt="Crab Tank from Splatoon 3"
          width={366}
          height={512}
          priority
          className={styles.logo}
        />
      </div>
    </main>
  );
}
