import Link from "next/link";
import styles from "./page.module.css";
import { getVideos } from "./utilities/firebase/functions";
import Image from "next/image";

export default async function Home() {
  const videos = await getVideos();

  return (
    <main>
      {
        videos.map((video) => (
          <Link href={`/watch?${video.filename}`} key={video.id}>
              <Image width={120} height={80}
                  src="/thumbnail.png" alt="Video" className={styles.thumbnail}/>
          </Link>
        ))
      }
    </main>
  );
}

export const revalidate = 30;
