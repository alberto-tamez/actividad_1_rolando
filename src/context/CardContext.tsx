import * as React from 'react';

type CardProviderProps = {
  children: React.ReactNode;
};

interface CardContextInterface {
    cards: string[];
    addCard: (newCard: string) => void;
}

export const CardContext = React.createContext<CardContextInterface | null>(null);

export const CardProvider: React.FC<CardProviderProps> = ({ children }) => {
    const [cards, setCards] = React.useState<string[]>([]);

    const addCard = (newCard: string) => {
        setCards((prevCards) => [...prevCards, newCard]);
    };

    return (
        <CardContext.Provider value={{ cards, addCard }}>
            {children}
        </CardContext.Provider>
    );
};
