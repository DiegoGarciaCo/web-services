"use server";
import { z } from "zod";
import prisma from "./db";
import { ErrorObject } from "./definitions";

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
