import { Magnetic } from "@/components/ui/magnetic";
import { BorderTrail } from "@/components/ui/border-trail";
export const AboutMeComponet = () => {
  return (
    <Magnetic intensity={0.2} actionArea="global" range={200}>
      <section className="bg-white/10 backdrop-blur-lg rounded-xl p-6 m-2   ">
        <BorderTrail className="bg-purple-500" />

        <p>
          Tengo una pasión inquebrantable por convertir ideas en soluciones
          digitales. Mi viaje en el desarrollo web comenzó breve mención
          auténtica: ej. construyendo mi primer CRUD en Node.js o autodidacta
          con cursos en Platzi/Udemy, y desde entonces no he dejado de aprender.
        </p>
      </section>
    </Magnetic>
  );
};
