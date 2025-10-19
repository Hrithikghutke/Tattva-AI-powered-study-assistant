import ColorBlob from "@/components/common/color-blob";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex flex-col justify-center items-center lg:min-h[40vh]">
      <div className=" py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12 ">
        <SignUp
          appearance={{
            variables: {
              colorPrimary: "#7c3aed", // overrides main color
              colorText: "#111",

              borderRadius: "1rem",
            },
          }}
        />
        <ColorBlob className="w-[40vh] h-[40vh]  blur-[20vh] -z-10 bg-gradient-to-tr from-emerald-400  to-primary top-[20%] right-[15%]" />
        <ColorBlob className="w-[20vh] h-[20vh]  blur-[30vh] -z-10 bg-gradient-to-tr from-accent  to-primary bottom-[20%] left-[15%]" />
      </div>
    </section>
  );
}
