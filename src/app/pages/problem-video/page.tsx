import styles from '../../css/Problem-Video.module.css';
import Image from "next/image";
import Link from 'next/link';

export default function ProblemVideo() {
    return (
      <div className={styles.container}>

      {/* Logo on the top left */}
      <div className={styles.logo}>
        <Image
          src="/images/home_logo.png"
          alt="Logo"
          width={187}
          height={40}
        />
      </div>

      <div className={styles.center_video}>
        <video className={styles.video} controls>
          <source src="/problem_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Skip button on the bottom right */}
      <div className={styles.skipButton}>
        <Link href="/pages/homepage">
          <Image className={styles.skipButton}
              src="/images/skip_button.png"
              alt="Skip Button"
              width={168}
              height={72}
            />
        </Link>
      </div>
    </div>
    );
  }