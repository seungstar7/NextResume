import { motion } from 'framer-motion';

export default function AnimatedComponent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
                ease: "easeInOut",
                duration: 2,
                y: { duration: 1 },
            }}
        >
            <div>
                여기에 콘텐츠가 들어갑니다.
            </div>
        </motion.div>
    );
}