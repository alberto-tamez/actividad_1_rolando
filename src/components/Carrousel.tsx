import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardContext } from "@/context/CardContext";

export function Carrousel() {
    const cardContext = React.useContext(CardContext);
    
    const renderCards = () => {
      if (!cardContext || cardContext.cards.length === 0) {
        // If there are no cards, show a default card
        return (
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 text-gray-500">
                  <span>No hay ninguna nota! Agrega una nueva nota!</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        );
      } else if (cardContext.cards.length === 1) {
        return cardContext.cards.map((content, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span>{content}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ));
      } else if (cardContext.cards.length === 2) {
        return cardContext.cards.map((content, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span>{content}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ));
      }else {
        // If there are more than two cards, render them normally
        return cardContext.cards.map((content, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span>{content}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ));
      }
    };

    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-sm"
        >
            <CarouselContent>
                {renderCards()}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

// import * as React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { CardContext } from "@/context/CardContext";

// export function Carrousel() {
//     const cardContext = React.useContext(CardContext);
    
//     return (
//         <Carousel
//             opts={{
//                 align: "start",
//             }}
//             className="w-full max-w-sm"
//         >
//             <CarouselContent>
//                 {cardContext && cardContext.cards.length > 0 ?
//                     cardContext.cards.map((content, index) => (
//                         <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//                             <div className="p-1">
//                                 <Card>
//                                     <CardContent className="flex aspect-square items-center justify-center p-6">
//                                         <span>{content}</span>
//                                     </CardContent>
//                                 </Card>
//                             </div>
//                         </CarouselItem>
//                     ))
//                     :
//                     <CarouselItem>
//                         <div className="p-1">
//                             <Card>
//                                 <CardContent className="flex aspect-square items-center justify-center p-6 text-gray-500">
//                                     <span>No cards available. Add a new card!</span>
//                                 </CardContent>
//                             </Card>
//                         </div>
//                     </CarouselItem>
//                 }
//             </CarouselContent>
//             <CarouselPrevious />
//             <CarouselNext />
//         </Carousel>
//     );
// }
