"use server";
import { z } from "zod";
import prisma from "./db";
import { ErrorObject } from "./definitions";

const contactSchema = z.object({
  name: z.string().min(2).max(255),
  phone: z.string().min(10).max(10),
  email: z.string().email(),
  message: z.string().min(1).max(1000),
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
  } catch (error) {
    console.error(error);
    return error;
  }
}
