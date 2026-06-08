import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { scrollProgressRef } from "./scrollProgressRef";

export function ScrollProgressDriver() {
  const scroll = useScroll();

  useFrame(() => {
    if (scrollProgressRef.current) {
      scrollProgressRef.current.style.width = `${scroll.offset * 100}%`;
    }
  });

  return null;
}

export default function ScrollProgressBar() {
  return (
    <div className="scroll-progress-fixed">
      <div
        ref={(el) => {
          scrollProgressRef.current = el;
        }}
        className="scroll-progress-bar"
      />
    </div>
  );
}
