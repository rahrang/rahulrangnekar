export const homeRoute = () => '/';

export const blogRoute = () => `/blog`;

export const postRoute = (slug: string) => `${blogRoute()}/${slug}`;
