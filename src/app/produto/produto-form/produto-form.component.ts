import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss'],
})
export class ProdutoFormComponent implements OnInit {
  public produtoForm: FormGroup;

  constructor(
    private form: FormBuilder,
    private produtoService: ProdutoService,
  ) {}

  public ngOnInit() {
    this.produtoForm = this.form.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      categoria: '',
    });
  }

  public onSubmit() {
    this.produtoService.create(this.produtoForm);
  }
}
