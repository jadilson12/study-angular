import { browser, element, by, ElementFinder, ElementArrayFinder } from 'protractor';

describe('#Produtos', () => {
  let bntNovaProduto: ElementFinder;
  let btnSave: ElementFinder;
  let btnClear: ElementFinder;
  let btnClose: ElementFinder;
  let btnDelete: ElementArrayFinder;
  let nomeImput: ElementFinder;
  let descricaoImput: ElementFinder;
  let categoriaImput: ElementFinder;
  let colNomeTable: ElementArrayFinder;
  let btnEdit: ElementArrayFinder;
  let selectCategoria: Function;
  let sleep: Function;

  beforeEach(() => {
    bntNovaProduto = element(by.id('btnAddProduto'));
    btnSave = element(by.id('btn-save'));
    nomeImput = element(by.css('input[formControlName=nome]'));
    descricaoImput = element(by.css('input[formControlName=descricao]'));
    categoriaImput = element(by.id('categorias'));
    btnClear = element(by.id('btnLimparForm'));
    btnClose = element(by.id('btnCloseModal'));
    btnDelete = element.all(by.id('btnDelete'));
    colNomeTable = element.all(by.css('.cdk-column-nome'));
    btnEdit = element.all(by.id('btnEdit'));
    browser.get('/produtos');
    sleep = (s: number) => browser.sleep(s);
    selectCategoria = (item: string) => {
      categoriaImput.click().then(() => {
        element(by.cssContainingText('mat-option', item)).click();
      });
    };
  });

  it('Validar o cadastro ', () => {
    bntNovaProduto.click();
    nomeImput.sendKeys('Informática');
    descricaoImput.sendKeys('Geral');

    selectCategoria('Informática');

    expect(btnSave.isEnabled()).toBeTruthy();

    sleep(2000);
    btnSave.click();

    expect(colNomeTable.count()).toEqual(5);
  });

  it('Validar multiplos cadastros', () => {
    // add 1º item
    bntNovaProduto.click();
    nomeImput.sendKeys('Informática');
    descricaoImput.sendKeys('Geral');
    selectCategoria('Informática');
    expect(btnSave.isEnabled()).toBeTruthy();

    sleep(2000);
    btnSave.click();

    // add 2º item
    bntNovaProduto.click();
    nomeImput.sendKeys('Arroz');
    descricaoImput.sendKeys('Alimentos');
    selectCategoria('Informática');
    expect(btnSave.isEnabled()).toBeTruthy();
    sleep(2000);
    btnSave.click();

    expect(colNomeTable.count()).toEqual(6);
  });

  it('Validar o Editar item', () => {
    btnEdit.get(2).click();

    nomeImput.clear();
    nomeImput.sendKeys('Informática');
    descricaoImput.clear();
    descricaoImput.sendKeys('Geral');
    categoriaImput.clear();
    selectCategoria('Informática');

    expect(btnSave.isEnabled()).toBeTruthy();

    sleep(2000);
    btnSave.click();

    expect(colNomeTable.get(3).getText()).toEqual('Informática');
  });

  it('Validar o button limpar formulário ', () => {
    bntNovaProduto.click();
    nomeImput.sendKeys('Informática');
    descricaoImput.sendKeys('Geral');
    selectCategoria('Informática');

    sleep(2000);
    btnClear.click();

    expect(btnSave.isEnabled()).toBeFalsy();
    expect(btnClear.isEnabled()).toBeFalsy();

    sleep(2000);
    btnClose.click();
  });

  it('Validar a exclusão item', () => {
    btnDelete.last().click();
    sleep(2000);
    element(by.id('btnDeleteConfirm')).click();

    expect(colNomeTable.count()).toEqual(4);
  });
});
