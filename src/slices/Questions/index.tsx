'use client';
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.css";
import { useState } from "react";
import PlusIcon from "@/app/components/icons/PlusIcon";

/**
 * Props for `Questions`.
 */
export type QuestionsProps = SliceComponentProps<Content.QuestionsSlice>;

/**
 * Component for "Questions" Slices.
 */
const Questions = ({ slice }: QuestionsProps): JSX.Element => {

  const [isQuestionShow, setIsQuestionShow] = useState({
    status: false,
    key: ''
  });

  const handleClickQuestion = (uid:string) => {

    if(isQuestionShow.key === uid){
      setIsQuestionShow({
        status: false,
        key: ''
      })
    } else {
      setIsQuestionShow({
        status: true,
        key: uid
      })
    }

  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section}
    >
      <h2 className={styles.section_title}>{slice.primary.section_title}</h2>
      <article className={styles.container_questions}>
        {slice.primary.questions.map((question, index) => (

          <div key={index} className={styles.question}>
            <h3 
              className={`${styles.title} ${isQuestionShow.key === index.toLocaleString() ? styles['is-show'] : '' }`} 
              onClick={() => handleClickQuestion(index.toLocaleString())}
            >
              {question.title_question}
              <PlusIcon />
            </h3>
            <div 
              className={`${styles.answer} ${isQuestionShow.key === index.toLocaleString() ? styles['is-show'] : '' }`}
            >
              <PrismicRichText field={question.answer} />
            </div>
          </div>

        ))}
      </article>
    </section>
  );
};

export default Questions;
