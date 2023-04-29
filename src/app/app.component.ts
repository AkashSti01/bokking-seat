import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  coach = Array(11)
    .fill(null)
    .map(() => Array(7).fill('O'));
  bookedSeats: any[] = [];

  display() {
    for (let i = 0; i < 12; i++) {
      console.log(this.coach[i].join(' '));
    }
    console.log();
  }

  bookSeats(n: number) {
    let bookedSeats = [];
    for (let i = 0; i < 11; i++) {
      const rowSeats = this.coach[i].join('');
      if (rowSeats.includes('O'.repeat(n))) {
        const start = rowSeats.indexOf('O'.repeat(n));
        for (let j = start; j < start + n; j++) {
          this.coach[i][j] = 'X';
          bookedSeats.push([i, j]);
        }
        break;
      }
    }
    return bookedSeats;
  }

  onBookSeats() {
    const numSeats = parseInt(prompt('How many seats would you like to book?'));
    if (numSeats && numSeats > 0) {
      const booked = this.bookSeats(numSeats);
      if (booked.length) {
        console.log(`Successfully booked ${numSeats} seats:`, booked);
        this.bookedSeats = booked;
        this.display();
      } else {
        console.log(`Sorry, ${numSeats} consecutive seats are not available.`);
      }
    } else {
      console.log('Invalid input. Please enter a positive integer.');
    }
  }


  showBookedTickets(bookedSeats){
    return bookedSeats.map((seat) =>{ return seat.join(''); }).join(', ')
  }
}
