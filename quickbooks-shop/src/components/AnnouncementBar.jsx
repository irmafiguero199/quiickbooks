import { Truck, Zap, Tag, ShieldCheck } from 'lucide-react'

const announcements = [
  { icon: Truck, text: 'FREE DELIVERY' },
  { icon: Tag, text: 'UP TO 70% OFF' },
  { icon: Zap, text: 'INSTANT DIGITAL DELIVERY' },
  { icon: Tag, text: 'LIMITED-TIME OFFERS' },
  { icon: ShieldCheck, text: 'SECURE CHECKOUT' },
]

export default function AnnouncementBar() {
  return (
    <div className="bg-primary-700 text-white py-2 overflow-hidden">
      <div className="container-main">
        <div className="flex items-center justify-center gap-6 text-xs font-semibold tracking-wide flex-wrap">
          {announcements.map((item, index) => (
            <div key={index} className="flex items-center gap-1.5">
              <item.icon className="w-3.5 h-3.5" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
