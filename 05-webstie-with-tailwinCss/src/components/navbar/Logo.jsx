import React from 'react';

const Logo = () => {
    
  return (
    <>
    
       {/* Logo Section */}
                <div className="flex flex-col items-center">
                    <img
                        src="https://imgs.search.brave.com/_N0t1v_QP9Pk0Snrr4knbzZYHrOQKJee5bxh1ze2t2s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTUvUmVh/Y3QtTG9nby1QTkct/RmlsZS5wbmc"
                        alt="Logo"
                        className="h-10 w-10"
                    />
                    <p className="text-gray-400 font-bold text-sm">Logo</p>
                </div>

    </>
  );
}

export default Logo;
