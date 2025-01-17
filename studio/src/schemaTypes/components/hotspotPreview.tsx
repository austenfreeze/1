import { Box, Card, Text } from "@sanity/ui";
import { HotspotTooltipProps } from "sanity-plugin-hotspot-array";

export function hotspotPreview({ value, schemaType, renderPreview }: HotspotTooltipProps) {
  return (
    <Card padding={2} shadow={1} radius={2}>
      <Box padding={2}>
        {renderPreview({
          value,
          schemaType,
          layout: "default",
        })}
        <Text size={1} weight="semibold" style={{ marginTop: 5 }}>
          {value.details ? `Details: ${value.details}` : "No details provided"}
        </Text>
      </Box>
    </Card>
  );
}
