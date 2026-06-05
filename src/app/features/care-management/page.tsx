import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CtaBanner } from "@/components/landing/cta-banner";
import { FaqSection } from "@/components/shared/faq-section";
import { FeatureBlock } from "@/components/shared/feature-block";
import { FeatureHero } from "@/components/shared/feature-hero";
import { RelatedFeatures } from "@/components/shared/related-features";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Care Management — ShiftCare",
  description:
    "From understanding the unique needs of your clients, to sharing their progress, we make managing their support simpler, more accountable and more stress-free.",
};

const relatedFeatures = [
  {
    title: "Scheduling",
    description:
      "Make it easier to manage your teams and organize shifts with our smart scheduling tools.",
  },
  {
    title: "Caregiver App",
    description:
      "Put the power of shift planning and client management at your team's fingertips.",
  },
  {
    title: "Friends & Family Access",
    description:
      "ShiftCare Connect is a dedicated family portal to share important information with your clients' families & loved ones.",
  },
];

export default function CareManagementPage() {
  return (
    <>
      <Header />
      <main>
        <FeatureHero
          label="Care Management"
          title="Higher standards of care made simple."
          description="From understanding the unique needs of your clients, to sharing their progress, we make managing their support simpler, more accountable and more stress-free."
          cta="Try Care Management for Free →"
          imageLabel="Care Management Hero"
        />

        <FeatureBlock
          label="Client Records Management"
          title="Welcome a new client"
          body="We make it easy to welcome new clients, ensuring a full understanding of their needs, management of their goals and establishing good relationships with their friends and family right from the start."
          bullets={[
            {
              title: "Upload care plans",
              description: "Ensure your teams are focused on the right areas.",
            },
            {
              title: "Goal setting",
              description: "Help your teams track and measure client progress.",
            },
            {
              title: "Family access",
              description:
                "Enable clients' loved ones to play an active role in their care.",
            },
          ]}
          cta="Learn more about Client Records Management →"
          imageLabel="Client Records Management"
          imagePosition="left"
          testimonial={{
            quote:
              "ShiftCare is an amazing communication tool for me as my head office is located 4 hours away. Documentation is a must. Very straightforward to use.",
            author: "Kellie D",
            role: "Support Worker, ADS Care",
          }}
        />

        <FeatureBlock
          label="Care Notes"
          title="Easily track progress"
          body="Your caregivers are there to support clients as they work towards their goals. We make it easy for them to track progress and share it with the right people."
          bullets={[
            {
              title: "Notes on the go",
              description:
                "Easily capture notes on a shift while fresh in the mind.",
            },
            {
              title: "Custom templates",
              description: "You decide what's recorded on care notes.",
            },
            {
              title: "Share progress",
              description:
                "Instantly update teams and families on client progress.",
            },
          ]}
          cta="Learn more about Care Notes →"
          imageLabel="Care Notes"
          imagePosition="right"
          testimonial={{
            quote:
              "ShiftCare's app is really helpful. I can keep my shifts in order and take out my client notes easily. I highly recommend it!",
            author: "Jayne Cain",
            role: "Support Worker, People First Community Care",
          }}
        />

        <FeatureBlock
          label="Messaging"
          title="Stay connected with your teams"
          body="Keep your team in sync with instant, private, and group messaging across desktop and mobile, ensuring all communication stays secure and easily accessible."
          bullets={[
            {
              title: "Real-time communication",
              description:
                "Send and receive messages instantly to keep teams informed.",
            },
            {
              title: "Compliance & security",
              description:
                "All messages are securely stored, ensuring compliance and easy access when needed.",
            },
            {
              title: "Seamless accessibility",
              description:
                "Communicate from anywhere with full mobile and desktop support.",
            },
          ]}
          cta="Learn more about Messaging →"
          imageLabel="Messaging"
          imagePosition="left"
          testimonial={{
            quote:
              "I couldn't be happier! The new messaging feature is phenomenal and will save me $18 p/m per staff member.",
            author: "Robert Godden",
            role: "MD Heartfelt Support",
          }}
        />

        <FeatureBlock
          label="Incident Management"
          title="Streamline incident reporting"
          body="Improve your team's ability to document and manage incidents, ensuring a safer and more compliant environment for everyone."
          bullets={[
            {
              title: "Custom incident templates",
              description:
                "Create or adapt existing templates to capture every detail needed.",
            },
            {
              title: "Immediate logging",
              description:
                "Allow carers to log incidents on the spot, capturing accurate and timely information.",
            },
            {
              title: "Secure storage",
              description:
                "Keep all incident reports securely stored, compliant, and easily accessible for follow-ups and audits.",
            },
          ]}
          cta="Learn more about Incident Management →"
          imageLabel="Incident Management"
          imagePosition="right"
          testimonial={{
            quote:
              "Logging incidents is now quick and hassle-free. Custom templates make it so much easier!",
            author: "Michelle Mothers",
            role: "Admin Staff",
          }}
        />

        <FaqSection
          items={[
            {
              question: "What is a Care Management software?",
              answer:
                "Care management software is a platform that helps healthcare organizations streamline their care management efforts. It is one central location to store all of your clients' information as well as your support workers' details. Important documents such as care plans or mandatory police checks are safely stored on a secure server and accessible from any connected device, at any time. Care management software also allows you to store clients communications and care notes so that you can make sure to share the most relevant information with your staff.",
            },
            {
              question:
                "Why is ShiftCare different than other care management software?",
            },
          ]}
          cta="Sign me up!"
        />

        <RelatedFeatures features={relatedFeatures} />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
