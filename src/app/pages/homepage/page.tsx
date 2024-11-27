import styles from '../../css/HomePage.module.css';
import NavBar from '../../components/NavBar';
import Image from "next/image";
import Link from 'next/link';
import Landscape from '../../components/Landscape';

export default function HomePage() {
  const learnCards = [
    { image: "/images/Care.png", title: "Care", description: "We care for people in crisis.", button: "/images/Care_button.png" },
    { image: "/images/Coordinate.png", title: "Coordinate", description: "We coordinate vital community resources", button: "/images/Coordinate_button.png" },
    { image: "/images/Care.png", title: "Care", description: "We care for people in crisis.", button: "/images/Care_button.png" },
  ];
  const planCards = [
    { id: 1, title: "The Starting point 222-CARE.", description: "CityServe X makes entry into the social sphere simple and clear with 222-CARE.", number: "01" },
    { id: 2, title: "Humanize pain and hear their story.", description: "We meet in person to provide a human touch. As we hear their story, we discern why they are coming to us and what their need(s) are.", number: "02" },
    { id: 3, title: "Formulate a unique Care Plan.", description: "We map a specific course through a city's social maze that caters to a participant's narrative. The Care Plan dictates the stops and services needed.", number: "03" },
    { id: 4, title: "Assign a Care Coordinator to walk beside them until they can walk on their own.", description: "The Core Coordinator works with the participant to complete necessary paperwork, establish budgets, receive mental and health care, and if possible, reconnect with families. This may take 30 days. It may take 6 months.", number: "04" },
  ];
    return (
      <div>
        <div className={styles.container}>
          <NavBar />
          <div className={styles.cityWindow}>
          <Landscape />
          </div>
          <div className={styles.contents}>
            <h2 className={styles.header2}>
            LEARN HOW WE CONNECT THE DOTS
            </h2>
          </div>
          <div className={styles.cardContainer}>
            {learnCards.map((card, index) => (
              <div key={index} className={styles.card}>
                <Image src={card.image} alt={card.title} width={286} height={300}/>
                <p className={styles.cardDescription}>{card.description}</p>
                <Link href="/">
                  <Image src={card.button} alt={card.title} className={styles.cardButton} width={168} height={72}/>
                </Link>
              </div>
            ))}
          </div>
          <div className={styles.infoDescContainer}>
            <div className={styles.infoItem}>
              <h2 className={styles.header2}>
              Helping those in crisis is our passion!
              </h2>
              <p className={styles.info}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className={styles.infoItem}>
              <Image
                src="/images/placeholder.png"
                alt="Placeholder"
                width={500}
                height={472}
              />
            </div>
            <div className={styles.infoItem}>
            <h2 className={styles.header2}>
              X in a Box
              </h2>
              <p className={styles.info}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Image
              className={styles.info_button}
                src="/images/info_button.png"
                alt="Info"
                width={168}
                height={72}
              />
            </div>
            <div className={styles.infoItem}>
            <h2 className={styles.header2}>
            Our Process
              </h2>
              <p className={styles.info}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Image
              className={styles.info_button}
                src="/images/info_button.png"
                alt="Info"
                width={168}
                height={72}
              />
            </div>
          </div>
          <div className={styles.imgSection}>
            <Image
                src="/images/placeholder.png"
                alt="Placeholder"
                width={500}
                height={472}
            />
          </div>
          <div className={styles.infoDescContainer}>
              <div className={styles.gridContainer}>
                {planCards.map((card) => (
                  <div key={card.id} className={styles.card2}>
                    <div className={styles.text}>
                        <h3 className={styles.title}>{card.title}</h3>
                        <p className={styles.description}>{card.description}</p>
                      </div>
                      <div className={styles.number}><h2 className={styles.header2}>{card.number}</h2></div>
                  </div>
                ))}
              </div>
            <div className={styles.infoItem}>
            <h2 className={styles.header2}>
            4-step plan to success
              </h2>
              <p className={styles.info}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className={styles.imgSection}>
            <Image
                src="/images/placeholder.png"
                alt="Placeholder"
                width={500}
                height={472}
            />
          </div>
          <div className={styles.imgSection}>
          <h2 className={styles.header2}>
          Our Formula!
              </h2>
              <p className={styles.info}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Image
              className={styles.info_button}
                src="/images/info_button.png"
                alt="Info"
                width={168}
                height={72}
              />
          </div>
        </div>
        <div className={styles.footer}>
        </div>
      </div>
    );
  }