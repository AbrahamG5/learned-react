import { mockGifs } from "./mock-data/gifs.mock";

const GifsApp = () => {
  return (
    <div className="bg-gray-800 h-dvh max-h-screen w-dvw text-white text-center p-4 overflow-x-hidden">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Buscador de Gifs</h1>
        <p className="text-gray-400 text-xl">Descubre los mejores Gifs</p>
      </div>

      {/* Search bar */}
      <div className="flex items-center justify-center p-0 mt-6 gap-2">
        <input
          type="text"
          placeholder="Inserta el nombre del Gif"
          className="bg-gray-400 p-2 rounded-2xl w-1/4 text-black"
        />
        <button className="bg-black p-2 px-4 rounded-2xl hover:bg-black/60 hover:cursor-pointer">
          Buscar
        </button>
      </div>

      {/* Search history */}
      <div className="mt-6">
        <h2 className="text-2xl">Búsquedas previas</h2>
        <ul className="flex items-center justify-center gap-3 mt-4 [&>li]:bg-black [&>li]:w-fit [&>li]:p-1.5 [&>li]:rounded-xl [&>li]:px-3 [&>li]:border">
          <li>Hola</li>
          <li>Hola</li>
          <li>Hola</li>
        </ul>
      </div>

      {/* Gifs */}
      <div className="flex mt-8 h-1/2 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {mockGifs.map((gif) => (
            <div key={gif.id} className="flex flex-col max-w-2xl  gap-2">
              <img
                src={gif.url}
                alt={gif.title}
                className="w-full h-full rounded-xl object-cover"
              />

              <h3 className="text-sm font-medium truncate">{gif.title}</h3>

              <p className="text-xs text-gray-400 mt-1">
                {gif.width}x{gif.height} · 1.5mb
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GifsApp;
