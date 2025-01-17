import React, { useMemo } from 'react';
import { Box, Card, Text, Tooltip } from '@sanity/ui';

// Define HotspotMarkerProps more precisely
interface HotspotMarkerProps {
  value: {
    x: number;
    y: number;
    details?: string;
    title: string;
  };
  index: number;
}

export function HotspotMarker({ value, index,}: HotspotMarkerProps): JSX.Element {
  // Memoize the Tooltip content to avoid unnecessary re-renders
  const tooltipContent = useMemo(() => (
    <Card padding={2} shadow={1} radius={2}>
      <Text size={1} weight="semibold">
        {value.details || `Hotspot ${index + 1}`}
      </Text>
    </Card>
  ), [value.details, index,]);

  return (
    <Tooltip content={tooltipContent} placement="top">
      <Box
        style={{
          position: 'absolute',
          left: `${value.x * 100}%`,
          top: `${value.y * 100}%`,
          transform: 'translate(-50%, -50%)',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 0, 0, 0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '14px',
          fontWeight: 'bold',
        }}
      >
        {index + 1}
      </Box>
    </Tooltip>
  );
}
