// components/CardComponent.tsx
import { Card, Text, Button, Spacer } from "@nextui-org/react";

type CardComponentProps = {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
};

const CardComponent: React.FC<CardComponentProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <Card hoverable clickable>
      <Card.Body>
        <Text h4>{title}</Text>
        <Text>{description}</Text>
        <Spacer y={1} />
        <Button onClick={onButtonClick}>{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
