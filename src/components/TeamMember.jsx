export const TeamMember = ({ photo, name, role }) => {
  [
    {
      photo: "/images/photo1.png",
      name: "Bill Mahoney",
      role: "PRODUCT OWNER",
    },
    {
      photo: "/images/photo2.png",
      name: "Saba Cabrera",
      role: "ART DIRECTOR",
    },
    {
      photo: "/images/photo3.png",
      name: "Shae Le",
      role: "TECH LEAD",
    },
    {
      photo: "/images/photo4.png",
      name: "Skylah Lu",
      role: "UX DESIGNER",
    },
    {
      photo: "/images/photo5.png",
      name: "Griff Richards",
      role: "DEVELOPER",
    },
    {
      photo: "/images/photo6.png",
      name: "Stan John",
      role: "DEVELOPER",
    }
  ];


return (
    <>
        <div key={index}  className="flex flex-col">
            <figure className="w-full h-60">
                <img src={photo} alt="" className="w-full h-full object-cover" />
            </figure>
            <span className="font-bold text-gray-700 text-xl p-2">{name}</span>
        </div>
        <div className="writing-mode-vertical-rl rotate-90 h-40 flex p-1 items-end justify-end">
            <span className="text-gray-700">{role}</span>
        </div>
    </>
);
};