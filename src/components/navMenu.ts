interface NavMenuItem {
    id: number;
    title: string;
    path: string;
}

export const navMenu: NavMenuItem[] = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Solutions", path: "/solutions" },
    { id: 3, title: "Resources", path: "/resources" },
    { id: 4, title: "Pricing", path: "/pricing" },
    { id: 5, title: "Contact Us", path: "/contact" }
];
