import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../assets/particle.json";
import { ISourceOptions } from "@tsparticles/engine";

function Particle() {
  const [ init, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

  return (
    <>
      {init && (
      <Particles className="absolute -z-10"
          options={particlesOptions as unknown as ISourceOptions}
      />
  )}
    </>
  );
}

export default Particle;
