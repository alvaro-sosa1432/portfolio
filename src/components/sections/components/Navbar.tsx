import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const navItems = [
    { name: "Inicio", path: "#hero" },
    { name: "Sobre mí", path: "#me" },
    { name: "Proyectos", path: "#projects" },
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-lg border-t border-gray-700 z-50 w-full"
    >
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-4">
        {navItems.map((item) => {
          return (
            <Link href={item.path} key={item.path} className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full"
              >
                <motion.span
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-purple-500 hover:border-b hover:border-b-purple-500 hover:text-white text-xs sm:text-xl "
                >
                  {item.name}
                </motion.span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
