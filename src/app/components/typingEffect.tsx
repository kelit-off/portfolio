"use client";
import React, { useEffect, useState } from "react";

type Props = {
    texts: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
}
export default function TypingEffect({
    texts,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseTime = 2000,
}: Props) {
    const [displayText, setDisplayText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentText = texts[textIndex];

        let timeout: NodeJS.Timeout;

        if(!isDeleting && charIndex <= currentText.length) {
            setDisplayText(currentText.substring(0, charIndex));
            timeout = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
        } else if (isDeleting && charIndex >= 0) {
            // effacer lettre par lettre
            setDisplayText(currentText.substring(0, charIndex));
            timeout = setTimeout(() => setCharIndex(charIndex - 1), deletingSpeed);
        } else if (!isDeleting && charIndex > currentText.length) {
            // pause avant de commencer à effacer
            timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && charIndex < 0) {
            // passer au texte suivant
            setIsDeleting(false);
            setTextIndex((textIndex + 1) % texts.length);
            setCharIndex(0);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);
    return <span>{displayText === "" ? "\u00A0" : displayText}</span>;
}