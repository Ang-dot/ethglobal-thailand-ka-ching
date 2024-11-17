import { useState } from 'react';
import {
    Home,
    Wallet,
    ArrowLeftRight,
    GitBranch,
    Clock,
    BookOpen,
    LayoutGrid,
    Settings,
    Gift,
    HelpCircle,
    ChevronsLeft, ChevronsRight, Copy, QrCode, ExternalLink, Lock, LockOpen
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const IconComponents = {
    Home: Home,
    Wallet: Wallet,
    Swap: ArrowLeftRight,
    Stake: GitBranch,
    Transactions: Clock,
    AddressBook: BookOpen,
    Apps: LayoutGrid,
    Settings: Settings,
    Gift: Gift,
    Help: HelpCircle
};


const Sidebar = ({ isExpanded, setIsExpanded, isHovered, setIsHovered }) => {
    const [isLockClicked, setIsLockClicked] = useState(true);

    const handleExpandChange = (expanded) => {
        if (expanded !== isExpanded) {
            setIsExpanded(expanded);
            setIsLockClicked(false)
        }
    };

    const menuItems = [
        { icon: 'Home', title: 'Home' },
        { icon: 'Wallet', title: 'Assets' },
        { icon: 'Swap', title: 'Swap' },
        { icon: 'Stake', title: 'Stake' },
        { icon: 'Transactions', title: 'Transactions' },
        { icon: 'AddressBook', title: 'Address book' },
        { icon: 'Apps', title: 'Apps' },
        { icon: 'Settings', title: 'Settings' }
    ];

    const bottomMenuItems = [
        { icon: 'Gift', title: "What's new" },
        { icon: 'Help', title: 'Need help?' }
    ];

    const renderIcon = (iconName) => {
        const IconComponent = IconComponents[iconName];
        return IconComponent ? <IconComponent className="h-5 w-5 text-gray-700" /> : null;
    };

    const handleMouseEnter = () => {
        if (!isExpanded && isLockClicked) {
            setIsHovered(true);
        } else {
            setIsLockClicked(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isExpanded) {
            setIsHovered(false);
        }
    };

    const shouldExpand = isExpanded || isHovered;

    return (
        <div
            className={`bg-white border-r transition-all duration-300 ease-in-out ${shouldExpand ? 'w-64' : 'w-16'
                } flex flex-col fixed h-[calc(100vh-4rem)] left-0 mt-14`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Header - Fixed at top */}
            <div className="flex-none p-4 flex flex-col gap-4">
                {/* Top gray bar with Ethereum text */}
                <div className="bg-gray-200 -mx-4 -mt-4 px-4 py-2 text-center">
                    {shouldExpand ? (
                        <h1 className="text-lg font-medium text-black">Ethereum</h1>
                    ) : (
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                className="w-5 h-5"
                            >
                                <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
                            </svg>
                        </div>
                    )}
                </div>

                <button
                    onClick={() => handleExpandChange(!isExpanded)}
                    className="bg-yellow-100 rounded-lg hover:bg-yellow-200 absolute top-12 right-0"
                >
                    {isExpanded ? (
                        <Lock size={16} className="text-yellow-600" />
                    ) : (
                        <LockOpen size={16} className="text-yellow-600" />
                    )}
                </button>

                <div className="flex flex-col items-start justify-between pt-3">
                    <div className="flex items-center gap-3">
                        {/* Avatar section */}
                        <div className="relative">
                            <div className="w-[36px] h-[36px] bg-black rounded-md flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/Basketball.png"
                                    alt="Wallet Logo"
                                    width={20}
                                    height={20}
                                    className="object-fill w-full h-full"
                                    priority
                                />
                            </div>
                            <div className="absolute -top-1 -right-2 bg-green-400 px-1.5 rounded-md text-xs text-white font-medium">
                                2/2
                            </div>
                        </div>

                        {/* Account info */}
                        {shouldExpand ? (
                            <div className="flex-1">
                                <h2 className="text-md text-black">Placid Ethereum</h2>
                                <div className="flex items-center gap-1 text-gray-600">
                                    <span className="text-sm text-black">eth:</span>
                                    <span className="text-sm text-black">0x4040...96E7</span>
                                </div>
                                <span className="text-sm text-black">0 ETH</span>
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>

                    {/* Right side buttons */}
                    <div className="flex items-center gap-2 pt-5">
                        {shouldExpand ? (
                            <>
                                <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-black">
                                    <QrCode size={20} />
                                </button>
                                <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-black">
                                    <Copy size={20} />
                                </button>
                                <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-black">
                                    <ExternalLink size={20} />
                                </button>
                            </>
                        ) : (
                            <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-black">
                                <QrCode size={20} />
                            </button>
                        )}
                    </div>
                </div>

                {/* New Transaction Button */}
                {shouldExpand ? (
                    <Link
                        href='/create-transactions'
                        className="pixelBtn text-center transform transition-transform hover:scale-[1.02]">
                        New Transaction
                    </Link>
                ) : (
                    <Image
                        src="/Glasses.png"
                        alt="Glasses"
                        width={28}
                        height={28}
                        className="object-fill"
                        priority
                    />
                )}
            </div>

            {/* Scrollable Navigation Section */}
            <div className="flex flex-col flex-1 overflow-hidden">
                <div className="flex-1 overflow-y-auto">
                    {/* Navigation Items */}
                    <nav className="pt-2">
                        {menuItems.map((item, index) => {
                            // Common styles for both button and Link
                            const commonClassNames = `flex items-center w-full h-[36px] px-4 py-2 gap-3 hover:bg-gray-50 transition-colors ${!shouldExpand ? 'justify-center' : ''
                                }`;

                            // Common styles object
                            const commonStyles = {
                                display: !shouldExpand && index >= 6 ? 'none' : 'flex'
                            };

                            // Common content
                            const content = (
                                <>
                                    {renderIcon(item.icon)}
                                    {shouldExpand && <span className="ml-3 text-gray-900">{item.title}</span>}
                                </>
                            );

                            // Return Link for Transactions, button for others
                            return item.title === 'Transactions' ? (
                                <Link
                                    key={index}
                                    href="/transactions" // Replace with your actual transactions page URL
                                    className={commonClassNames}
                                    style={commonStyles}
                                >
                                    {content}
                                </Link>
                            ) : (
                                <Link
                                    key={index}
                                    href=""
                                    className={commonClassNames}
                                    style={commonStyles}
                                >
                                    {content}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Bottom Navigation Items - Fixed at bottom */}
                <div className="flex-none border-t">
                    {bottomMenuItems.map((item, index) => (
                        <button
                            key={index}
                            className={`flex items-center w-full h-[36px] px-4 py-2 gap-3 hover:bg-gray-50 transition-colors ${!shouldExpand ? 'justify-center' : ''
                                }`}
                        >
                            {renderIcon(item.icon)}
                            {shouldExpand && <span className="ml-3 text-gray-900">{item.title}</span>}
                        </button>
                    ))}
                </div>
            </div>
        </div>


    );
};

export default Sidebar;