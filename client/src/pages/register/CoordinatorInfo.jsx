import React from "react";
import { Phone, Mail, User, Clock } from "lucide-react";

const CoordinatorInfo = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <User className="w-4 h-4 text-blue-600" />
        <h3 className="text-sm font-bold text-gray-900">
          Need Help? Contact Coordinator
        </h3>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <User className="w-3.5 h-3.5 text-blue-600" />
          </div>
          <span className="font-semibold text-gray-900">Ashish Thakur</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="w-3.5 h-3.5 text-green-600" />
          </div>
          <a
            href="tel:+919907096014"
            className="font-medium text-gray-900 hover:text-green-600"
          >
            +91 9907096014
          </a>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <div className="w-7 h-7 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="w-3.5 h-3.5 text-purple-600" />
          </div>
          <a
            href="mailto:ashish@ricr.in"
            className="font-medium text-gray-900 hover:text-purple-600 truncate"
          >
            ashish@ricr.in
          </a>
        </div>

        <div className="flex items-start gap-2 text-xs text-gray-600 mt-2 pt-2 border-t border-blue-200">
          <Clock className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-amber-600" />
          <span>Available: 11 AM - 8 PM IST</span>
        </div>
      </div>
    </div>
  );
};

export default CoordinatorInfo;
