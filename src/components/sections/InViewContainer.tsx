import { InView } from "@/components/ui/in-view";
import { PropsWithChildren } from "react";

export const InViewContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="">
      <InView
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95,
            filter: "blur(4px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewOptions={{ margin: "0px 0px -350px 0px" }}
      >
        {children}
      </InView>
    </div>
  );
};
