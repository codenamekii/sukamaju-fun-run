"use client";

import { Navigation } from "@/components/sections/navigation";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import { Meteors } from "@/components/ui/meteor";
import { Spotlight } from "@/components/ui/spotlight";
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
  Twitter,
  Users
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";


type SponsorItem = {
  name: string;
  logo: string;
  website: string;
};

type SponsorData = {
  platinum?: SponsorItem[];
  gold?: SponsorItem[];
  silver?: SponsorItem[];
};

export default function Home() {
  const [sponsors, setSponsors] = useState<SponsorData | null>(null);

  useEffect(() => {
    fetch('/sponsorship.json')
      .then(res => res.json())
      .then(data => setSponsors(data.sponsors))
      .catch(err => console.error('Error loading sponsors:', err));
  }, []);
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-7xl font-bold text-white mb-4"
          >
            FUN RUN 2024
          </motion.h1>
          <TextGenerateEffect
            words="Join the Ultimate Running Experience of the Year"
            className="text-xl md:text-2xl text-gray-300 mb-8"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex gap-4 justify-center"
          >
            <Button variant="glow" size="lg">
              Register Now <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { icon: Calendar, label: "15 December", value: "2024" },
              { icon: MapPin, label: "City Park", value: "Jakarta" },
              { icon: Users, label: "5000+", value: "Runners" },
              { icon: Trophy, label: "Total Prize", value: "100M" },
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
        <Meteors number={20} />
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Event Schedule</h2>
            <p className="text-gray-400 text-lg">Mark your calendar for these important dates</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                date: "1 Nov 2024",
                title: "Registration Opens",
                time: "00:00 WIB",
                description: "Early bird registration with special discount",
                color: "from-blue-600 to-cyan-600",
              },
              {
                date: "1 Dec 2024",
                title: "Registration Closes",
                time: "23:59 WIB",
                description: "Last chance to secure your spot",
                color: "from-purple-600 to-pink-600",
              },
              {
                date: "15 Dec 2024",
                title: "Race Day",
                time: "06:00 WIB",
                description: "The big day! Get ready to run",
                color: "from-orange-600 to-red-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-sm`}>
                        <Clock className="w-4 h-4" />
                        {item.date}
                      </div>
                    </CardItem>
                    <CardItem
                      as="h3"
                      translateZ="60"
                      className="text-2xl font-bold text-neutral-800 dark:text-white mt-4"
                    >
                      {item.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                    >
                      {item.time}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-600 mt-4 dark:text-neutral-400"
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Race Routes</h2>
            <p className="text-gray-400 text-lg">Choose your challenge</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                category: "5K Fun Run",
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
                    View Route Map
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Jersey & Medal Design</h2>
            <p className="text-gray-400 text-lg">Exclusive merchandise for all participants</p>
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
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-40 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mx-auto mb-4"></div>
                    <p className="text-gray-400">Premium Dri-Fit Material</p>
                  </div>
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
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Trophy className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-gray-400">Premium Metal Finish</p>
                  </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Registration</h2>
            <p className="text-gray-400 text-lg">Secure your spot today!</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  category: "5K Fun Run",
                  earlyBird: "Rp 150.000",
                  regular: "Rp 200.000",
                  includes: ["Race kit", "Jersey", "Medal", "Certificate"],
                },
                {
                  category: "10K Challenge",
                  earlyBird: "Rp 200.000",
                  regular: "Rp 250.000",
                  includes: ["Race kit", "Jersey", "Medal", "Certificate", "Timing chip"],
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
                      <p className="text-gray-400 text-sm">Early Bird Price</p>
                      <p className="text-2xl font-bold text-green-400">{item.earlyBird}</p>
                    </div>
                    <div className="mb-6">
                      <p className="text-gray-400 text-sm">Regular Price</p>
                      <p className="text-xl text-gray-300 line-through">{item.regular}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-400 text-sm font-semibold">Includes:</p>
                      {item.includes.map((include, idx) => (
                        <p key={idx} className="text-gray-300 text-sm">✓ {include}</p>
                      ))}
                    </div>
                    <Button variant="glow" className="w-full mt-6">
                      Register Now
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
              <h3 className="text-2xl font-bold text-white mb-4">Group Registration</h3>
              <p className="text-white/90 mb-6">Register 5 or more participants and get 15% discount!</p>
              <Button variant="outline" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                Contact Us for Group Registration
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section id="sponsorship" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Sponsors</h2>
            <p className="text-gray-400 text-lg">Thank you to our amazing partners who make this event possible</p>
          </motion.div>

          {sponsors && (
            <div className="space-y-16">
              {/* Platinum Sponsors */}
              {sponsors.platinum && sponsors.platinum.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Platinum Sponsors</h3>
                  <div className="flex flex-wrap justify-center items-center gap-8">
                    {sponsors.platinum.map((sponsor: unknown, index: number) => {
                      const platinumSponsor = sponsor as SponsorItem;
                      return (
                        <motion.a
                          key={index}
                          href={platinumSponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all"
                        >
                          <Image
                            src={platinumSponsor.logo}
                            alt={platinumSponsor.name}
                            width={200}
                            height={100}
                            className="h-24 w-auto object-contain filter brightness-0 invert"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).src = `https://via.placeholder.com/200x100/333/fff?text=${platinumSponsor.name}`;
                            }}
                            unoptimized
                          />
                        </motion.a>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Gold Sponsors */}
              {sponsors.gold && sponsors.gold.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-bold text-center mb-6 text-yellow-500">Gold Sponsors</h3>
                  <div className="flex flex-wrap justify-center items-center gap-6">
                    {sponsors.gold.map((sponsor: unknown, index: number) => {
                      const goldSponsor = sponsor as SponsorItem;
                      return (
                        <motion.a
                          key={index}
                          href={goldSponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all"
                        >
                          <img
                            src={goldSponsor.logo}
                            alt={goldSponsor.name}
                            className="h-16 w-auto object-contain filter brightness-0 invert opacity-80"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://via.placeholder.com/180x80/333/fff?text=${goldSponsor.name}`;
                            }}
                          />
                        </motion.a>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Silver Sponsors */}
              {sponsors.silver && sponsors.silver.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-lg font-bold text-center mb-6 text-gray-400">Silver Sponsors</h3>
                  <div className="flex flex-wrap justify-center items-center gap-4">
                    {sponsors.silver.map((sponsor: unknown, index: number) => {
                      const silverSponsor = sponsor as SponsorItem;
                      return (
                        <motion.a
                          key={index}
                          href={silverSponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all"
                        >
                          <img
                            src={silverSponsor.logo}
                            alt={silverSponsor.name}
                            className="h-12 w-auto object-contain filter brightness-0 invert opacity-60"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://via.placeholder.com/150x60/333/fff?text=${silverSponsor.name}`;
                            }}
                          />
                        </motion.a>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {/* Become a Sponsor CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Become a Sponsor</h3>
              <p className="text-white/90 mb-6">
                Join us in making this event a success! Get your brand in front of thousands of runners and fitness enthusiasts.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 border-0"
              >
                Download Sponsorship Package
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg">Everything you need to know</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What is included in the registration fee?",
                answer: "Your registration includes a race kit with official jersey, finisher medal, certificate, race bib, timing chip (10K & 21K), refreshments, and medical support throughout the race.",
              },
              {
                question: "Can I change my race category after registration?",
                answer: "Yes, you can change your race category up to 2 weeks before the event. A small administration fee may apply for category upgrades.",
              },
              {
                question: "Is there a cut-off time for each category?",
                answer: "Yes, cut-off times are: 5K - 1 hour, 10K - 2 hours. These times ensure safety and proper event management.",
              },
              {
                question: "What happens if it rains on race day?",
                answer: "The race will proceed rain or shine. We only cancel or postpone in cases of extreme weather that poses safety risks. Updates will be posted on our social media channels.",
              },
              {
                question: "Can I get a refund if I can't participate?",
                answer: "Registration fees are non-refundable. However, you can transfer your slot to another person up to 1 week before the event with a small transfer fee.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{item.question}</h3>
                <p className="text-gray-400">{item.answer}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400 text-lg">Get in touch with our team</p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
                <p className="text-gray-400 mb-6">
                  Have questions about the Fun Run 2024? Our team is here to help you with registration,
                  event details, and any other inquiries you may have.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">info@funrun2024.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">+62 812-3456-7890</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">WhatsApp</p>
                    <p className="text-white">+62 812-3456-7890</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-gray-400 mb-4">Follow us on social media</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Twitter className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-6">Send us a message</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <Button variant="glow" className="w-full">
                    Send Message
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Fun Run. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sponsorship</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}