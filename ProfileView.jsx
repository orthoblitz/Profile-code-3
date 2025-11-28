import React from "react";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

export default function ProfileView() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full max-w-md text-center border border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50 hover:shadow-3xl hover:bg-white/15">

        {/* Profile Image */}
        <div className="w-52 h-52 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-xl bg-white flex items-center justify-center">
          <img
            src="data:image/jpeg;base64,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"
            alt="profile"
            className="w-full h-full object-cover object-bottom scale-[1.5]"
          />
        </div>

        <h2 className="text-3xl font-bold text-white mt-4">Harsha Dutta</h2>
        <p className="text-purple-200">Creative Designer</p>

        <div className="mt-6 space-y-4 text-white/90">
          <div className="flex items-center justify-center gap-2 transition-all duration-300 hover:text-purple-300 hover:scale-105 cursor-pointer">
            <Mail size={20} /> harshadutta.me@gmail.com
          </div>
          <div className="flex items-center justify-center gap-2 transition-all duration-300 hover:text-purple-300 hover:scale-105 cursor-pointer">
            <Phone size={20} /> +91 9681164822
          </div>
          <div className="flex items-center justify-center gap-2 transition-all duration-300 hover:text-purple-300 hover:scale-105 cursor-pointer">
            <MapPin size={20} /> India, Chinsurah
          </div>
        </div>

        <button className="mt-6 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-400/50">
          <Heart className="inline-block mr-2 transition-transform duration-300 hover:scale-125" /> Follow
        </button>
      </div>
    </div>
  );
}
