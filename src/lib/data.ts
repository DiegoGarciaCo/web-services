"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Fetches the data for the dashboard
export async function getDashboardData() {
  const contactsThisMonth = await prisma.contact.count({
    where: {
      createdAt: {
        gte: new Date(new Date().setDate(1)), // First day of the current month
      },
    },
  });

  const contactsLastMonth = await prisma.contact.count({
    where: {
      createdAt: {
        gte: new Date(new Date().setMonth(new Date().getMonth() - 1, 1)), // First day of the last month
        lt: new Date(new Date().setDate(1)), // First day of the current month
      },
    },
  });

  const subscriptionsThisMonth = await prisma.newsletter.count({
    where: {
      createdAt: {
        gte: new Date(new Date().setDate(1)), // First day of the current month
      },
    },
  });

  const subscriptionsLastMonth = await prisma.newsletter.count({
    where: {
      createdAt: {
        gte: new Date(new Date().setMonth(new Date().getMonth() - 1, 1)), // First day of the last month
        lt: new Date(new Date().setDate(1)), // First day of the current month
      },
    },
  });

  return {
    contactsThisMonth,
    contactsLastMonth,
    subscriptionsThisMonth,
    subscriptionsLastMonth,
  };
}

// Fetches the data for the chart
export async function getChartData() {
  const currentDate = new Date();
  const results = [];

  for (let i = 0; i < 12; i++) {
    const startDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - i,
      1
    );
    const endDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - i + 1,
      1
    );

    const contactsCount = await prisma.contact.count({
      where: {
        createdAt: {
          gte: startDate,
          lt: endDate,
        },
      },
    });

    const subscriptionsCount = await prisma.newsletter.count({
      where: {
        createdAt: {
          gte: startDate,
          lt: endDate,
        },
      },
    });

    results.push({
      month: startDate.toLocaleString("default", { month: "long" }),
      year: startDate.getFullYear(),
      contactsCount,
      subscriptionsCount,
    });
  }

  return results;
}

// Fetches all Contacts
export async function getContacts() {
  return await prisma.contact.findMany();
}

// Fetches all Subscriptions
export async function getSubscriptions() {
  return await prisma.newsletter.findMany();
}

// Fetches latest week of Contacts
export async function getLatestContacts() {
  return await prisma.contact.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 7,
  });
}
