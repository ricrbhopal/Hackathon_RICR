import React from 'react';
import { X, AlertTriangle, Phone, Mail, User, Clock } from 'lucide-react';

const InactiveTeamModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-lg p-1 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Team Inactive</h2>
              <p className="text-red-100 text-sm">Unable to Login</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-700 mb-6">
            Your team has been marked as <span className="font-bold text-red-600">inactive</span> by the admin. 
            Please contact the coordinator for assistance.
          </p>

          {/* Coordinator Info */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <User className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-bold text-gray-900">Contact Coordinator</h3>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <span className="font-semibold text-gray-900">Ashish Sharma</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-green-600" />
                </div>
                <a 
                  href="tel:+919893296847" 
                  className="font-medium text-gray-900 hover:text-green-600 transition-colors"
                >
                  +91 98932 96847
                </a>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <div className="w-7 h-7 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-purple-600" />
                </div>
                <a 
                  href="mailto:ashish@ricr.in" 
                  className="font-medium text-gray-900 hover:text-purple-600 transition-colors truncate"
                >
                  ashish@ricr.in
                </a>
              </div>

              <div className="flex items-start gap-2 text-xs text-gray-600 mt-2 pt-2 border-t border-blue-200">
                <Clock className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-amber-600" />
                <span>Available: Mon-Sat, 10 AM - 6 PM IST</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={onClose}
            className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InactiveTeamModal;
