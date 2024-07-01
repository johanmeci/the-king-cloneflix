import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.css";

/**
 * Props for `ContentSection`.
 */
export type ContentSectionProps =
  SliceComponentProps<Content.ContentSectionSlice>;

/**
 * Component for "ContentSection" Slices.
 */
const ContentSection = ({ slice }: ContentSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section}
    >
      <header>
        <h2 className={styles.title}>{slice.primary.section_title}</h2>
        <p className={styles.subtitle}>{slice.primary.section_subtitle}</p>
      </header>
      <figure>
        <PrismicNextImage field={slice.primary.section_image} />
      </figure>
    </section>
  );
};

export default ContentSection;