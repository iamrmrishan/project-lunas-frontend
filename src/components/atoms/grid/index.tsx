import React from 'react';

interface ResponsiveGridProps {
  children: React.ReactNode;
  desktopColumns?: number;
  HDdesktopColumns?: number;
  mobileColumns?: number;
  tabletColumns?: number;
  gap?: number;
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  desktopColumns = 1,
  HDdesktopColumns = 1,
  gap = 5,
  tabletColumns = 1,
  mobileColumns = 1,
}) => {
  const gridColumnClasses = `sm:grid-cols-${mobileColumns} md:grid-cols-${desktopColumns} ipad:grid-cols-${tabletColumns} lg:grid-cols-${HDdesktopColumns}`;
  const gridGapClasses = `gap-x-${gap} gap-y-${gap} `;

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <div className={`grid ${gridColumnClasses} ${gridGapClasses}`}>
        {children}
      </div>
    </div>
  );
};

export default ResponsiveGrid;
