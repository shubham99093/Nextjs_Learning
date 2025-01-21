import Link from "next/link";
import styles from "./projectsList.module.css";

export default function About() {
  return (
    <main>
      <h1 className="text-3xl font-bold">Project List</h1>

      <ul className={styles.ul}>
        <li>
          <Link href="/project/jobit">jobIt</Link>
        </li>
        <li>
          <Link href="/project/carrent">Car Rent</Link>
        </li>
        <li>
          <Link href="/project/hipnode">hipnode</Link>
        </li>
      </ul>
    </main>
  );
}
