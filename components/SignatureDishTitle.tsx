import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

const SignatureDishTitle: React.FC = () => {
    const [stage, setStage] = useState<'initial' | 'shivering' | 'swapping' | 'final'>('initial');
    const containerRef = useRef<HTMLDivElement>(null);
    const shrimpRef = useRef<HTMLSpanElement>(null);
    const gritsRef = useRef<HTMLSpanElement>(null);
    const [positions, setPositions] = useState({ shrimp: { x: 0, y: 0 }, grits: { x: 0, y: 0 } });

    useEffect(() => {
        const timer1 = setTimeout(() => setStage('shivering'), 2000);
        const timer2 = setTimeout(() => setStage('swapping'), 3000);
        const timer3 = setTimeout(() => setStage('final'), 4500); // 1.5s after swapping starts

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    useLayoutEffect(() => {
        if (shrimpRef.current && gritsRef.current && containerRef.current) {
            const container = containerRef.current.getBoundingClientRect();
            const shrimp = shrimpRef.current.getBoundingClientRect();
            const grits = gritsRef.current.getBoundingClientRect();

            setPositions({
                shrimp: { x: shrimp.left - container.left, y: shrimp.top - container.top },
                grits: { x: grits.left - container.left, y: grits.top - container.top }
            });
        }
    }, []);

    if (stage === 'final') {
        return (
            <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight font-bold scale-110 transition-all duration-700">
                Grits and Shrimp
            </h2>
        );
    }

    return (
        <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
            <div ref={containerRef} className="relative inline-block" style={{ minHeight: '1.2em' }}>
                {stage === 'swapping' ? (
                    <>
                        <span className="invisible">Shrimp and Grits</span>
                        <span
                            ref={shrimpRef}
                            className="absolute swap-below"
                            style={{
                                left: `${positions.shrimp.x}px`,
                                top: `${positions.shrimp.y}px`,
                                '--end-x': `${positions.grits.x}px`
                            } as React.CSSProperties}
                        >
                            Shrimp
                        </span>
                        <span
                            className="absolute"
                            style={{
                                left: `${positions.shrimp.x + (positions.grits.x - positions.shrimp.x) / 2}px`,
                                top: `${positions.shrimp.y}px`
                            }}
                        >
                            {' and '}
                        </span>
                        <span
                            ref={gritsRef}
                            className="absolute swap-above"
                            style={{
                                left: `${positions.grits.x}px`,
                                top: `${positions.grits.y}px`,
                                '--end-x': `${positions.shrimp.x}px`
                            } as React.CSSProperties}
                        >
                            Grits
                        </span>
                    </>
                ) : (
                    <>
                        <span ref={shrimpRef} className={`inline-block ${stage === 'shivering' ? 'animate-shiver' : ''}`}>
                            Shrimp
                        </span>
                        <span> and </span>
                        <span ref={gritsRef} className={`inline-block ${stage === 'shivering' ? 'animate-shiver' : ''}`}>
                            Grits
                        </span>
                    </>
                )}
            </div>
        </h2>
    );
};

export default SignatureDishTitle;
