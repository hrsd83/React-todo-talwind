const App = () => {
  return (

    <div className=" min-h-screen  bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <header className="container mx-auto px-4 pt-8">
        <div className=" flex justify-between">
          <h1 className="uppercase text-white font-semibold tracking-[0.3em] text-3xl">Todo</h1>
          <button>Luna</button>
        </div>
        <form className="flex items-center gap-4 overflow-hidden bg-white rounded-md py-4 px-4 mt-8">
            <span className="inline-block h-5 w-5 rounded-full border-2"> </span>
          <input 
          type="text" 
          placeholder="Crear nueva tarea"
          className="w-full text-gray-600 outline-none"
          />
        </form>
      </header>
      
      <main className="container mx-auto px-4">
        <article>
          <button>circulo</button>
          <p>Complete javascript</p>
          <button>exis</button>
        </article>
        
        <article>
          <button>circulo</button>
          <p>Complete javascript</p>
          <button>exis</button>
        </article>
        
        <article>
          <button>circulo</button>
          <p>Complete javascript</p>
          <button>exis</button>
        </article>

        <section>
          <span>5 Items left</span>
          <button>Clear completed</button>
        </section>

      </main>

        <section className="container mx-auto px-4">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </section>

        <section className="text-center">Drag and drop to reorder  list</section>
  
    </div>
  )
}

export default App;