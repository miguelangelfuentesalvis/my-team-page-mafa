
export default function App() {
  return (
    <>
      <h1 className="flex flex-col p-8 text-black font-bold text-3xl">The creative crew </h1>
      <div className="flex flex-col p-6">
        <h2 className="flex flex-col text-black font-medium text-xl">Who we are</h2>
        <p className="flex flex-col">We are tean of creatively diverse. driven. <br />
          innovative individuals working in various <br />
          locations from the world.</p>
      </div>

   
 
  <div className="flex items-start relative">

  

      <div className="flex flex-col">
      <figure className="w-full h-60">
        <img src="public/images/photo1.png" alt="" className="w-full h-full object-cover" />
      </figure>
      <span className="font-bold text-gray-700 text-xl p-2">Bill Mahoney</span>
    </div>
    <div className="writing-mode-vertical-rl rotate-90 h-40 flex p-1 items-end justify-end">
      <span className="text-gray-700">PRODUCT OWNER</span>
    </div>  
    
  </div>
  
 

    </>
  )
}