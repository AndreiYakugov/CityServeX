import SubPage from "../../components/subPage";
import styles from "../../css/subPage.module.css";
import Image from "next/image";

export default function XinBox() {
  return (
    <SubPage>
        <h2 className={styles.header2}>
            CITYSERVE X IN A BOX
        </h2>
        <p className={styles.title}>
        We put the
        <span className={styles.spanTitle}>
        &nbsp;Human&nbsp;
        </span>
        in human services
        </p>
        <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className={styles.detailImage}>
            <Image
                    src="/images/placeholder.png"
                    alt="Placeholder"
                    width={822}
                    height={776}
            />
        </div>
    </SubPage>
  );
}
