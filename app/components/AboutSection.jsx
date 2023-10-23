"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React Development</li>
        <li>Web Application Security</li>
        <li>Network Security</li>
        <li>Vulnerability & Threat Analysis</li>
        <li>Python Scripting/Automation</li>
        <li>SQL</li>
        <li>Operating Systems</li>
        <li>Active Directory</li>
        <li>Splunk</li>
        <li>TCPDump/Wireshark</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>WGU Student</li>
        <li>BS, Cybersecurity & Information Assurance</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Responsive Web Design, FreeCodeCamp</li>
        <li>The Complete 2021 Web Development Bootcamp, The App Brewery</li>
        <li>Google IT Support Professional</li>
        <li>Google Cybersecurity Professional</li>
        <li>Comptia Security+ (in progress)</li>
        <li>PJPT, PNPT, OSCP (in progress)</li>
      </ul>
    )
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-[#ADB7BE]">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-white text-4xl font-bold my-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Greetings, I am a dedicated cybersecurity student eager to make my
            mark in this dynamic field. My background encompasses full-stack
            development, and I've recently earned two Google certificates in
            Cybersecurity and IT Support. Currently, I'm on the path to attain
            CompTIA's Security+ certification, concurrently working towards a
            Bachelor's degree in Cybersecurity and Information Assurance at WGU.
            I'm driven by an ambitious vision, which includes mastering TCM
            Security's PJPT and PNPT, as well as obtaining the prestigious OSCP
            certification. My primary focus lies in penetration testing, yet I
            remain open to cybersecurity analyst roles, unwavering in my mission
            to fortify the digital landscape. Beyond my professional endeavors,
            I find respite in the world of photography and the exploration of
            the great outdoors.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
