"use server";
import { z } from "zod";
import prisma from "./db";
import { ErrorObject } from "./definitions";
import { signOut } from "@/auth";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name is required" })
    .max(255, { message: "Name is too long" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be 10 digits" })
    .max(10, { message: "Phone number must be 10 digits" }),
  email: z.string().email(),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(1000, { message: "Message is too long" }),
});

const newsletterSchema = z.object({
  email: z.string().email(),
});

export async function captureLead(
  prevState: ErrorObject,
  data: FormData
): Promise<ErrorObject | any> {
  try {
    // Validate the data
    const validatedData = contactSchema.safeParse(
      Object.fromEntries(data.entries())
    );
    // if data fails validation, return the errors
    if (validatedData.success === false) {
      return validatedData.error.formErrors.fieldErrors;
    }

    // Extract the data
    const formData = validatedData.data;

    // Save the data to the database
    await prisma.contact.create({
      data: formData,
    });
    return { success: true, output: "Form submitted successfully!" };
  } catch (error) {
    console.error(error);
    return { success: false, output: "An error occurred" };
  }
}

export async function subscribeToNewsletter(
  prevState: ErrorObject,
  data: FormData
): Promise<ErrorObject | any> {
  try {
    // Validate the data
    const validatedData = newsletterSchema.safeParse(
      Object.fromEntries(data.entries())
    );
    // if data fails validation, return the errors
    if (validatedData.success === false) {
      return validatedData.error.formErrors.fieldErrors;
    }

    // Extract the data
    const formData = validatedData.data;

    // Save the data to the database
    await prisma.newsletter.create({
      data: formData,
    });
    return { success: true, output: "Subscribed!" };
  } catch (error) {
    console.error(error);
    return { success: false, output: "An error occurred" };
  }
}

// Function to delete a contact from the table when checkbox is clicked
export async function updateTable(formData: FormData) {
  const id = formData.get("id") as string;
  await prisma.contact.update({
    where: {
      id: id,
    },
    data: {
      delete: true,
    },
  });
}

// Function to delete a newsletter subscription from the table when checkbox is clicked
export async function updateNewsletterTable(formData: FormData) {
  const id = formData.get("id") as string;
  await prisma.newsletter.update({
    where: {
      id: id,
    },
    data: {
      delete: true,
    },
  });
}

// Hide the contact from the table
export async function hideContact(formData: FormData) {
  const id = formData.get("id") as string;
  await prisma.contact.update({
    where: {
      id: id,
    },
    data: {
      hide: true,
    },
  });
}

// Deletes all contacts older than 12 months from the database
export async function deleteOldContacts() {
  const currentDate = new Date();
  const twelveMonthsAgo = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 12,
    1
  );
  await prisma.contact.deleteMany({
    where: {
      createdAt: {
        lt: twelveMonthsAgo,
      },
    },
  });
}

// Deletes all newsletter subscriptions older than 12 months from the database
export async function deleteOldSubscriptions() {
  const currentDate = new Date();
  const twelveMonthsAgo = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 12,
    1
  );
  await prisma.newsletter.deleteMany({
    where: {
      createdAt: {
        lt: twelveMonthsAgo,
      },
    },
  });
}

// Sign out the user
export async function signUserOut() {
  await signOut();
}
