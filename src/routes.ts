export const homeRoute = () => '/';

export const projectsRoute = () => `/projects`;

export const blogRoute = () => `/blog`;

export const postRoute = (slug: string) => `${blogRoute()}/${slug}`;
