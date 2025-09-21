import React from 'react'

export default function BottomNav({onNavigate=f=>f}){
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-gray-100 h-16 flex items-center justify-around">
      <button onClick={()=>onNavigate('groups')} className="flex flex-col items-center text-xs">🏠<span>Grupos</span></button>
      <button onClick={()=>onNavigate('tasks')} className="flex flex-col items-center text-xs">📝<span>Tareas</span></button>
      <button onClick={()=>onNavigate('reminders')} className="flex flex-col items-center text-xs">⏰<span>Record.</span></button>
      <button onClick={()=>onNavigate('calendar')} className="flex flex-col items-center text-xs">📅<span>Calendario</span></button>
      <button onClick={()=>onNavigate('stats')} className="flex flex-col items-center text-xs">📊<span>Stats</span></button>
    </div>
  )
}
