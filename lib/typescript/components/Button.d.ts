declare type ButtonProps = {
    onPress: () => void;
    isSelected: boolean;
    title: string;
};
export default function Button(props: ButtonProps): JSX.Element;
export {};
