import './App.css'
import ScoreBoard from './components/Scoreboard'
// import RotatingTitle from './components/RotatingTitle'

function App() {

  return (
    <main className="h-screen w-full bg-[url('/cc-bg-2.png')] bg-cover bg-center bg-no-repeat p-10 flex items-center justify-center flex-col">
      <div className='fixed bottom-5 right-0'>
        <img src="/cc-logo-cropped.png" alt="Coders' Cup '25" className='h-20 shadow-2xl' />
        <div className='w-full shadow-2xl shadow-amber-200 z-50 bg-red-500'></div>
      </div>
      <div className='font-hoshiko fixed top-5 left-5'>
        
      </div>
      <div className="w-5/6">
        <img src="/scoreboard-title.png" alt="Scoreboard" className='h-30 mx-auto mt-4' />
        {/* <RotatingTitle className='text-primaryYellow text-6xl font-hoshiko text-center font-bold m-2 tracking-[0.35em] uppercase drop-shadow-[0_5px_12px_rgba(0,0,0,0.75)] h-30 mx-auto mt-4'/> */}
       
        {/* <h1 className='text-primaryYellow text-8xl font-hoshiko text-center font-bold m-2'>Scoreboard</h1> */}
        <div className='max-h-[60vh] mx-auto overflow-y-auto mt-8'>
          <ScoreBoard room="22k" />
        </div>
      </div>
    </main>
  )
}

export default App
