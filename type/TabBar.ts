interface TabBarProps {
    tabOpen: boolean;
    setTabOpen: (open: boolean) => void;
    tabActive: string;
    setTabActive: (active: string) => void;
    sideBar: { name: string; icon: React.ReactNode; label: string }[];
}

export default TabBarProps