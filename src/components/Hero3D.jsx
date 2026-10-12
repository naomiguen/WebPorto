import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles, Environment, Lightformer } from "@react-three/drei";
import { Shape, ExtrudeGeometry, MathUtils, BackSide } from "three";

/* ---------- Bentuk 2D untuk diekstrusi jadi 3D ---------- */

const heartShape = () => {
  const s = new Shape();
  s.moveTo(0, -0.9);
  s.bezierCurveTo(-0.2, -0.7, -1.0, -0.2, -1.0, 0.25);
  s.bezierCurveTo(-1.0, 0.8, -0.35, 0.95, 0, 0.45);
  s.bezierCurveTo(0.35, 0.95, 1.0, 0.8, 1.0, 0.25);
  s.bezierCurveTo(1.0, -0.2, 0.2, -0.7, 0, -0.9);
  return s;
};

const starShape = (points = 5, outer = 1, inner = 0.55) => {
  const s = new Shape();
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (i / (points * 2)) * Math.PI * 2 + Math.PI / 2;
    const x = Math.cos(a) * r;
    const y = Math.sin(a) * r;
    if (i === 0) s.moveTo(x, y);
    else s.lineTo(x, y);
  }
  s.closePath();
  return s;
};

// Ekstrusi dengan tepi membulat supaya terlihat "gemuk" dan lucu
const puffy = (shape, depth, bevel) => {
  const g = new ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelThickness: bevel,
    bevelSize: bevel * 0.8,
    bevelSegments: 10,
    curveSegments: 40,
  });
  g.center();
  return g;
};

/* ---------- Material ---------- */

const Candy = ({ color, ...rest }) => (
  <meshPhysicalMaterial
    color={color}
    roughness={0.3}
    clearcoat={1}
    clearcoatRoughness={0.12}
    {...rest}
  />
);

const Gold = ({ color = "#f6c453" }) => (
  <meshStandardMaterial color={color} metalness={1} roughness={0.22} />
);

/* ---------- Objek 3D ---------- */

const Heart = () => {
  const geo = useMemo(() => puffy(heartShape(), 0.45, 0.28), []);
  return (
    <mesh geometry={geo}>
      <Candy color="#ff3d81" />
    </mesh>
  );
};

const Star = () => {
  const geo = useMemo(() => puffy(starShape(), 0.25, 0.14), []);
  return (
    <mesh geometry={geo}>
      <Candy color="#ffd23f" />
    </mesh>
  );
};

const Flower = () => {
  const petals = Array.from({ length: 5 }, (_, i) => (i / 5) * Math.PI * 2);
  return (
    <group>
      {petals.map((a, i) => (
        <mesh
          key={i}
          position={[Math.cos(a) * 0.58, Math.sin(a) * 0.58, 0]}
          rotation={[0, 0, a - Math.PI / 2]}
          scale={[0.44, 0.64, 0.26]}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <Candy color="#ffc2dc" />
        </mesh>
      ))}
      <mesh position={[0, 0, 0.08]}>
        <sphereGeometry args={[0.32, 32, 32]} />
        <Candy color="#ffd23f" />
      </mesh>
    </group>
  );
};

const Bow = () => {
  // Satu sayap pita (membulat di ujung), dicerminkan dengan memutar 180° di sumbu Y
  const wing = useMemo(() => {
    const s = new Shape();
    s.moveTo(0, 0);
    s.bezierCurveTo(0.3, 0.15, 0.7, 0.8, 1.0, 0.72);
    s.bezierCurveTo(1.3, 0.65, 1.25, -0.65, 1.0, -0.72);
    s.bezierCurveTo(0.7, -0.8, 0.3, -0.15, 0, 0);
    return puffy(s, 0.15, 0.1);
  }, []);
  // Ekor pita pendek dengan takik V di ujung
  const tail = useMemo(() => {
    const s = new Shape();
    s.moveTo(-0.14, 0);
    s.lineTo(0.14, 0);
    s.lineTo(0.22, -0.7);
    s.lineTo(0, -0.52);
    s.lineTo(-0.22, -0.7);
    s.closePath();
    return puffy(s, 0.1, 0.07);
  }, []);

  return (
    <group position={[0, 0.1, 0]}>
      <mesh geometry={wing} position={[0.12, 0, 0]}>
        <Candy color="#ff7fb0" />
      </mesh>
      <mesh geometry={wing} position={[-0.12, 0, 0]} rotation={[0, Math.PI, 0]}>
        <Candy color="#ff7fb0" />
      </mesh>
      <mesh geometry={tail} position={[-0.12, -0.5, -0.04]} rotation={[0, 0, 0.28]}>
        <Candy color="#ff9dc3" />
      </mesh>
      <mesh geometry={tail} position={[0.12, -0.5, -0.04]} rotation={[0, 0, -0.28]}>
        <Candy color="#ff9dc3" />
      </mesh>
      <mesh scale={[1, 1.1, 0.9]}>
        <sphereGeometry args={[0.27, 32, 32]} />
        <Candy color="#ff4f93" />
      </mesh>
    </group>
  );
};

const Lipstick = () => (
  <group>
    <mesh position={[0, -0.55, 0]}>
      <cylinderGeometry args={[0.3, 0.3, 0.75, 40]} />
      <Gold />
    </mesh>
    <mesh position={[0, 0.02, 0]}>
      <cylinderGeometry args={[0.27, 0.27, 0.42, 40]} />
      <Candy color="#ac1754" />
    </mesh>
    <mesh position={[0, 0.5, 0]}>
      <cylinderGeometry args={[0.2, 0.2, 0.55, 40]} />
      <Candy color="#ff3d81" />
    </mesh>
    <mesh position={[0, 0.78, 0]} scale={[1, 0.9, 1]}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <Candy color="#ff3d81" />
    </mesh>
  </group>
);

const Mirror = () => (
  <group>
    <mesh>
      <torusGeometry args={[0.62, 0.1, 24, 64]} />
      <Gold />
    </mesh>
    <mesh position={[0, 0, -0.01]}>
      <circleGeometry args={[0.62, 48]} />
      <meshPhysicalMaterial
        color="#ffe9f3"
        metalness={0.7}
        roughness={0.06}
        clearcoat={1}
        side={2}
      />
    </mesh>
    <mesh position={[0, -1.15, 0]}>
      <cylinderGeometry args={[0.1, 0.1, 0.95, 24]} />
      <Gold />
    </mesh>
    <mesh position={[0, -1.68, 0]}>
      <sphereGeometry args={[0.17, 24, 24]} />
      <Candy color="#ff3d81" />
    </mesh>
  </group>
);

/* ---------- Gerak ---------- */

// Mengayun pelan ke kiri-kanan (tidak berputar penuh, supaya sisi tipis tidak terlihat jelek)
const Sway = ({ amp = 0.6, speed = 0.9, phase = 0, spinZ = 0, children }) => {
  const ref = useRef();
  useFrame(({ clock }, dt) => {
    const t = clock.elapsedTime;
    ref.current.rotation.y = Math.sin(t * speed + phase) * amp;
    if (spinZ) ref.current.rotation.z += dt * spinZ;
  });
  return <group ref={ref}>{children}</group>;
};

// Seluruh kelompok condong mengikuti kursor (efek parallax)
const Rig = ({ pointer, children }) => {
  const ref = useRef();
  useFrame((_, dt) => {
    ref.current.rotation.y = MathUtils.damp(ref.current.rotation.y, pointer.current.x * 0.4, 4, dt);
    ref.current.rotation.x = MathUtils.damp(ref.current.rotation.x, pointer.current.y * 0.28, 4, dt);
  });
  return <group ref={ref}>{children}</group>;
};

/* ---------- Adegan ---------- */

// pos = posisi relatif terhadap kanvas (-1..1). Kanvas lebih besar dari foto (lihat -inset-* di
// bawah), sehingga pojok foto berada di sekitar ±0.72. Nilai di bawah itu menaruh objek tepat di
// pojok/tepi foto, dengan ruang tersisa agar tidak terpotong tepi kanvas saat melayang.
const ITEMS = [
  { key: "heart", Comp: Heart, pos: [0.7, 0.7], scale: 0.58, rot: [0, 0, -0.2], sway: { amp: 0.7, speed: 0.9, phase: 0 } },
  { key: "bow", Comp: Bow, pos: [-0.7, 0.7], scale: 0.62, rot: [0, 0, 0.22], sway: { amp: 0.5, speed: 0.8, phase: 1.3 } },
  { key: "lipstick", Comp: Lipstick, pos: [0.72, -0.64], scale: 0.56, rot: [0, 0, -0.45], sway: { amp: 0.6, speed: 0.7, phase: 2.1 } },
  { key: "flower", Comp: Flower, pos: [-0.68, -0.68], scale: 0.62, rot: [0.1, 0, 0], sway: { amp: 0.35, speed: 0.6, phase: 0.6, spinZ: 0.35 } },
  { key: "star", Comp: Star, pos: [0.8, 0.02], scale: 0.4, rot: [0, 0, 0.3], sway: { amp: 0.6, speed: 1.1, phase: 3.2 }, hideSmall: true },
  { key: "mirror", Comp: Mirror, pos: [-0.8, 0.0], scale: 0.38, rot: [0, 0, 0.35], sway: { amp: 0.5, speed: 0.8, phase: 4.0 }, hideSmall: true },
];

const Scene = ({ pointer }) => {
  const { viewport, size } = useThree();
  const small = size.width < 420;

  return (
    <>
      <ambientLight intensity={1.1} />
      <directionalLight position={[3, 5, 6]} intensity={2.4} />
      <pointLight position={[-4, -2, 4]} intensity={40} color="#ff9ccc" />

      {/* Lingkungan pantulan buatan sendiri (tanpa unduhan HDR) agar emas & kaca berkilau */}
      <Environment resolution={256}>
        <mesh scale={40}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#ffb3d1" side={BackSide} />
        </mesh>
        <Lightformer form="rect" intensity={3} position={[0, 4, 5]} scale={[10, 3, 1]} color="#ffffff" />
        <Lightformer form="ring" intensity={2.5} position={[-5, 1, 3]} scale={4} color="#ffe0ee" />
        <Lightformer form="circle" intensity={2} position={[5, -2, 3]} scale={4} color="#fff3f8" />
      </Environment>

      <Rig pointer={pointer}>
        {ITEMS.filter((it) => !(small && it.hideSmall)).map((item) => {
          const Comp = item.Comp;
          return (
            <group
              key={item.key}
              position={[(item.pos[0] * viewport.width) / 2, (item.pos[1] * viewport.height) / 2, 0]}
              rotation={item.rot}
              scale={item.scale}
            >
              <Float speed={1.8} rotationIntensity={0.35} floatIntensity={1.4} floatingRange={[-0.2, 0.2]}>
                <Sway {...item.sway}>
                  <Comp />
                </Sway>
              </Float>
            </group>
          );
        })}
      </Rig>

      <Sparkles
        count={small ? 22 : 40}
        scale={[viewport.width * 0.95, viewport.height * 0.95, 2]}
        size={6}
        speed={0.5}
        opacity={0.95}
        color="#ffffff"
      />
    </>
  );
};

const Hero3D = () => {
  const wrapRef = useRef(null);
  const pointer = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = wrapRef.current;
    // Berhenti merender saat hero tidak terlihat (hemat baterai)
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0 });
    io.observe(el);

    const onMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none absolute -inset-12 z-20 sm:-inset-16 md:-inset-20 xl:-inset-24"
    >
      <Canvas
        flat
        // offsetSize: ukur dari offsetWidth/Height, bukan getBoundingClientRect. Kalau tidak, ukuran
        // kanvas ikut "terkunci" kecil saat animasi pop-in foto masih berjalan (skala < 1).
        resize={{ scroll: false, offsetSize: true }}
        frameloop={visible ? "always" : "never"}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 10], fov: 35 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene pointer={pointer} />
      </Canvas>
    </div>
  );
};

export default Hero3D;
