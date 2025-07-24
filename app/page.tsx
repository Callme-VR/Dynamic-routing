"use client";

import Link from "next/link";
import { posts } from "../data/posts";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  return (
    <AnimatePresence>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 opacity-20 animate-pulse"></div>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="min-h-screen flex flex-col items-center justify-center p-7"
      >
        <div className="relative inline-block">
          <motion.h1
            className="text-center text-5xl font-light mb-6"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, type: "spring", stiffness: 100 }}
          >
            {"My Blog".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.06,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Glowing Underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full absolute bottom-0 left-0 w-full shadow-lg"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
        </div>

        {/* Staggered List of Posts */}
        <motion.ul
          className="mt-8 space-y-4 w-full max-w-xl"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {posts.map((post) => (
            <motion.li
              key={post.slug}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.03, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={`/posts/${post.slug}`}
                className="text-xl text-blue-600 hover:underline"
              >
                {post.title}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.main>
    </AnimatePresence>
  );
}
