import { Truck } from "lucide-react";

function AnnouncementBar() {
  return (
    <div className="bg-green-700 text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-center gap-2">
        <Truck size={16} />
        <span>
          Free Delivery on Orders Above <strong>₹499</strong>
        </span>
      </div>
    </div>
  );
}

export default AnnouncementBar;