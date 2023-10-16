import { Component } from '@angular/core';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent 
{

  quotes: string[] = ["Dream big, work hard, stay focused, and never give up. Remember that the road to success is often paved with adversity and challenges, but it's these very obstacles that make the journey worthwhile. Embrace every setback as an opportunity to learn and grow. Stay committed to your goals, and you'll achieve greatness.",
  "Your future is created by what you do today, not tomorrow. Each small step you take today brings you closer to your dreams. So, start now, and don't procrastinate. The actions you take today will shape your destiny. Believe in yourself, and success will follow.",
  "Success is not the destination; it's the journey. The process of striving, learning, and growing is what truly matters. Enjoy the path you're on, and celebrate your progress along the way. Every effort you make is a step toward a brighter future.",
  "The only limits that exist are the ones you place on yourself. Break free from self-doubt and fear. Push your boundaries and explore your potential. You have the power to achieve anything you set your mind to. Believe in your capabilities.",
  "Believe in yourself, and you're halfway there. Confidence is the key to unlocking your full potential. Trust your abilities and your intuition. With self-belief, you can overcome any obstacle and reach your goals.",
  "Challenges are what make life interesting; overcoming them is what makes life meaningful. Embrace challenges as opportunities for personal growth and self-discovery. The moments of triumph after overcoming obstacles are the most rewarding.",
  "The harder you work for something, the greater you'll feel when you achieve it. Dedication and persistence are the cornerstones of success. Keep pushing forward, even when things get tough. Your efforts will pay off.",
  "Success is the sum of small efforts repeated day in and day out. Consistency is the key to achieving your long-term goals. Focus on taking small, actionable steps each day, and you'll make significant progress over time.",
  "Your attitude determines your direction. Maintain a positive mindset, and you'll attract positive outcomes. Your attitude shapes your reality, so choose optimism and watch your life transform.",
  "You are stronger than you think, more capable than you imagine, and brimming with untapped potential. Don't underestimate yourself. When faced with challenges, tap into your inner strength, and you'll surprise yourself with what you can achieve."
  ];
  randomQuote: string = '';

  constructor() { 
    // console.log(sessionStorage.getItem("emailAddress"))
  }

  ngOnInit(): void {
    this.displayRandomQuote();
  }

  displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.randomQuote = this.quotes[randomIndex];
  }

}
