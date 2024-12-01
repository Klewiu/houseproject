import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../shared/navbar/navbar.component";

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [RouterLink, NavbarComponent, CommonModule],
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {
  // Signals for managing the selected house
  selectedHouse = signal<'CALMA' | 'GIOIA'>('CALMA');

  // Signals for managing the current drawing index
  currentDrawingIndex = signal(0);

  // House data
  houses = {
    CALMA: {
      name: 'CALMA',
      image: '/assets/calma_house.png', // Main image for CALMA
      drawing: ['/assets/Calma_parter.webp', '/assets/Calma_gora.webp'], // Floor plans
      info: [
        'Powierzchnia użytkowa mieszkalna:',
        '1. Wiatrołap - 4.1 m²',
        '2. Salon z aneksem kuchennym - 25.1 m²',
        '3. Pokój - 7.5 m²',
        '4. Łazienka - 4.2 m²',
        '5. Hol - 4.7 m²',
        'Powierzchnia dodatkowa:',
        '6. Taras - 9.9 m²',
      ],
    },
    GIOIA: {
      name: 'GIOIA',
      image: '/assets/gioia_house.png', // Main image for GIOIA
      drawing: ['/assets/Gioia_parter.webp', '/assets/Gioia_gora.webp'], // Floor plans
      info: [
        'Powierzchnia użytkowa mieszkalna:',
        '1. Wiatrołap - 3.8 m²',
        '2. Salon z aneksem kuchennym - 28.3 m²',
        '3. Pokój - 6.7 m²',
        '4. Łazienka - 5.1 m²',
        '5. Hol - 3.5 m²',
        'Powierzchnia dodatkowa:',
        '6. Taras - 8.3 m²',
      ],
    },
  };

  // Toggle between the houses
  toggleHouse(house: 'CALMA' | 'GIOIA') {
    this.selectedHouse.set(house);
    this.currentDrawingIndex.set(0); // Reset drawing index when switching houses
    console.log(`Selected house: ${house}`);
  }

  // Switch to the next drawing
  nextDrawing() {
    const drawings = this.houses[this.selectedHouse()].drawing;
    const currentIndex = this.currentDrawingIndex();
    const nextIndex = (currentIndex + 1) % drawings.length;
    this.currentDrawingIndex.set(nextIndex);
  }
}
