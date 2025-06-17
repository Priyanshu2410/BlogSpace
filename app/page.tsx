import Hero from '@/components/Hero';
import Essentials from '@/components/Essentials';
import SocialLinks from '@/components/SocialLinks';
import StarBackground from '@/components/StarBackground';

export default function Home() {
  return (
    <>
      <StarBackground />
      <Hero />
      <Essentials />
      <SocialLinks /> {/* Add here - after essentials */}
    </>
  );
}
