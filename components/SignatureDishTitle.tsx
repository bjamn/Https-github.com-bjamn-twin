import React, { useState, useEffect, useRef } from 'react';

interface SignatureDishTitleProps {
    onAnimationPhaseChange?: (phase: 'initial' | 'shivering' | 'swapping' | 'final') => void;
}

const SignatureDishTitle: React.FC<SignatureDishTitleProps> = ({ onAnimationPhaseChange }) => {
    const [stage, setStage] = useState<'initial' | 'shivering' | 'swapping' | 'final'>('initial');
    const [hasStarted, setHasStarted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        // Notify parent of phase changes
        onAnimationPhaseChange?.(stage);
    }, [stage, onAnimationPhaseChange]);

    useEffect(() => {
        // Set up intersection observer
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasStarted) {
                        setHasStarted(true);
                        startAnimation();
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% visible
        );

        if (containerRef.current) {
            observerRef.current.observe(containerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [hasStarted]);

    const startAnimation = () => {
        setStage('initial');

        const timer1 = setTimeout(() => setStage('shivering'), 2000);
        const timer2 = setTimeout(() => setStage('swapping'), 3000);
        const timer3 = setTimeout(() => setStage('final'), 6200); // 3s start + 3s animation + 200ms buffer

        // Loop: wait 5s at final, then restart
        const timer4 = setTimeout(() => {
            setHasStarted(false);
            setStage('initial');
            setTimeout(() => startAnimation(), 100);
        }, 11200); // 6.2s + 5s

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
        };
    };

    return (
        <h2 ref={containerRef} className={`font-serif text-5xl md:text-7xl mb-8 leading-tight transition-all duration-700 ${stage === 'final' ? 'font-bold scale-110' : ''}`}>
            {stage === 'final' ? (
                <span>Grits and Shrimp</span>
            ) : stage === 'swapping' ? (
                <span className="inline-block relative" style={{ whiteSpace: 'nowrap' }}>
                    <span className="inline-block swap-shrimp">Shrimp</span>
                    <span className="inline-block swap-and"> and </span>
                    <span className="inline-block swap-grits">Grits</span>
                </span>
            ) : (
                <span className="inline-block relative" style={{ whiteSpace: 'nowrap' }}>
                    <span className={`inline-block ${stage === 'shivering' ? 'animate-shiver' : ''}`}>Shrimp</span>
                    <span> and </span>
                    <span className={`inline-block ${stage === 'shivering' ? 'animate-shiver' : ''}`}>Grits</span>
                </span>
            )}
        </h2>
    );
};

export default SignatureDishTitle;
