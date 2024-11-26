import styles from './css/Home.module.css';
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.home_logo}>
        <Image
          src="/images/home_logo.png"
          alt="Home Logo"
          width={438}
          height={93}
        />
      </div>
      <div className={styles.home_title}>
        <Image
          src="/images/home_title.png"
          alt="Home Title"
          width={686}
          height={72}
        />
      </div>
      <div className={styles.home_info}>
        <p className={styles.info}>
        Every city has a social network that supports the vulnerable and unseen. This social network is the backbone of services for people in<br />crisis. Yet, this social network has multiple gaps.<br /><br />City Serve X fills all these gaps.
        </p>
      </div>
      <div className={styles.home_enter_button}>
        <Link href="/pages/problem-video">
            <Image className={styles.enter_button}
              src="/images/home_enter_button.png"
              alt="Home Enter Button"
              width={168}
              height={72}
            />
        </Link>
      </div>
    </div>
  );
}
