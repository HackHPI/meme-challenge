import {
  Button,
  HStack,
  Icon,
  Text,
  type As,
  type ButtonProps,
} from '@chakra-ui/react';

interface NavButtonProps extends ButtonProps {
  icon: As;
  label: string;
}

export const NavButton = (props: NavButtonProps) => {
  const { icon, label, ...buttonProps } = props;
  return (
    <Button variant="ghost-on-accent" justifyContent="start" {...buttonProps}>
      <HStack spacing="3">
        <Icon as={icon} boxSize="6" color="on-accent-subtle" />
        <Text>{label}</Text>
      </HStack>
    </Button>
  );
};
