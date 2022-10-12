import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/Mascota';
//comonente de la tabla

const listMascotas: Mascota[] = [
  {
    nombre: 'ciro',
    edad: 3,
    raza: 'golden',
    color: 'Dorado',
    peso: 13,
  },
  {
    nombre: 'milton',
    edad: 5,
    raza: 'golden',
    color: 'Dorado',
    peso: 37,
  },
  {
    nombre: 'bartolo',
    edad: 3,
    raza: 'Ovejero Aleman',
    color: 'Dorado',
    peso: 13,
  },
  {
    nombre: 'aquiles',
    edad: 3,
    raza: 'dogo Argentino',
    color: 'Dorado',
    peso: 13,
  },
];

@Component({
  selector: 'app-listado-mascotas',
  templateUrl: './listado-mascotas.component.html',
  styleUrls: ['./listado-mascotas.component.css'],
})

//despues de OnInit, va laparte de la paginacion
export class ListadoMascotasComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'nombre',
    'edad',
    'raza',
    'color',
    'peso',
    'acciones',
  ];
  dataSource = new MatTableDataSource<Mascota>(listMascotas);
  //importamos @ de pagiandor
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //importamos @ de ordenamiento
  @ViewChild(MatSort) sort!: MatSort;

  //inyectamos la clase dentro del contructor para elimanar

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}
  //aca va lo de la paginacion siclos de vida
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Items por pagína';
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  //programar el bon de eliminar
  elimanarMascota() {
    this._snackBar.open('la mascota fue elimanada conexito', '', {
      duration: 4000,
      horizontalPosition: 'right',
    });
  }
}
