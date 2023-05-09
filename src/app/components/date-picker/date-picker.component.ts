import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements OnInit {
  formularioReserva: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    const hoy = new Date();
    const mes = hoy.getMonth();
    const anio = hoy.getFullYear();

    this.formularioReserva = this.formBuilder.group({
      desde: new FormControl(new Date(anio, mes, 1)),
      hasta: new FormControl(new Date(anio, mes, 7)),
    });
  }

  ngOnInit(): void {
  }
}
