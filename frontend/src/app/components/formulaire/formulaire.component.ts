import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api-gateway.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.scss'
})
export class FormulaireComponent implements OnChanges {
  constructor(private donneeAPI: ApiService, private dialog: MatDialog) { }
  @Input() data: any;
  baseWidth: number = 300;
  baseHeight: number = 200;

  ngOnChanges(changes: SimpleChanges): void { }

  onSubmit(form: any) {
    const { item_id, limit } = form.value;

    if (!item_id && !limit) {
      console.log("Veuillez remplir au moins les deux champs.");
      return;
    }

    if (limit < 1 || limit > 10) {
      console.log("Pour la limit, veuillez choisir un nombre entre 1 et 10 (compris).");
      return;
    }

    switch (this.data) {
      case 'OLAP':
        this.informationsOLAP(item_id, limit);
        break;
      case 'OLTP':
        this.informationsOLTP(item_id, limit);
        break;
      default:
        console.log("Type de données non valide.");
        break;
    }
  }

  informationsOLAP(item_id: number, limit: number): void {
    this.donneeAPI.informationOLAP(item_id, limit).subscribe({
      next: (response) => {
        this.dialog.open(PopupComponent, {
          width: `${this.baseWidth + limit * 10}px`,
          height: `${this.baseHeight + limit * 5}px`,
          data: response
        });
      },
      error: (error) => {
        console.error("Erreur lors de la requête Flag :", error);
      }
    });
  }

  informationsOLTP(item_id: number, limit: number): void {
    this.donneeAPI.informationOLTP(item_id, limit).subscribe({
      next: (response) => {
        this.dialog.open(PopupComponent, {
          width: `${this.baseWidth + limit * 10}px`,
          height: `${this.baseHeight + limit * 5}px`,
          data: response
        });
      },
      error: (error) => {
        console.error("Erreur lors de la requête Flag :", error);
      }
    });
  }
}
