import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

const SignatureDishTitle: React.FC = () => {
    const [stage, setStage] = useState<'initial' | 'shivering' | 'swapping' | 'final'>('initial');
    const shrimpRef = useRef<HTMLSpanElement>(null);
    const gritsRef = useRef<HTMLSpanElement>(null);
    const [deltas, setDeltas] = useState({ shrimp: 0, grits: 0 });

    useEffect(() => {
        // Start sequence after mount
        const timer1 = setTimeout(() => {
            setStage('shivering');
        }, 2000);

        const timer2 = setTimeout(() => {
            setStage('swapping');
        }, 3000); // Shiver for 1s

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    useLayoutEffect(() => {
        if (shrimpRef.current && gritsRef.current) {
            const shrimpRect = shrimpRef.current.getBoundingClientRect();
            const gritsRect = gritsRef.current.getBoundingClientRect();

            // Shrimp needs to move to Grits' position (right)
            const shrimpDelta = gritsRect.left - shrimpRect.left;

            // Grits needs to move to Shrimp's position (left)
            const gritsDelta = shrimpRect.left - gritsRect.left;

            setDeltas({ shrimp: shrimpDelta, grits: gritsDelta });
        }
    }, []);

    const handleSwapEnd = () => {
        if (stage === 'swapping') {
            setStage('final');
        }
    };

    return (
        <h2 className={`font-serif text-5xl md:text-7xl mb-8 leading-tight transition-all duration-700 ${stage === 'final' ? 'font-bold scale-110' : ''}`}>
            {stage === 'final' ? (
                <span>Grits and Shrimp</span>
            ) : (
                <span className="relative inline-block">
                    <span
                        ref={shrimpRef}
                        className={`inline-block ${stage === 'shivering' ? 'animate-shiver' : ''}`}
                        style={
                            stage === 'swapping'
                                ? {
                                    animation: `swap-below 1.5s ease-in-out forwards`,
                                    '--delta-x': `${deltas.shrimp}px`,
                                } as React.CSSProperties
                                : {}
                        }
                        onAnimationEnd={handleSwapEnd}
                    >
                        Shrimp
                    </span>
                    <span> and </span>
                    <span
                        ref={gritsRef}
                        className={`inline-block ${stage === 'shivering' ? 'animate-shiver' : ''}`}
                        style={
                            stage === 'swapping'
                                ? {
                                    animation: `swap-above 1.5s ease-in-out forwards`,
                                    '--delta-x': `${deltas.grits}px`,
                                } as React.CSSProperties
                                : {}
                        }
                    >
                        Grits
                    </span>
                </span>
            )}
        </h2>
    );
};

export default SignatureDishTitle;
