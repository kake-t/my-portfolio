// src/components/layout/Header.tsx
import React from "react";
import Navigation from "./Navigation";

const Header: React.FC = () => (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <Navigation />
    </header>
);

export default Header;
