import styles from "./page.module.css";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { createClient } from "@/prismicio";

export default async function Home() {

  const client = createClient();
  const page = await client.getByUID('homepage', 'home', {
    fetchLinks:[
      "question.title_question",
      "question.answer"
    ]
  });

  return (
    <main className={styles.main}>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}