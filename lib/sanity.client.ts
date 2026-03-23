import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = '2024-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Product Queries
export async function getProducts() {
  if (!projectId) return [];
  try {
    return await client.fetch(`
      *[_type == "product"] | order(publishedAt desc) {
        _id,
        name,
        slug,
        emoji,
        description,
        fullDescription,
        price,
        category,
        featured,
        inStock,
        image,
        secondaryImage,
        gallery,
        careInstructions,
        publishedAt,
        "videoId": video._ref
      }
    `);
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProduct(slug: string) {
  if (!projectId) return null;
  try {
    return await client.fetch(
      `*[_type == "product" && slug.current == $slug][0] {
        _id,
        name,
        slug,
        emoji,
        description,
        fullDescription,
        price,
        category,
        featured,
        inStock,
        secondaryImage,
        image,
        gallery,
        careInstructions,
        publishedAt,
        "video": video->{
          _id,
          title,
          videoUrl,
          videoFile,
          thumbnail,
          duration
        }
      }`,
      { slug }
    );
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export async function getFeaturedProducts(limit = 9) {
  if (!projectId) return [];
  try {
    return await client.fetch(`
      *[_type == "product" && featured == true] | order(publishedAt desc) [0...${limit}] {
        _id,
        name,
        slug,
        emoji,
        description,
        price,
        category,
        featured,
        inStock,
        image,
        publishedAt
      }
    `);
  } catch (error) {
    console.error('Error fetching featured products:', error);
    return [];
  }
}

// Review Queries
export async function getReviews(limit = 3) {
  if (!projectId) return [];
  try {
    return await client.fetch(`
      *[_type == "review"] | order(publishedAt desc) [0...${limit}] {
        _id,
        name,
        rating,
        comment,
        avatar,
        verified,
        publishedAt,
        "productName": product->name
      }
    `);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
}

export async function getProductReviews(productId: string) {
  if (!projectId) return [];
  try {
    return await client.fetch(`
      *[_type == "review" && product._ref == $productId] | order(publishedAt desc) {
        _id,
        name,
        rating,
        comment,
        avatar,
        verified,
        publishedAt
      }
    `,
      { productId }
    );
  } catch (error) {
    console.error('Error fetching product reviews:', error);
    return [];
  }
}

// Hero Section Query
export async function getHeroSection() {
  if (!projectId) return null;
  try {
    return await client.fetch(`
      *[_type == "heroSection"][0] {
        _id,
        title,
        subtitle,
        description,
        primaryCtaText,
        secondaryCtaText,
        primaryImage,
        secondaryImage,
        backgroundImage,
        "featuredProduct": featuredProduct->{
          _id,
          name,
          slug,
          emoji,
          price,
          image
        }
      }
    `);
  } catch (error) {
    console.error('Error fetching hero section:', error);
    return null;
  }
}

// Video Queries
export async function getVideos(limit = 10) {
  if (!projectId) return [];
  try {
    return await client.fetch(`
      *[_type == "video"] | order(publishedAt desc) [0...${limit}] {
        _id,
        title,
        description,
        videoUrl,
        videoFile,
        thumbnail,
        videoType,
        featured,
        duration,
        publishedAt,
        "productName": relatedProduct->name
      }
    `);
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
}

export async function getFeaturedVideos(limit = 3) {
  if (!projectId) return [];
  try {
    return await client.fetch(`
      *[_type == "video" && featured == true] | order(publishedAt desc) [0...${limit}] {
        _id,
        title,
        videoUrl,
        videoFile,
        thumbnail,
        duration,
        videoType
      }
    `);
  } catch (error) {
    console.error('Error fetching featured videos:', error);
    return [];
  }
}

// Settings Query
export async function getSettings() {
  if (!projectId) return null;
  try {
    return await client.fetch(`
      *[_type == "settings"][0] {
        _id,
        siteName,
        siteDescription,
        logo,
        favicon,
        newsletterHeading,
        newsletterDescription,
        footerText,
        socialLinks
      }
    `);
  } catch (error) {
    console.error('Error fetching settings:', error);
    return null;
  }
}
