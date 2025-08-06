"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Partner {
  name: string;
  logo: string;
  website?: string;
}

export function PartnerSupport() {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    fetch("/partnership.json")
      .then((res) => res.json())
      .then((data) => {
        setPartners(data.partners || []);
      })
      .catch((err) => console.error(err));
  }, []);

  if (partners.length === 0) return null;


  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <InfiniteMovingCards
        items={partners.map((p) => (
          <a
            key={p.name}
            href={p.website ?? "#"}
            target={p.website ? "_blank" : undefined}
            rel={p.website ? "noopener noreferrer" : undefined}
            className="mx-4"
          >
            <Image
              src={`/${p.logo}`}
              alt={p.name}
              width={160}
              height={110}
              className="object-contain rounded-md"
            />
          </a>
        ))}
        direction="right"
        speed="slow"
        pauseOnHover
      />
    </motion.div>
  );
}