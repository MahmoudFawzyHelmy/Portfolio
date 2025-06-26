import { Button } from "@/components/ui/button";
import React from "react";

const SpecialLoadingButton = ({ content, width }) => {
  return (
    <>
      <Button 
        disabled 
        type="button" 
        className={`${width ? `${width}` : "w-full"} bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 opacity-75 cursor-not-allowed`}
      >
        <div className="flex items-center justify-center space-x-2">
          <div className="relative">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
          <span className="text-sm">{content}...</span>
        </div>
      </Button>
    </>
  );
};

export default SpecialLoadingButton;
