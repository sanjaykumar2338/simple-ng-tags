import { Component, OnInit, Input, ElementRef, forwardRef } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const TAGS_INPUT_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SimpleNgTagsComponent),
  multi: true
};

@Component({
  selector: 'simple-ng-tags',
  templateUrl: './simple-ng-tags.component.html',
  styleUrls: ['./simple-ng-tags.component.scss'],
  providers: [TAGS_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class SimpleNgTagsComponent implements OnInit, ControlValueAccessor {
  @Input()placeholder = '+ Tag';

  public tags: any[];
  public onChange: any = Function.prototype; // Trascend the onChange event
  public onTouched: any = Function.prototype; // Trascend the onTouch event
  private _tag: string = '';
  
  constructor(private elRef:ElementRef) { }

  ngOnInit() {

  }

  // Required for ControlValueAccessor interface
  writeValue(value: any) {
    this.tags = value;
  }

  // Required forControlValueAccessor interface
  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  // Required forControlValueAccessor interface
  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  addTag() {
    if(this._tag) {
      const _tagIndex = this.tags.findIndex(tag => tag === this._tag);
      if(_tagIndex < 0) {
        this.tags.push(this._tag);
        this.onChange(this.tags);
        this._tag = '';
      } else {
        const _tagsEl = this.elRef.nativeElement.querySelectorAll('.tag');
        _tagsEl[_tagIndex].classList.add('blink');
        setTimeout(()=> {
          _tagsEl[_tagIndex].classList.remove('blink');
        }, 2000);
      }
    }
  }

  removeTag(_tag){
    const _tagIndex = this.tags.findIndex(tag => tag === tag);
    if(_tagIndex > -1) {
      this.tags.splice(_tagIndex, 1);
      this.onChange(this.tags);
    }
  }
}
