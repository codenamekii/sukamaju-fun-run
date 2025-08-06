"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Partner {
  name: string;
  logo: string;
}

export default function PartnerSupportSection() {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    fetch("/partnership.json")
      .then((res) => res.json())
      .then((data) => {
        setPartners(data.partners || []);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="partner-support" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Partner Support Event
          </h2>
          <p className="text-gray-400 text-lg">
            Terima kasih kepada mitra yang telah mendukung acara ini
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-md p-3 w-full flex justify-center items-center max-w-[140px]"
            >
              <Image
                src={`/${partner.logo}`}
                alt={partner.name}
                width={120}
                height={80}
                className="object-contain max-h-[80px] w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}