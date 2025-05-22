import { z } from 'zod';

/* 
{
  description: string;
  featuredImage: string;
  personalInfo: {
    job_title: string;
    experience: string;
    location: string;
    email: string;
    phone: string;
    availability: string;
  };
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
};

*/

const aboutCreate = z.object({
  description: z.string({
    required_error: 'Description is required',
  }),
  featuredImage: z.string({
    required_error: 'Featured image is required',
  }),
  personalInfo: z.object({
    job_title: z.string({
      required_error: 'Job title is required',
    }),
    experience: z.string({
      required_error: 'Experience is required',
    }),
    location: z.string({
      required_error: 'Location is required',
    }),
    email: z.string({
      required_error: 'Email is required',
    }),
    phone: z.string({
      required_error: 'Phone number is required',
    }),
    availability: z.string({
      required_error: 'Availability is required',
    }),
  }),
  features: z.array(
    z.object({
      icon: z.string({
        required_error: 'Icon is required',
      }),
      title: z.string({
        required_error: 'Title is required',
      }),
      description: z.string({
        required_error: 'Description is required',
      }),
    }),
  ),
});

const aboutUpdate = aboutCreate.partial();

// Add more validation if needed
// Example: const aboutDelete = z.object({ id: z.string().uuid() });

export const AboutValidation = {
  aboutCreate,
  aboutUpdate,
};
