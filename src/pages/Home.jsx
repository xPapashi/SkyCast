import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div
        className="box bg-blue-600 w-10 h-10 rounded-[100%] "
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      />
      <motion.button 
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        className="bg-emerald-600 text-white rounded p-2">
        Hover Over me
      </motion.button>
    </>
  );
}
