import { BorderTrail } from "../ui/border-trail";
import { Magnetic } from "../ui/magnetic";

export const AboutMe = () => {
  return (
    <div className=" h-screen">
      <Magnetic intensity={0.2} actionArea="global" range={200}>
        <BorderTrail className="bg-purple-500" />
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 my-6 mx-6 ">
          <p>
            <span className="text-purple-500 font-bold">
              Desarrollador FullStack Junior{" "}
            </span>
            con una pasión inquebrantable por convertir ideas en soluciones
            digitales. Mi viaje en el desarrollo web comenzó [breve mención
            auténtica: ej. "construyendo mi primer CRUD en Node.js" o
            "autodidacta con cursos en Platzi/Udemy"], y desde entonces no he
            dejado de aprender.
          </p>
        </div>
      </Magnetic>
    </div>
  );
};
