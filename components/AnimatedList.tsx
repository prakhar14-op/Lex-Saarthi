"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedItem = ({ children, delay = 0, index, onMouseEnter, onClick }: any) => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.5 });
    return (
        <motion.div
            ref={ref}
            data-index={index}
            onMouseEnter={onMouseEnter}
            onClick={onClick}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.2, delay }}
            className="mb-6 cursor-pointer"
        >
            {children}
        </motion.div>
    );
};

interface AnimatedListProps {
    items: any[];
    onItemSelect?: (item: any, index: number) => void;
    showGradients?: boolean;
    enableArrowNavigation?: boolean;
    className?: string;
    itemClassName?: string;
    displayScrollbar?: boolean;
    initialSelectedIndex?: number;
}

const AnimatedList = ({
    items = [],
    onItemSelect,
    showGradients = true,
    enableArrowNavigation = true,
    className = '',
    displayScrollbar = true,
    initialSelectedIndex = -1
}: AnimatedListProps) => {
    const listRef = useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
    const [keyboardNav, setKeyboardNav] = useState(false);
    const [topGradientOpacity, setTopGradientOpacity] = useState(0);
    const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);

    const handleItemMouseEnter = useCallback((index: number) => {
        setSelectedIndex(index);
    }, []);

    const handleItemClick = useCallback(
        (item: any, index: number) => {
            setSelectedIndex(index);
            if (onItemSelect) {
                onItemSelect(item, index);
            }
        },
        [onItemSelect]
    );

    const handleScroll = useCallback((e: any) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        setTopGradientOpacity(Math.min(scrollTop / 50, 1));
        const bottomDistance = scrollHeight - (scrollTop + clientHeight);
        setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
    }, []);

    useEffect(() => {
        if (!enableArrowNavigation) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
                e.preventDefault();
                setKeyboardNav(true);
                setSelectedIndex(prev => Math.min(prev + 1, items.length - 1));
            } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
                e.preventDefault();
                setKeyboardNav(true);
                setSelectedIndex(prev => Math.max(prev - 1, 0));
            } else if (e.key === 'Enter') {
                if (selectedIndex >= 0 && selectedIndex < items.length) {
                    e.preventDefault();
                    if (onItemSelect) {
                        onItemSelect(items[selectedIndex], selectedIndex);
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

    useEffect(() => {
        if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
        const container = listRef.current;
        const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement;
        if (selectedItem) {
            const extraMargin = 50;
            const containerScrollTop = container.scrollTop;
            const containerHeight = container.clientHeight;
            const itemTop = selectedItem.offsetTop;
            const itemBottom = itemTop + selectedItem.offsetHeight;
            if (itemTop < containerScrollTop + extraMargin) {
                container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' });
            } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
                container.scrollTo({
                    top: itemBottom - containerHeight + extraMargin,
                    behavior: 'smooth'
                });
            }
        }
        setKeyboardNav(false);
    }, [selectedIndex, keyboardNav]);

    return (
        <div className={`relative w-full ${className}`}>
            <div
                ref={listRef}
                className={`max-h-[800px] overflow-y-auto p-4 ${displayScrollbar
                    ? '[&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:bg-black/20 [&::-webkit-scrollbar-thumb]:bg-[#D4AF37]/20 [&::-webkit-scrollbar-thumb]:rounded-[4px]'
                    : 'scrollbar-hide'
                    }`}
                onScroll={handleScroll}
                style={{
                    scrollbarWidth: displayScrollbar ? 'thin' : 'none',
                    scrollbarColor: '#D4AF3744 transparent'
                }}
            >
                {items.map((item, index) => (
                    <AnimatedItem
                        key={index}
                        delay={0.1}
                        index={index}
                        onMouseEnter={() => handleItemMouseEnter(index)}
                        onClick={() => handleItemClick(item, index)}
                    >
                        <div className={`p-8 bg-black/40 backdrop-blur-md rounded-3xl border transition-all duration-300 ${selectedIndex === index ? 'border-[#D4AF37] bg-black/60 shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'border-white/5'}`}>
                            <h4 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-[#D4AF37] transition-colors">{item.title}</h4>
                            <p className="text-[#D4AF37] font-medium text-sm mb-4 tracking-wide">{item.author}</p>
                            <p className="text-zinc-400 leading-relaxed mb-6">{item.abstract}</p>
                            <span className="text-[#D4AF37] font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                Read Full Paper <span className="text-xl">→</span>
                            </span>
                        </div>
                    </AnimatedItem>
                ))}
            </div>
            {showGradients && (
                <>
                    <div
                        className="absolute top-0 left-0 right-0 h-[80px] bg-gradient-to-b from-black to-transparent pointer-events-none transition-opacity duration-300 ease z-20"
                        style={{ opacity: topGradientOpacity }}
                    ></div>
                    <div
                        className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-black to-transparent pointer-events-none transition-opacity duration-300 ease z-20"
                        style={{ opacity: bottomGradientOpacity }}
                    ></div>
                </>
            )}
        </div>
    );
};

export default AnimatedList;
