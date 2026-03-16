import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export function VideoGallery() {
  const videos = [
    { id: 1, editor: "Alex M.", img: "https://picsum.photos/seed/vid1/600/1000" },
    { id: 2, editor: "Sarah T.", img: "https://picsum.photos/seed/vid2/600/1000" },
    { id: 3, editor: "David K.", img: "https://picsum.photos/seed/vid3/600/1000" },
    { id: 4, editor: "Emma L.", img: "https://picsum.photos/seed/vid4/600/1000" },
  ];

  return (
    <section className="py-24 bg-brand-navy text-white">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            See What $89 Gets You
          </h2>
          <p className="text-xl text-white/70 italic">
            Real edits. Real clients. Real results.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {videos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[9/16] bg-brand-navy-light cursor-pointer"
            >
              <img 
                src={video.img} 
                alt={`Video edited by ${video.editor}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-5 h-5 text-white fill-white ml-1" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-white/90">Edited by</span>
                  <span className="text-sm font-bold text-brand-accent bg-white/10 px-2 py-1 rounded backdrop-blur-md">{video.editor}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
