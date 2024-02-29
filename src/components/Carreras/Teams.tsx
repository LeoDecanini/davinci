import React from "react";

const Teams = ({ teams }: any) => {
  return (
    <section className="flex h-full px-2 sm:px-5 md:px-10 py-10 justify-center">
      <div className="max-w-7xl w-full">
        <div>
          <span className="font-bold text-xl">{teams.title}</span>
          <div>
            <h3 className="font-bold text-3xl md:text-5xl">{teams.subtitle}</h3>
            <div className={`h-1 max-w-40 md:max-w-60 bg-primary`}></div>
          </div>
        </div>
        <div className={"grid grid-cols-2 gap-10 pt-10"}>
          {teams.members.map((member: any, index: any) => (
            <div
              key={index}
              className={
                "flex gap-5 w-full items-center bg-white p-3 shadow-xl cursor-pointer hover:shadow-2xl"
              }
            >
              <img
                src={member.image}
                className={"w-1/3 h-full object-cover"}
                alt={member.name}
              />
              <div className={"w-full flex flex-col gap-5"}>
                <h4 className={"font-bold text-xl"}>{member.name}</h4>
                <p>{member.role}</p>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
