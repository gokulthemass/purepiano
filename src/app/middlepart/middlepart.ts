import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren, viewChildren, HostListener } from '@angular/core';

@Component({
  selector: 'app-middlepart',
  imports: [],
  templateUrl: './middlepart.html',
  styleUrl: './middlepart.css',
})
export class Middlepart implements AfterViewInit{

  @ViewChildren('whiteKey') whiteKeys!: QueryList<ElementRef>
  @ViewChildren('blackKey') blackKeys!: QueryList<ElementRef>

    private keyboardBindings: {
    type: 'white' | 'black';
    index: number;
    key: string;
    shift?: boolean;
    ctrl?: boolean;
  }[] = [];

  
  ngAfterViewInit(): void {
    // BLACK KEYS: mouse + keyboard binding
    this.blackKeys.forEach((black, index) => {
      const el = black.nativeElement as HTMLElement;

      // mouse click
      el.addEventListener('click', () => {
        const sound = new Audio(`assets/88-piano-notes/black/${index + 1}.mp3`);
        this.playSound(sound);
      });

      // keyboard binding from data attributes
      const key = el.getAttribute('data-keyboard');
      if (key) {
        this.keyboardBindings.push({
          type: 'black',
          index,
          key: key.toLowerCase(),
          shift: el.getAttribute('data-shift') === 'true',
          ctrl: el.getAttribute('data-ctrl') === 'true',
        });
      }
    });

    // WHITE KEYS: mouse + keyboard binding
    this.whiteKeys.forEach((white, index) => {
      const el = white.nativeElement as HTMLElement;

      // mouse click
      el.addEventListener('click', () => {
        const sound = new Audio(`assets/88-piano-notes/white/${index + 1}.mp3`);
        this.playSound(sound);
      });

      // keyboard binding from data attributes
      const key = el.getAttribute('data-keyboard');
      if (key) {
        this.keyboardBindings.push({
          type: 'white',
          index,
          key: key.toLowerCase(),
          shift: el.getAttribute('data-shift') === 'true',
          ctrl: el.getAttribute('data-ctrl') === 'true',
        });
      }
    });
  }

  playSound(sound: HTMLAudioElement) {
    sound.pause();
    sound.currentTime = 0;
    sound.play();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    const key = event.key.toLowerCase();

    const binding = this.keyboardBindings.find(
      b =>
        b.key === key &&
        (!!b.shift === event.shiftKey) &&
        (!!b.ctrl === event.ctrlKey)
    );

    if (!binding) return;

    event.preventDefault();

    const src =
      binding.type === 'white'
        ? `assets/88-piano-notes/white/${binding.index + 1}.mp3`
        : `assets/88-piano-notes/black/${binding.index + 1}.mp3`;

    this.playSound(new Audio(src));
  }
}