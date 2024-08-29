"use server";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const contactSchema = z.object({
  name: z.string().min(2).max(255),
  phone: z.string().min(10).max(10),
  email: z.string().email(),
  message: z.string().min(1).max(1000),
});

export async function captureLead(data: any) {
  try {
    // Validate the data
    const validatedData = contactSchema.parse(data);

    // Save the data to the database
    const newContact = await prisma.contact.create({
      data: validatedData,
    });

    return newContact;
  } catch (error) {
    console.error(error);
    return error;
  }
}
