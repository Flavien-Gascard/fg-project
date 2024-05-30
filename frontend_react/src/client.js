import sanityClient, { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'ue86mk1v',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skCspmldZuGXDpE5wuhNFJlbSIdeG8OrvZQX50rB4TL2Mpj3sNCFGPCtnXOdolP9M1wlbVghR74OTHc8FXc578woEuqNgcbTYbEMFtLo4d8vpi1AZRRiKDYnH0tvoRbrpRNBwY0mrxeaYPNJqhaf9tHGhUQmwVFSoVW4L8LysOGmqDLzgJuO',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
