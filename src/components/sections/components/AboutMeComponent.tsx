import { Magnetic } from "@/components/ui/magnetic";
import { BorderTrail } from "@/components/ui/border-trail";
export const AboutMeComponet = () => {
  return (
    <Magnetic intensity={0.2} actionArea="global" range={200}>
      <section className="bg-white/10 backdrop-blur-lg rounded-xl p-6 m-2  flex flex-col  ">
        <BorderTrail className="bg-purple-500" />

        <p className="text-xs min-[600px]:text-[1rem]">
          Soy un futuro desarrollador de software con muchísimas ganas de
          aprender y crecer en este mundo. Ahora mismo estoy estudiando la
          Tecnicatura en Desarrollo de Software en ISTEA, pero antes de entrar a
          la facultad, hice un curso de Desarrollo Web Full Stack en Digital
          House (de marzo 2022 a noviembre 2023), donde aprendí sobre cómo
          construir aplicaciones web desde cero. Mi amor por la programación
          empezó gracias a los videojuegos. Quería entender cómo funcionaban, y
          de ahí nació mi curiosidad por la tecnología. Hoy me inclino más hacia
          el Front-End, pero mantengo una mente abierta y curiosa para aprender
          nuevas herramientas y lenguajes para poder adaptarme a un campo que
          siempre esta en constante evolución.
        </p>
        <p className="text-xs min-[600px]:text-[1rem]">
          Actualmente trabajo como Preparador en la industria farmacéutica.
          Cuando no estoy codeando, me relajo jugando videojuegos, viendo anime
          o leyendo manga, me gusta pasar tiempo con mis amigos y familia. vivo
          con mi novia y nuestros dos gatos: Sunny y negrito. Ahora mismo, mi
          meta es encontrar mi primera oportunidad como programador.
        </p>
      </section>
    </Magnetic>
  );
};
