import React from 'react';

interface ResponsiveGridProps {
  children: React.ReactNode;
  desktopColumns?: number;
  mobileColumns?: number;
  tabletColumns?: number;
  gap?: number;
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  desktopColumns = 4,
  gap = 5,
  tabletColumns = 2,
  mobileColumns = 1,
}) => {
  const gridColumnClasses = `sm:grid-cols-${mobileColumns} md:grid-cols-${desktopColumns} ipad:grid-cols-${tabletColumns}`;
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
