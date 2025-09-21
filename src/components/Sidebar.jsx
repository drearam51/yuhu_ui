import React from 'react'

export default function Sidebar({active='groups', onNavigate=f=>f}){
  const items = [
    {key:'groups', label:'Mis grupos'},
    {key:'tasks', label:'Tareas del día'},
    {key:'reminders', label:'Recordatorios'},
    {key:'calendar', label:'Calendario'},
    {key:'stats', label:'Estadísticas'}
  ]
  return (
    <aside className="hidden md:flex md:flex-col w-64 p-4 border-r border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <img src="/yuhu_logo.png" alt="YUHU logo" className="w-10 h-10"/>
        <div>
          <strong className="text-lg">YUHU</strong>
          <div className="text-xs text-gray-500">Asistente académico</div>
        </div>
      </div>

      <nav className="flex flex-col gap-2" aria-label="Principal">
        {items.map(it=>(
          <button
            key={it.key}
            onClick={()=> onNavigate(it.key)}
            className={`text-left px-3 py-2 rounded-xl ${active===it.key ? 'bg-yuhu-blue-400 text-white' : 'text-yuhu-text hover:bg-gray-50'}`}
          >
            {it.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}
