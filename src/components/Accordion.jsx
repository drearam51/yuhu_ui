import React, {useState} from 'react'

export default function Accordion({items=[]}){
  // items = [{id,title,content}] ; single-open behavior
  const [openId, setOpenId] = useState(items[0]?.id || null)

  return (
    <div className="bg-white rounded-xl shadow-card divide-y border border-gray-100 overflow-hidden">
      {items.map(it=>(
        <div key={it.id}>
          <div
            role="button"
            tabIndex={0}
            onClick={()=> setOpenId(openId===it.id ? null : it.id)}
            onKeyDown={(e)=> (e.key==='Enter' || e.key===' ') && setOpenId(openId===it.id ? null : it.id)}
            aria-expanded={openId===it.id}
            className="flex justify-between items-center px-4 py-3 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="text-sm font-medium">{it.title}</div>
              <span className="text-xs text-gray-500 bg-yuhu-gray-100 px-2 py-1 rounded-full">{it.count ?? ''}</span>
            </div>
            <div className={`transform transition-transform ${openId===it.id ? 'rotate-90' : ''}`}>▸</div>
          </div>
          <div className={`px-4 pb-4 ${openId===it.id ? 'block' : 'hidden'}`}>
            <div className="text-sm text-gray-700">
              {Array.isArray(it.content) ? (
                <ul className="list-disc pl-5 space-y-1">
                  {it.content.map((c, idx)=> <li key={idx}>{typeof c === 'string' ? c : c.title ?? JSON.stringify(c)}</li>)}
                </ul>
              ) : (
                <div>{it.content}</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
