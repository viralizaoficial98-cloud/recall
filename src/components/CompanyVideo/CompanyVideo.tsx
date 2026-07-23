import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause, Clapperboard } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';
import { zoomOut, viewportOnce } from '../../utils/motionVariants';

const VIDEO_SRC = '/assets/video-apresentacao-recall.mp4';

export default function CompanyVideo() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoAvailable, setVideoAvailable] = useState(true);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <section id="video" className="section-y bg-brand-gray-50">
      <div className="container-x">
        <SectionHeading tag={t('video.tag')} title={t('video.title')} subtitle={t('video.description')} />

        <motion.div
          variants={zoomOut}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mx-auto mt-12 aspect-video w-full max-w-5xl overflow-hidden rounded-2xl bg-brand-black shadow-premium"
        >
          {videoAvailable ? (
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/assets/images/video/video-poster.webp"
              onError={() => setVideoAvailable(false)}
            >
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>
          ) : (
            <div className="relative h-full w-full">
              <img
                src="/assets/images/video/video-poster.webp"
                alt={t('video.title')}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/55 px-6 text-center">
                <Clapperboard className="text-brand-red" size={44} strokeWidth={1.5} />
                <p className="max-w-md text-sm font-medium text-white/85 sm:text-base">{t('video.placeholder')}</p>
              </div>
            </div>
          )}

          {videoAvailable && (
            <div className="absolute bottom-4 right-4 flex gap-2 sm:bottom-6 sm:right-6">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={playing ? t('video.pause') : t('video.play')}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-brand-red"
              >
                {playing ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? t('video.mute') : t('video.unmute')}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-brand-red"
              >
                {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
