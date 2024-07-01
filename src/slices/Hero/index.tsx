import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.css";


/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  
  
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.sectionBanner}
    >
      <div className={styles.container_banner} >
        <PrismicNextImage field={slice.primary.hero_banner} />
      </div>
      <div className={styles.heroText}>
        <h1 className={styles.title}>{slice.primary.hero_title}</h1>
        <p>{slice.primary.hero_subtitle}</p>
        <p>{slice.primary.hero_description}</p>
      </div>
    </section>
  );
};

export default Hero;
