import { Directive, ElementRef, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Directive({
  selector: '[cpfMask]'
})
export class CpfMaskDirective {

  @Input() cpf:string = '';
  @Output() onPressEnter: EventEmitter<any> = new EventEmitter();

  constructor(element: ElementRef) { 
    element.nativeElement.value = this.aplicarMascara(element.nativeElement.value);
  }

  aplicarMascara(cpf: string) {
    cpf = cpf.replace(/(\d+)(\d{3})(\d{3})(\d{2})/, " $1.$2.$3-$4");
    
    return cpf;
}

}
