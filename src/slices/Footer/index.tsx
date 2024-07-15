import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.css";

/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>;

/**
 * Component for "Footer" Slices.
 */
const links_footer = [
  {
    label: 'FAQ',
    link: { link_type: 'Web', url: '/', target: '' },
    ubication: 'home'
  },
  {
    label: 'Help Center',
    link: { link_type: 'Web', url: '/help-center', target: '' },
    ubication: 'home'
  },
  {
    label: 'Account',
    link: { link_type: 'Web', url: '/account', target: '' },
    ubication: 'home'
  },
  {
    label: 'Media Center',
    link: { link_type: 'Web', url: '/media-center', target: '' },
    ubication: 'home'
  },
  {
    label: 'Investor Relations',
    link: { link_type: 'Web', url: '/investor-relations', target: '' },
    ubication: 'home'
  },
  {
    label: 'Jobs',
    link: { link_type: 'Web', url: '/jobs', target: '' },
    ubication: 'home'
  },
  {
    label: 'Redeem Gift Cards',
    link: { link_type: 'Web', url: '/redeem-gift-cards', target: '' },
    ubication: 'home'
  },
  {
    label: 'Buy Gift Cards',
    link: { link_type: 'Web', url: '/buy-gift-cards', target: '' },
    ubication: 'home'
  },
  {
    label: 'Ways to Watch',
    link: { link_type: 'Web', url: '/ways-to-watch', target: '' },
    ubication: 'home'
  },
  {
    label: 'Terms of Use',
    link: { link_type: 'Web', url: '/terms-of-use', target: '' },
    ubication: 'home'
  },
  {
    label: 'Privacy',
    link: { link_type: 'Web', url: '/privacy', target: '' },
    ubication: 'home'
  },
  {
    label: 'Cookie Preferences',
    link: { link_type: 'Web', url: '/cookie-preferences', target: '' },
    ubication: 'home'
  },
  {
    label: 'Corporate Information',
    link: { link_type: 'Web', url: '/corporate-information', target: '' },
    ubication: 'home'
  },
  {
    label: 'Contact Us',
    link: { link_type: 'Web', url: '/contact-us', target: '' },
    ubication: 'home'
  },
  {
    label: 'Speed Test',
    link: { link_type: 'Web', url: '/speed-test', target: '' },
    ubication: 'home'
  },
  {
    label: 'Legal Notices',
    link: { link_type: 'Web', url: '/legal-notices', target: '' },
    ubication: 'home'
  },
  {
    label: 'Only on Netflix',
    link: { link_type: 'Web', url: '/only-on-netflix', target: '' },
    ubication: 'home'
  }
];
const Footer = ({ slice }: FooterProps): JSX.Element => {

  return (
    <footer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section}
    >
      <div className={styles.container}>
        <p>{slice.primary.title_footer}</p>
        <ul className={styles.linksFooter}>
          {links_footer.map(({ label, link }, index) => (
            <li key={index} className={styles.link}>
              <a href={link.url}>{label}</a>
            </li>
          ))}
        </ul>
        <div className={styles.footerLetter}>
          <p>Netflix Colombia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
