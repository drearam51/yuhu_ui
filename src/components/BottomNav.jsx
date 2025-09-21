import React from 'react'

export default function BottomNav({onNavigate=f=>f}){
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 flex justify-around border-t bg-white p-2 z-50">
      <button onClick={()=>onNavigate('groups')} className="flex flex-col items-center text-xs">🏠<span>Grupos</span></button>
      <button onClick={()=>onNavigate('tasks')} className="flex flex-col items-center text-xs">📝<span>Tareas</span></button>
      <button onClick={()=>onNavigate('reminders')} className="flex flex-col items-center text-xs">⏰<span>Record.</span></button>
      <button onClick={()=>onNavigate('calendar')} className="flex flex-col items-center text-xs">📅<span>Calendario</span></button>
      <button onClick={()=>onNavigate('stats')} className="flex flex-col items-center text-xs">📊<span>Stats</span></button>
    </div>
  )
}
