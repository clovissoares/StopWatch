import Timer from "./Timer"
import Theme from "./Theme.tsx";

function StopWatch() {

  return (
    <div className="flex dark:bg-slate-900 flex-col pt-14 items-center min-h-screen font-sans text-slate-800 dark:text-slate-100 text-center">
      <h1 className="text-5xl font-bold mb-8">StopWatch</h1>
      <Timer />
      <Theme />
    </div>
  )
}

export default StopWatch;
