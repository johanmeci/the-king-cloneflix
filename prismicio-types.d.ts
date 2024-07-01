// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice = HeroSlice | ContentSectionSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Hero Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.hero_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hero_title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

export type AllDocumentTypes = HomepageDocument;

/**
 * Primary content in *ContentSection → Section Text-Image → Primary*
 */
export interface ContentSectionSliceDefaultPrimary {
  /**
   * Section Title field in *ContentSection → Section Text-Image → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_section.default.primary.section_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_title: prismic.KeyTextField;

  /**
   * Section Subtitle field in *ContentSection → Section Text-Image → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_section.default.primary.section_subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_subtitle: prismic.KeyTextField;

  /**
   * Section Image field in *ContentSection → Section Text-Image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_section.default.primary.section_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  section_image: prismic.ImageField<never>;
}

/**
 * Section Text-Image variation for ContentSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContentSectionSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *ContentSection → Section Image-Text → Primary*
 */
export interface ContentSectionSliceSectionImageTextPrimary {
  /**
   * Section Title field in *ContentSection → Section Image-Text → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_section.sectionImageText.primary.section_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_title: prismic.KeyTextField;

  /**
   * Section Subtitle field in *ContentSection → Section Image-Text → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_section.sectionImageText.primary.section_subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_subtitle: prismic.KeyTextField;

  /**
   * Section Image field in *ContentSection → Section Image-Text → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_section.sectionImageText.primary.section_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  section_image: prismic.ImageField<never>;
}

/**
 * Section Image-Text variation for ContentSection Slice
 *
 * - **API ID**: `sectionImageText`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentSectionSliceSectionImageText = prismic.SharedSliceVariation<
  "sectionImageText",
  Simplify<ContentSectionSliceSectionImageTextPrimary>,
  never
>;

/**
 * Slice variation for *ContentSection*
 */
type ContentSectionSliceVariation =
  | ContentSectionSliceDefault
  | ContentSectionSliceSectionImageText;

/**
 * ContentSection Shared Slice
 *
 * - **API ID**: `content_section`
 * - **Description**: ContentSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentSectionSlice = prismic.SharedSlice<
  "content_section",
  ContentSectionSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Hero Title field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.hero_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hero_title: prismic.KeyTextField;

  /**
   * Hero Subtitle field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.hero_subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hero_subtitle: prismic.KeyTextField;

  /**
   * Hero Description field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.hero_description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hero_description: prismic.KeyTextField;

  /**
   * Hero Banner field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.hero_banner
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_banner: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      AllDocumentTypes,
      ContentSectionSlice,
      ContentSectionSliceDefaultPrimary,
      ContentSectionSliceSectionImageTextPrimary,
      ContentSectionSliceVariation,
      ContentSectionSliceDefault,
      ContentSectionSliceSectionImageText,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
    };
  }
}
