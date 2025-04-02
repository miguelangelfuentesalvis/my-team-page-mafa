export function CardTeam({ photo, name, role }) {
  return (
    <div className="relative">
      <div className="flex ">
        
        <div className="flex flex-col">
          <figure className="w-full h-60 overflow-hidden">
            <img
              src={photo}
              alt={name}
              className="w-full h-full object-cover"
            />
          </figure>
          <span className="font-bold text-gray-800 text-xl p-2">{name}</span>

        
          <div className="absolute rotate-90 -right-16 left-26 mt-14 sm:-right-16 sm:left-26 sm:mt-14 md:-right-16 md:left-26 md:mt-14 lg:right-4  lg:left-2 lg:mt-40 transition">
            <span className="text-gray-700 text-sm font-medium">
              {role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}