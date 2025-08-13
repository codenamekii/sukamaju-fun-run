"use client";

import { Navigation } from "@/components/sections/navigation";
import PartnerSupport from "@/components/sections/PartnerSupport";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/ui/countdown-timer";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import SplashScreen from "@/components/ui/splashscreen";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
import {
  Calendar,
  ChevronRight,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Trophy,
  Users
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";


interface Sponsor {
  name: string;
  logo: string;
  website?: string;
}

export default function SponsorshipSection() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);

  useEffect(() => {
    fetch("/sponsorship.json")
      .then((res) => res.json())
      .then((data) => {
        setSponsors(data.sponsors || []);
      })
      .catch((err) => console.error(err));
  }, []);

  if (sponsors.length === 0) return null;

  const sponsorNodes = sponsors.map((s) => (
    <a
      key={s.name}
      href={s.website ?? "#"}
      target={s.website ? "_blank" : undefined}
      rel={s.website ? "noopener noreferrer" : undefined}
      className="mx-6 block"
      aria-label={s.name}
    >
      <Image
        src={s.logo}
        alt={s.name}
        width={300}
        height={160}
        className="h-48 w-auto object-contain opacity-90 rounded-md hover:opacity-100 transition"
        unoptimized
      />
    </a>
  ));

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <SplashScreen/>
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        {/* Logo kiri atas */}
        <div className="absolute top-4 left-4 z-50">
          <Image
            src="/logo.png"
            alt="Sukamaju Run Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
        </div>

        {/* Navigation (burger menu kanan atas) */}
        <Navigation />
        <div className="container mx-auto px-4 pt-24 transition-all duration-300 text-center">
          <div className="relative z-10 text-center px-4 py-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-7xl font-bold text-white mb-4"
            >
              SUKAMAJU RUN 2025
            </motion.h1>

            <TextGenerateEffect
              words="Melangkah Bersama, Merangkul Perbedaan"
              className="text-xl md:text-2xl text-gray-300 mb-8"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex gap-4 justify-center"
            >
              <Button
                variant="glow"
                size="lg"
                onClick={() => {
                  const section = document.getElementById("registration");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Daftar <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white/10"
              >
                Pelajari Selengkapnya
              </Button>
            </motion.div>

            {/* Countdown Timer */}
            <CountdownTimer targetDate="2025-09-28T06:00:00" />

            {/* Informasi Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            >
              {[
                { icon: Calendar, label: "Minggu, 28 September", value: "2025" },
                { icon: MapPin, label: "Lapangan Subiantoro", value: "Sukamaju" },
                { icon: Users, label: "1000+", value: "Runners" },
                { icon: Trophy, label: "Total Prize", value: "21 jt" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  className="text-center"
                >
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <p className="text-gray-400 text-sm">{item.label}</p>
                  <p className="text-white font-semibold">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 relative bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Jadwal Kegiatan
            </h2>
            <p className="text-white text-lg">
              Catat di Kalender kalian ya!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 text-white gap-14 max-w-6xl mx-auto">
            {[
              {
                date: "7 - 20 Agustus 2025",
                title: "Pendaftaran dibuka",
                time: "7 - 20 Agustus 2025",
                description: "Daftarkan dirimu segera!!!",
                color: "from-blue-600 to-cyan-600",
                image: "registrasi.png",
              },
              {
                date: "Coming Soon",
                title: "Pengambilan Racepack",
                time: "Coming Soon",
                description: "Ambil Perlengkapan Kalian",
                color: "from-purple-600 to-pink-600",
                image: "racepack.png",
              },
              {
                date: "28 Sept 2025",
                title: "Race Day",
                time: "06:00 WITA",
                description: "Sekarang Saatnya, Ayo Berlari Bersama!",
                color: "from-orange-600 to-red-600",
                image: "race.png",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CardContainer className="inter-var cursor-pointer">
                  <CardBody className="relative group/card bg-black border border-white/20 rounded-xl p-6 w-auto sm:w-[22rem] h-auto hover:shadow-emerald-500/20 hover:shadow-2xl">
                    <CardItem translateZ="100">
                      <Image
                        src={`/${item.image}`}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="w-full h-40 object-cover rounded-2xl mb-4"
                      />
                    </CardItem>

                    <CardItem
                      translateZ="60"
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-sm`}
                    >
                      <Clock className="w-4 h-4" />
                      {item.date}
                    </CardItem>

                    <CardItem
                      as="h3"
                      translateZ="80"
                      className="text-2xl font-bold text-white mt-4"
                    >
                      {item.title}
                    </CardItem>

                    <CardItem
                      translateZ="60"
                      className="text-white text-sm mt-2"
                    >
                      {item.time}
                    </CardItem>

                    <CardItem
                      translateZ="50"
                      className="text-white mt-4"
                    >
                      {item.description}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Route Section */}
      <section id="route" className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Rute Sukamaju Run</h2>
            <p className="text-gray-400 text-lg">Pilih Tantanganmu!</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                category: "5K Umum dan Pelajar",
                distance: "5 KM",
                elevation: "50m",
                difficulty: "Beginner",
                color: "from-green-400 to-blue-500",
                features: ["Perfect for beginners", "Family friendly", "Scenic city route", "Water stations every 2km"],
              },
              {
                category: "10K Challenge",
                distance: "10 KM",
                elevation: "120m",
                difficulty: "Intermediate",
                color: "from-purple-400 to-pink-500",
                features: ["Moderate challenge", "Mixed terrain", "City and park route", "5 water stations"],
              },
            ].map((route, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-gray-900 rounded-2xl p-8 h-full border border-gray-800">
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${route.color} text-white font-semibold mb-4`}>
                    {route.category}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{route.distance}</h3>
                  <div className="flex items-center gap-4 text-gray-400 mb-6">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {route.elevation} elevation
                    </span>
                    <span className="text-sm">{route.difficulty}</span>
                  </div>
                  <ul className="space-y-3">
                    {route.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <ChevronRight className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-6 border-white/20 text-white hover:bg-white/10">
                    Coming Soon!
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jersey & Medal Section */}
      <section id="jersey-medal" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Jersey & Medali</h2>
            <p className="text-gray-400 text-lg">Merchendise Eksklusif untuk semua peserta</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-4">Official Race Jersey</h3>
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-6 overflow-hidden">
                  <Image
                    src="/merch/Jersey.png"
                    alt="Official Race Jersey"
                    width={400}
                    height={400}
                    className="object-cover hover:scale-110 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Moisture-wicking technology</li>
                  <li>✓ Breathable mesh panels</li>
                  <li>✓ Reflective elements for safety</li>
                  <li>✓ Limited edition design</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-4">Finisher Medal</h3>
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-6 overflow-hidden">
                  <Image
                    src="/merch/Medal.png"
                    alt="Finisher Medal"
                    width={400}
                    height={400}
                    className="object-cover hover:scale-110 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Custom engraved design</li>
                  <li>✓ Premium ribbon</li>
                  <li>✓ Unique serial number</li>
                  <li>✓ Collector&apos;s item quality</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Registrasi</h2>
            <p className="text-gray-400 text-lg">Amankan Slotmu Sekarang Juga</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  category: "5K Umum dan Pelajar",
                  NormalPrize: "Rp 180.000",
                  regular: "Rp 200.000",
                  slot: "TERSEDIA",
                  benefit: ["Goodie Bag", "Jersey", "Medal", "e-Certificate", "Refreshment"],
                  link: "https://forms.gle/4jryXNeH2J2d9jV69", // LINK JOTFORM 5K
                },
                {
                  category: "10K Challenge",
                  NormalPrize: "Rp 230.000",
                  regular: "Rp 250.000",
                  slot: "TERSEDIA",
                  benefit: ["Goodie Bag", "Jersey", "Medal", "e-Certificate", "Refreshment++"],
                  link: "https://forms.gle/coQX7eLUdVRKxoJq5", // LINK JOTFORM 10K (ganti sesuai link kamu)
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 h-full">
                    <h3 className="text-xl font-bold text-white mb-4">{item.category}</h3>

                    <div className="mb-4">
                      <p className="text-gray-400 text-sm">Harga Normal</p>
                      <p className="text-2xl font-bold text-green-400">{item.NormalPrize}</p>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-400 text-sm">Regular Price</p>
                      <p className="text-xl text-gray-300 line-through">{item.regular}</p>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-400 text-sm">Slot Available</p>
                      <p className="text-xl font-bold text-green-300">{item.slot}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-gray-400 text-sm font-semibold">Includes:</p>
                      {item.benefit.map((benefit, idx) => (
                        <p key={idx} className="text-gray-300 text-sm">✓ {benefit}</p>
                      ))}
                    </div>

                    <Button
                      variant="glow"
                      className="w-full mt-6"
                      onClick={() => window.open(item.link, "_blank")}
                    >
                      Daftar
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Registrasi Komunitas</h3>
              <p className="text-white/90 mb-6">Untuk Registrasi Komunitas Silahkan Hubungi Panitia Penyelenggara</p>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100"
                onClick={() =>
                  window.open("https://api.whatsapp.com/send/?phone=6285890031215&text&type=phone_number&app_absent=0", "_blank")
                }
              >
                Registrasi Komunitas
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Support Event Section */}
      <PartnerSupport />

      {/* Sponsorship Section */}
      <section id="sponsorship" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sponsors
            </h2>
            <p className="text-gray-400 text-lg">
              Apresiasi dan Terimakasih Kepada Sponsor Kami
            </p>
          </motion.div>

          {/* Infinite moving cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative space-y-10"
          >
            <InfiniteMovingCards
              items={sponsorNodes}
              direction="left"
              speed="slow"
              pauseOnHover
            />
            {/* Baris ke-2 kalau sponsor < 6 */}
            {sponsors.length < 6 && (
              <InfiniteMovingCards
                items={sponsorNodes}
                direction="right"
                speed="slow"
                pauseOnHover
              />
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions (FAQ)</h2>
            <p className="text-gray-400 text-lg">Informasi Umum Seputar Sukamaju Run 2025</p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Hubungi Kami</h2>
            <p className="text-gray-400 text-lg">Lebih dekat dengan kami</p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Kami Mendengarkanmu</h3>
                <p className="text-gray-400 mb-6">
                  Ada pertanyaan seputar Sukamaju Run 2025? Tim kami siap membantu Anda dengan pendaftaran, detail acara, dan pertanyaan lainnya.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">sukamajurun2025@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">+62 858-9003-1215</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">WhatsApp</p>
                    <p className="text-white">+62 858-9003-1215</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-gray-400 mb-4">Follow us on social media</p>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/sukamajurun2025/" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a href="https://www.facebook.com/sukamajurun2025/" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a href="" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors" aria-label="TikTok">
                    {/* TikTok SVG icon */}
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.6 8.1a5.6 5.6 0 0 1-3.6-1.2V15a6.6 6.6 0 1 1-6.6-6.6c.2 0 .4 0 .6.1v2.2a4.4 4.4 0 1 0 4.4 4.4V2.4h2.2a3.4 3.4 0 0 0 3.4 3.4v2.3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p
              className="text-gray-400 text-sm">© 2025 Sukamaju Run 2025.
              <button
                className="hover:text-white text-sm transition-colors"
                onClick={() =>
                  window.open("https://kiiiii.netlify.app/", "_blank")
                } >  by Taufiqurrahman</button> with 😎</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sponsorship</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+6285890031215"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition"
        aria-label="Chat via WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.01 2.004c-5.52 0-10 4.48-10 10 0 1.77.47 3.44 1.36 4.95L2 22l5.21-1.37a9.937 9.937 0 004.8 1.21h.01c5.52 0 10-4.48 10-10s-4.49-9.999-10.01-9.999zm0 18.12a8.06 8.06 0 01-4.11-1.12l-.3-.18-3.09.82.83-3.01-.2-.31a7.963 7.963 0 01-1.23-4.29c0-4.41 3.59-8 8-8 2.14 0 4.15.83 5.65 2.34s2.34 3.52 2.34 5.65c0 4.42-3.59 8-8 8.01zm4.41-5.89c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12s-.62.78-.76.94c-.14.16-.28.18-.52.06a6.45 6.45 0 01-1.9-1.17 7.09 7.09 0 01-1.32-1.65c-.14-.24-.01-.37.1-.49.1-.1.24-.26.36-.39.12-.13.16-.22.24-.37.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.79-.2-.48-.4-.41-.54-.42l-.46-.01c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32 1 .4c.14.92.95 1.81 1.04 1.93.1.12 1.86 2.83 4.51 3.96.63.27 1.12.43 1.51.55.64.2 1.22.17 1.68.1.51-.08 1.57-.64 1.79-1.26.22-.62.22-1.14.16-1.26-.06-.12-.22-.18-.46-.3z" />
        </svg>
      </a>
    </main>
  );
}
