import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LuSendHorizonal } from "react-icons/lu";

const ChatButton = () => {
  return (
    <Dialog>
      <DialogTrigger
        className={`${buttonVariants({ variant: "outline" })} w-full mt-2`}
      >
        Leonardo Decanini
      </DialogTrigger>
      <DialogContent className={"w-[95%] max-w-2xl p-0"}>
        <div className={"h-[calc(100svh-20svh)]"}>
          <div className={"w-full py- border-b px-10 py-3"}>
            <h2 className={"text-xl font-semibold"}>Leonardo decanini</h2>
          </div>
          <div
            className={
              "h-[calc(100svh-20svh-53px)] rounded-b-xl flex flex-col justify-end"
            }
          >
            <div
              className={
                "h-[calc(100svh-20svh-53px-70px)] flex flex-col gap-1 p-2"
              }
            >
              <div className={"w-full flex justify-start"}>
                <span className="inline-block px-3 py-1 bg-[#383434] rounded-lg rounded-bl-none text-white">
                  Hola profe
                </span>
              </div>
              <div className={"w-full flex justify-end"}>
                <span className="inline-block px-3 py-1 bg-[#085c4c] rounded-lg rounded-br-none text-white">
                  Hola leonardo
                </span>
              </div>
            </div>
            <div
              className={
                "w-full h-[70px] rounded-b-lg flex items-center gap-5 px-5 border-t"
              }
            >
              <Input className={"border"} type="email" placeholder="Email" />
              <LuSendHorizonal className={"text-3xl cursor-pointer"} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatButton;
