import * as React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContext } from "@/context/CardContext";

export const InputCard: React.FC = () => {
    const [inputValue, setInputValue] = React.useState("");
    const cardContext = React.useContext(CardContext);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleAddCard = () => {
        cardContext?.addCard(inputValue);
        setInputValue("");
    };

    return (
        <div className="flex justify-center space-x-2">
            <Input 
                type="text"
                className="max-w-sm"
                placeholder="Nota" 
                value={inputValue}
                onChange={handleInputChange}
            />
            <Button type="submit" onClick={handleAddCard}>
                Agrega Nota
            </Button>
        </div>
    );
};
