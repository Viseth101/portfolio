'use client';

import React, { useEffect, useState, useRef } from 'react';
import { blockImages, renderGridConfig } from '@/data/render-grid-data';

interface GridSquareProps {
  rowIndex: number;
  colIndex: number;
  blockImage: string | null;
  isFalseSquare: boolean;
  isStatic: boolean;
  hasSquareAbove: boolean;
}

const GridSquare: React.FC<GridSquareProps> = React.memo(({ rowIndex, colIndex, blockImage, isFalseSquare, isStatic, hasSquareAbove }) => {
  const [animationState, setAnimationState] = useState<'hidden' | 'sliding-in' | 'showing' | 'sliding-out'>('hidden');
  const timeoutRefs = useRef<{ slideIn: NodeJS.Timeout | null, slideOut: NodeJS.Timeout | null }>({ slideIn: null, slideOut: null });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (isStatic) {
      setAnimationState('showing');
    }
  }, [isStatic]);

  const clearTimeouts = () => {
    if (timeoutRefs.current.slideIn) clearTimeout(timeoutRefs.current.slideIn);
    if (timeoutRefs.current.slideOut) clearTimeout(timeoutRefs.current.slideOut);
  };

  useEffect(() => {
    return () => clearTimeouts();
  }, []);

  const handleMouseEnter = () => {
    if (isFalseSquare || isStatic || prefersReducedMotion) return;
    clearTimeouts();
    if (animationState === 'showing' || animationState === 'sliding-in') {
      return;
    }
    setAnimationState('sliding-in');
    timeoutRefs.current.slideIn = setTimeout(() => {
      setAnimationState('showing');
    }, renderGridConfig.blockAnimationDuration);
  };

  const handleMouseLeave = () => {
    if (isFalseSquare || isStatic || prefersReducedMotion) return;
    clearTimeouts();
    
    // Detailed logic mapped accurately from the original text.txt
    if (animationState === 'sliding-in') {
      timeoutRefs.current.slideIn = setTimeout(() => {
        setAnimationState('showing');
        setTimeout(() => {
          setAnimationState('sliding-out');
          timeoutRefs.current.slideOut = setTimeout(() => {
            setAnimationState('hidden');
          }, renderGridConfig.blockAnimationDuration);
        }, renderGridConfig.blockSlideOutDelay);
      }, renderGridConfig.blockAnimationDuration);
      return;
    }

    setAnimationState('sliding-out');
    timeoutRefs.current.slideOut = setTimeout(() => {
      setAnimationState('hidden');
    }, renderGridConfig.blockAnimationDuration);
  };

  return (
    <div 
      className={`relative w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] lg:w-[80px] lg:h-[80px] border-l border-b ${!hasSquareAbove ? 'border-t' : ''} border-[var(--border-primary,#333)] shrink-0 overflow-x-hidden ${isFalseSquare ? 'border-l-transparent' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isFalseSquare && (
        <div className="absolute top-0 -left-[1px] w-[1px] h-[10px] bg-[var(--border-primary,#333)]" />
      )}
      {!isFalseSquare && blockImage && (
        <div 
          className={`absolute top-0 w-full h-full bg-cover bg-center transition-none z-10
            ${animationState === 'sliding-in' ? 'animate-slide-in' : ''} 
            ${animationState === 'showing' ? 'left-0 !opacity-100' : 'left-[-100%]'} 
            ${animationState === 'sliding-out' ? 'animate-slide-out' : ''}
            ${animationState === 'hidden' && prefersReducedMotion && isStatic ? '!opacity-100 left-0' : ''}
            ${animationState === 'hidden' && !isStatic ? '!opacity-0' : ''}
          `}
          style={{ 
             backgroundImage: `url("${blockImage}")`,
             animationDuration: prefersReducedMotion ? '0ms' : `${renderGridConfig.blockAnimationDuration}ms`
          }}
        />
      )}
    </div>
  );
});

GridSquare.displayName = 'GridSquare';

export const RenderGrid = ({ className = '' }: { className?: string }) => {
  const [gridAssignments, setGridAssignments] = useState<Map<string, string>>(new Map());
  const [isReduced, setIsReduced] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsReduced(window.innerWidth <= 1028);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const assignments = new Map<string, string>();
    const blocks = renderGridConfig.availableBlocks;
    
    // Generate identical sets for configs
    [renderGridConfig.gridConfig, renderGridConfig.reducedGridConfig].forEach((config, configIdx) => {
      config.forEach((count, r) => {
        for (let c = 0; count > c; c++) {
           const block = blocks[Math.floor(Math.random() * blocks.length)];
           assignments.set(`${configIdx}-${r}-${c}`, blockImages[block]);
        }
      });
    });
    setGridAssignments(assignments);
  }, []);

  const currentConfig = isReduced ? renderGridConfig.reducedGridConfig : renderGridConfig.gridConfig;
  const falseSquares = isReduced ? renderGridConfig.falseSquares.reduced : renderGridConfig.falseSquares.normal;
  const configIdx = isReduced ? 1 : 0;

  return (
    <>
      <style>{`
        @keyframes slideInAndStay {
          0% { left: -100%; top: 0; }
          20% { left: 0%; top: 0; }
          100% { left: 0%; top: 0; }
        }
        @keyframes slideOutAndHide {
          0% { left: 0%; top: 0; }
          60% { left: 0%; top: 0; }
          100% { left: 100%; top: 0; }
        }
        .animate-slide-in {
          display: block;
          opacity: 1 !important;
          animation: slideInAndStay ease-out forwards;
        }
        .animate-slide-out {
          display: block;
          opacity: 1 !important;
          animation: slideOutAndHide ease-out forwards;
        }
      `}</style>
      <div className={`flex flex-col w-fit ${className}`}>
        {currentConfig.map((squareCount, rowIndex) => (
          <div key={rowIndex} className="flex justify-end">
            {Array.from({ length: squareCount }).map((_, colIndex) => {
              const isFalse = falseSquares.some(([r, c]) => r === rowIndex && c === colIndex);
              const isStatic = !isReduced && renderGridConfig.staticBlockPositions.some(([r, c]) => r === rowIndex && c === colIndex);
              const blockImage = gridAssignments.get(`${configIdx}-${rowIndex}-${colIndex}`) || null;

              const distFromRight = squareCount - 1 - colIndex;
              const hasSquareAbove = rowIndex > 0 && distFromRight < currentConfig[rowIndex - 1];

              return (
                <GridSquare 
                  key={colIndex}
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                  isFalseSquare={isFalse}
                  isStatic={isStatic}
                  blockImage={blockImage}
                  hasSquareAbove={hasSquareAbove}
                />
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
};
